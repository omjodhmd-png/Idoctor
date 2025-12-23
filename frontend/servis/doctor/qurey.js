import { useQuery } from "@tanstack/react-query";
import { instance }  from "../instance.js";




export function useGetAllDoctors(){
     return useQuery({
         queryKey:["doctor"],
         queryFn:()=> instance.get("/doctors").then(res=>res.data).catch(error=>{
            throw new Error(error.message)

        })
     })
}



export function useGetDoctor(id){
    return useQuery({
        queryKey:["doctor"],
        queryFn:()=> instance.get("/doctors/"+id).then(res=>res.data).catch(error=>{
            throw new Error(error.message)
        })
    })
}







