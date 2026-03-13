import React, { createContext, useContext, useState } from "react";
import { cars } from "../data/cars";
import { getMonth, getYear } from "date-fns";
import type { ReactNode } from "react";
import type { Car } from "../data/cars";

interface Reservation {
  id: number;
  car: Car;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: "active" | "completed" | "cancelled";
}

interface ReservationContextType {
  reservations: Reservation[];
  addReservation: (car: Car, startDate: string, endDate: string) => void;
  cancelReservation: (id: number) => void;
  getActiveReservations: () => Reservation[];
  getReservationHistory: () => Reservation[];
  getDashboardStats: () => {
    monthlyReservations: Array<{ month: string; count: number }>;
    topCars: Array<{ brand: string; count: number; model: string }>;
    availability: { available: number; booked: number; total: number };
    avgRating: number;
    totalSpent: number;
    totalCompleted: number;
  };
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

// eslint-disable-next-line react-refresh/only-export-components
export const useReservations = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error(
      "useReservations must be used within a ReservationProvider",
    );
  }
  return context;
};

interface ReservationProviderProps {
  children: ReactNode;
}

export const ReservationProvider: React.FC<ReservationProviderProps> = ({
  children,
}) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const addReservation = (car: Car, startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
    );
    const totalPrice = days * car.price;

    const newReservation: Reservation = {
      id: Date.now(),
      car,
      startDate,
      endDate,
      totalPrice,
      status: "active",
    };

    setReservations((prev) => [...prev, newReservation]);
  };

  const cancelReservation = (id: number) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, status: "cancelled" } : res,
      ),
    );
  };

  const getActiveReservations = () => {
    return reservations.filter((res) => res.status === "active");
  };

  const getReservationHistory = () => {
    return reservations.filter((res) => res.status !== "active");
  };

  const getDashboardStats = () => {
    const active = getActiveReservations();
    const history = getReservationHistory();
    const allReservations = [...active, ...history];

    // Monthly reservations
    const monthlyMap = new Map<string, number>();
    allReservations.forEach((res) => {
      const date = new Date(res.startDate);
      const key = `${getYear(date)}-${String(getMonth(date) + 1).padStart(2, "0")}`;
      monthlyMap.set(key, (monthlyMap.get(key) || 0) + 1);
    });
    const monthlyReservations = Array.from(monthlyMap.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([month, count]) => ({ month, count }));

    // Top cars (brand + model)
    const carMap = new Map<string, number>();
    allReservations.forEach((res) => {
      const key = `${res.car.brand} ${res.car.name}`;
      carMap.set(key, (carMap.get(key) || 0) + 1);
    });
    const topCars = Array.from(carMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([brand, count]) => ({
        brand,
        count,
        model: brand.split(" ")[1] || "",
      }));

    // Availability (mock: total cars - active bookings)
    const totalCars = cars.length;
    const booked = active.length;
    const available = totalCars - booked;

    // Avg rating
    const avgRating =
      allReservations.length > 0
        ? allReservations.reduce((sum, res) => sum + res.car.rating, 0) /
          allReservations.length
        : 0;

    const totalSpent = allReservations.reduce(
      (sum, res) => sum + res.totalPrice,
      0,
    );
    const totalCompleted = history.filter(
      (r) => r.status === "completed",
    ).length;

    return {
      monthlyReservations,
      topCars,
      availability: { available, booked, total: totalCars },
      avgRating: Number(avgRating.toFixed(1)),
      totalSpent,
      totalCompleted,
    };
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        addReservation,
        cancelReservation,
        getActiveReservations,
        getReservationHistory,
        getDashboardStats,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
