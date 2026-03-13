import { useState } from "react";
import { motion } from "framer-motion";
import { cars } from "../data/cars";
import type { Car } from "../data/cars";
import CarCard from "../components/carCard";
import ReservationModal from "../components/ReservationModal";

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserve = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-16">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-heading font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Notre Flotte Complète
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Découvrez l'ensemble de nos véhicules d'exception disponibles à la
              location
            </motion.p>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.03, 0.5), // Délai max de 0.5s
                }}
                viewport={{ once: true }}
                className="group"
              >
                <CarCard
                  id={car.id}
                  name={car.name}
                  brand={car.brand}
                  price={car.price}
                  image={car.image}
                  rating={car.rating}
                  onReserve={() => handleReserve(car)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Pourquoi choisir DriveNow ?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Des véhicules d'exception pour des expériences inoubliables
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {cars.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Véhicules disponibles
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Support client
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Satisfaction
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  Premium
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Qualité garantie
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reservation Modal */}
      {selectedCar && (
        <ReservationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          car={selectedCar}
        />
      )}
    </>
  );
};

export default Cars;
