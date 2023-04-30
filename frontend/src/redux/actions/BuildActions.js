import axios from "axios"
import { BUILD_RESUME, BUILD_RESUME_FAIl, BUILD_RESUME_SUCCESS } from "../constnants/ResumeConstants"

export const BuldResumeAction =(html)=>async(dispatch)=>{
   try {
       dispatch({
           type:BUILD_RESUME
        })
        
        const config = {
            headers:{
                'Content-Type':'application/json',
                "token":JSON.parse(localStorage.getItem('token'))
            },
            withCredentials:true
        }
        const url = {
            url:'http://localhost:3000/temp',
            html
        }
        console.log(1111);
        
      
        const { data } = await axios.post(`${process.env.REACT_APP_API_HOST}/build/template1`, url, config)

        // console.log(data);
        dispatch({
            type:BUILD_RESUME_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        console.log(1111);
        dispatch({
        type:BUILD_RESUME_FAIl
    })

   }
}