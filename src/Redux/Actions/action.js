import { ADD } from "Redux/Types"

export const add = (data) =>dispatch=>{

 return{
    type:ADD,
    payload:{
     data
    }
 }
}
