import { useQuery } from "@tanstack/react-query";
import { instance }  from "../instance.js";




export function useGetAllDoctors(speciality) {
    return useQuery({
      queryKey: ["doctor", speciality],
      queryFn: () =>
        instance
          .get("/doctors", { params: { speciality } })
          .then(res => res.data)
          .catch(error => {
            throw new Error(error.message);
          }),
    });
  }


export function useGetDoctor(id){
    return useQuery({
        queryKey:["doctor",id],
        queryFn:()=> instance.get("/doctors/"+id).then(res=>res.data).catch(error=>{
            throw new Error(error.message)
        })
    })
}







