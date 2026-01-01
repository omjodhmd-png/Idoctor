import Doctor from "../models/doctor.js";



export const getAllDoctors = async (req, res) => {
  try {
    const { speciality } = req.query; // كنجمعو speciality من query

    const filter = speciality ? { speciality } : {}; // إلا ما عطاهاش user، يرجع جميع الدكاترة

    const doctors = await Doctor.findAll({ where: filter });

    res.json(doctors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};






// GET /doctors/:id
export const getDoctorById = async (req, res) => {
  const { id } = req.params; // id mn URL
  try {
    const doctor = await Doctor.findByPk(id); // Sequelize method bach tjib by primary key
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.status(200).json(doctor);
  } catch (error) {
    console.error("Error fetching doctor by id:", error);
    res.status(500).json({ message: error.message });
  }
};




export const createDoctor = async (req, res) => {
   try {
     const doctors = await Doctor.create(req.body);
     res.status(201).json(doctors);
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 };
 