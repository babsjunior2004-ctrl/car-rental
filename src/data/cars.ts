export interface Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "CLA",
    brand: "Mercedes",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1609703048009-d3576872b32c?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.5,
  },
  {
    id: 2,
    name: "X6",
    brand: "BMW",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1676409428414-aa7c43fcafdc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 9.0,
  },
  {
    id: 3,
    name: "RS7",
    brand: "Audi",
    price: 60000,
    image:
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.0,
  },
  {
    id: 4,
    name: "Land Cruiser Prado",
    brand: "Toyota",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1622893288761-823ba60f17a6?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.5,
  },
  {
    id: 5,
    name: "F-150 Raptor",
    brand: "Ford",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1598248691267-4a62dfdfd8a8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 9.2,
  },
  {
    id: 6,
    name: "AMG Classe G",
    brand: "Mercedes",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 7.5,
  },
  {
    id: 7,
    name: "Aventador",
    brand: "Lamborghini",
    price: 70000,
    image:
      "https://images.unsplash.com/photo-1630312465536-5c6b1f76dc3f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 9.5,
  },
  {
    id: 8,
    name: "Rolls-Royce Dawn",
    brand: "Rolls-Royce",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1599912027611-484b9fc447af?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 9.0,
  },
  {
    id: 9,
    name: "Model S",
    brand: "Tesla",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.8,
  },
  {
    id: 10,
    name: "Mustang GT",
    brand: "Ford",
    price: 48000,
    image:
      "https://images.unsplash.com/photo-1597274324473-c3ced481af9c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.2,
  },
  {
    id: 11,
    name: "Cayenne",
    brand: "Porsche",
    price: 62000,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.9,
  },
  {
    id: 12,
    name: "Range Rover Sport",
    brand: "Land Rover",
    price: 58000,
    image:
      "https://wallpaperaccess.com/full/2103958.jpg",
    rating: 8.7,
  },
  {
    id: 13,
    name: "Chiron",
    brand: "Bugatti",
    price: 120000,
    image:
      "https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-39.jpg",
    rating: 9.3,
  },
  {
    id: 14,
    name: "Huracan",
    brand: "Lamborghini",
    price: 75000,
    image:
      "https://media.evo.co.uk/image/private/s--qmsrjtBd--/v1556222299/evo/2019/01/lamborghini-huracan-evo-grigio-artis_107.jpg",
    rating: 9.1,
  },
  {
    id: 15,
    name: "Ferrari 488 Spider",
    brand: "Ferrari",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 9.4,
  },
  {
    id: 16,
    name: "Bentley Continental GT",
    brand: "Bentley",
    price: 92000,
    image:
      "https://cdn.motor1.com/images/mgl/Oo3OzL/s1/one-of-one-bentley-continental-gt-speed.jpg",
    rating: 9.2,
  },
];
