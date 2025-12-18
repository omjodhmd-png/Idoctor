import EventInfo from "../models/Evantinfo.js";
import sequelize from "../config/db.js";
const eventInfo =  {
    title: "La Grande Soirée Gnawa",
    description: "Une soirée exceptionnelle de musique Gnawa avec des artistes marocains.",
    date: "2025-07-20",
    location: "Agadir",
    coverImage: "https://i.pinimg.com/736x/67/73/1f/67731f102e66037e406ba1d691342b3b.jpg",
   
  }
  const seedevent = async () => {
    try {
      await sequelize.sync({ force: true });
      await EventInfo.create(eventInfo);
      console.log(" 8 Moroccan Gnawa event seeded successfully!");
      process.exit(0);
    } catch (error) {
      console.error(" Error seeding artists:", error);
      process.exit(1);
    }
  };
  seedevent();