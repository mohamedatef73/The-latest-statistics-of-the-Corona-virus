import * as actions from './actionTypes'
 
 export function bugAdded(describtion){
   return {
        type:actions.BUG_ADDED,
        payload:{
            describtion:'bug1'
        }
    }
}