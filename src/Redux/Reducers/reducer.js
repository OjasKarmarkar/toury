import { ADD } from "Redux/Types"

export const your_reducers = (state=[],action) =>{

    switch(action.type){
    
     case ADD : 
     return [   
       ...action.payload.data
            ]
     default: return state
    }
    
    }
    