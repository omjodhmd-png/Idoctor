import Doctor from "../models/doctor.js";




export const getAllDoctors= async(req,res)=>{
     try {
        const doctors=  await Doctor.findAll();
        res.status(200).json(doctors)
     } catch (error) {
        console.log("error")
        res.status(500).json({ message: error.messag})
     }
}

export const createDoctor = async (req, res) => {
   try {
     const doctor = await Doctor.create(req.body);
     res.status(201).json(doctor);
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 };
 