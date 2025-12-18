import {DataTypes} from "sequelize";
import sequelize from "../config/db.js";



const Doctor = sequelize.define("doctor", {
    name :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    speciality:{
        type:DataTypes.STRING,
        allowNull:false
    },
    bio:{
        type:DataTypes.STRING,
        allowNull:false

    },
    image_url:{
        type:DataTypes.STRING,
        allowNull:false
    },
    work_time:{
        type:DataTypes.STRING,
        allowNull:false
    },
   
  

});
export default Doctor;