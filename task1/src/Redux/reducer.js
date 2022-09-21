import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes"


const initState={
    count:0
}

const reducer=(state=initState,{type,payload})=>{

    switch(type){
        case ADD_COUNTER:{
            return{
                ...state,
                count:state.count+1
            }

        }
        case REDUCE_COUNTER:{
            return{
                ...state,
                count:state.count-1
            }

        }
        default:{
            return state
                
            
        }
    }

}
export default reducer