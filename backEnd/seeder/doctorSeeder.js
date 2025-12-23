// import Doctor from "../models/doctor.js";
// import sequelize from "../config/db.js";




// const doctors =[
//       {
//         fullName: "Dr. Ahmed Benali",
//         speciality: "Cardiologist",
//         bio: "Specialist in heart diseases with 10 years of experience.",
//         imageUrl: "https://i.pinimg.com/736x/86/c5/fd/86c5fd973bbce56c60d6747e592913db.jpg",
//         workTime: "09:00 - 17:00",
//         phone: "0612345678",
//         address: "Casablanca",
//         rating: 4.5,
//         price: 300,
//         isAvailable: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         fullName: "Dr. Sara El Amrani",
//         speciality: "Dermatologist",
//         bio: "Expert in skin care and dermatology.",
//         imageUrl: "https://i.pinimg.com/736x/a8/43/ef/a843ef1d16fc3ed5263f28da06a26df6.jpg",
//         workTime: "10:00 - 18:00",
//         phone: "0623456789",
//         address: "Rabat",
//         rating: 4.7,
//         price: 250,
//         isAvailable: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         fullName: "Dr. Youssef Karim",
//         speciality: "Dentist",
//         bio: "Professional dentist specialized in cosmetic dentistry.",
//         imageUrl: "https://i.pinimg.com/736x/34/2c/c7/342cc740feca7cc553c51d1c035e1516.jpg",
//         workTime: "08:30 - 16:30",
//         phone: "0634567890",
//         address: "Marrakech",
//         rating: 4.3,
//         price: 200,
//         isAvailable: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         fullName: "Dr. sanir Chraibi",
//         speciality: "Gynecologist",
//         bio: "Specialist in women health and pregnancy follow-up.",
//         imageUrl: "https://i.pinimg.com/736x/33/9c/1f/339c1f418b932b44b087907caa3f5009.jpg",
//         workTime: "09:00 - 15:00",
//         phone: "0645678901",
//         address: "Agadir",
//         rating: 4.8,
//         price: 350,
//         isAvailable: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         fullName: "Dr. Hamza Ouardi",
//         speciality: "Orthopedic",
//         bio: "Bone and joint specialist.",
//         imageUrl: "https://i.pinimg.com/736x/f2/f1/fa/f2f1fa3a611dfb4f4be81396ebca56eb.jpg",
//         workTime: "11:00 - 19:00",
//         phone: "0656789012",
//         address: "Fes",
//         rating: 4.4,
//         price: 280,
//         isAvailable: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         fullName: "Dr. ahmed Touhami",
//         speciality: "Pediatrician",
//         bio: "Child healthcare specialist with friendly approach.",
//         imageUrl: "https://i.pinimg.com/736x/ae/95/03/ae9503ac54e76e7df5f23abc71b21793.jpg",
//         workTime: "09:00 - 17:00",
//         phone: "0667890123",
//         address: "Tanger",
//         rating: 4.9,
//         price: 220,
//         isAvailable: true,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]


//     const seedDoctor = async () => {
//       try {
//         await sequelize.sync({ force: true });
//         await Doctor.bulkCreate(doctors);
//         console.log(" seeder is raning successfully!");
//         process.exit(0);
//       } catch (error) {
//         console.error(" Error seeding doctor:", error);
//         process.exit(1);
//       }
//     };
//     seedDoctor();