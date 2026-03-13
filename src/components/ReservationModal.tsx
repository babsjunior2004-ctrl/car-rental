import { useState } from "react";
import type { Car } from "../data/cars";
import { useReservations } from "../contexts/ReservationContext";

interface ReservationModalProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  car,
  isOpen,
  onClose,
}) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { addReservation } = useReservations();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      addReservation(car, startDate, endDate);
      onClose();
      alert("Réservation effectuée avec succès !");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black dark:bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Réserver {car.brand} {car.name}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Date de début
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Date de fin
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {startDate && endDate && (
            <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Prix total:{" "}
                {(() => {
                  const start = new Date(startDate);
                  const end = new Date(endDate);
                  const days = Math.ceil(
                    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
                  );
                  return (days * car.price).toLocaleString();
                })()}{" "}
                FCFA
              </p>
            </div>
          )}

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 dark:bg-blue-700 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300"
            >
              Confirmer
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold py-2 px-4 rounded-md hover:bg-gray-400 dark:hover:bg-gray-700 transition duration-300"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
