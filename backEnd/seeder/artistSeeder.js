import sequelize from "../config/db.js";
import Artist from "../models/Artist.js";

const artistsData = [
  {
    name: "Maâlem Mahmoud Guinia",
    speciality: "Traditional Gnawa",
    bio: "Legendary Gnawa musician from Morocco, known for his hypnotic guembri rhythms.",
    image_url: "https://i.pinimg.com/736x/26/93/16/269316c7b1635f993f1cd18e7b0bb78d.jpg",
    performance_time: "20:00",
    price_vip: 300,
    price_standard: 150,
  },
  
  {
    name: "Hassan Hakmoun",
    speciality: "Gnawa Fusion",
    bio: "Fusion artist blending traditional Gnawa with jazz and world music.",
    image_url: "https://i.pinimg.com/1200x/86/37/7e/86377e2ab59cabd46dace15727f33aaf.jpg",
    performance_time: "21:00",
    price_vip: 350,
    price_standard: 180,
  },
  {
    name: "Maâlem Abdelkbir",
    speciality: "Ritual Gnawa",
    bio: "Master of spiritual Gnawa ceremonies and rituals.",
    image_url: "https://i.pinimg.com/1200x/4e/2d/b7/4e2db756e29d82b43e96cce6ea48e406.jpg",
    performance_time: "19:30",
    price_vip: 280,
    price_standard: 140,
  },
  {
    name: "Maâlem Aziz Alilou",
    speciality: "Hypnotic Gnawa",
    bio: "Known for his mesmerizing guembri performances.",
    image_url: "https://www.festival-gnaoua.net/wp-content/uploads/2025/05/Maalem-Omar-hayat.jpg",
    performance_time: "22:00",
    price_vip: 320,
    price_standard: 160,
  },
  {
    name: "Maâlem Mokhtar Gania",
    speciality: "Gnawa Vocalist",
    bio: "Famous for his powerful Gnawa singing style.",
    image_url: "https://www.festival-gnaoua.net/wp-content/uploads/2025/06/MAALEM-AMINE-DAOUDI.jpg",
    performance_time: "20:30",
    price_vip: 280,
    price_standard: 130,
  },
  {
    name: "Maâlem Driss El Maloumi",
    speciality: "Modern Gnawa",
    bio: "Combines traditional Gnawa with modern instruments.",
    image_url: "https://i.pinimg.com/736x/c4/e1/58/c4e1583649b244046532b8476c827714.jpg",
    performance_time: "21:30",
    price_vip: 330,
    price_standard: 170,
  },
  {
    name: "Maâlem Abdelhaq Moudni",
    speciality: "Spiritual Gnawa",
    bio: "Expert in ceremonial Gnawa music for healing rituals.",
    image_url: "https://i.pinimg.com/736x/6a/5c/99/6a5c9980af35c1c4cfa694c0b63544b2.jpg",
    performance_time: "19:00",
    price_vip: 260,
    price_standard: 120,
  },
  {
    name: "Maâlem Brahim Hafid",
    speciality: "Gnawa Bass Master",
    bio: "Famous for his unique guembri bass lines.",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c0/%D9%85%D8%B9%D9%84%D9%85_%D8%A7%D9%84%DA%AF%D9%86%D8%A7%D9%88%D8%A9.jpg",
    performance_time: "22:30",
    price_vip: 340,
    price_standard: 170,
  },
];


const seedArtists = async () => {
  try {
    await sequelize.sync({ alter: true });
    await Artist.bulkCreate(artistsData);
    console.log(" 8 Moroccan Gnawa artists seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error(" Error seeding artists:", error);
    process.exit(1);
  }
};

seedArtists();




