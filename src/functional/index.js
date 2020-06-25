import store from './store'
import * as actions from './actionTypes'

const unsubscribe = store.subscribe(()=>{
    console.log('store changed', store.getState())
})
store.dispatch({
    type:actions.BUG_ADDED,
    payload:{
        describtion:'bug1'
    }
})

unsubscribe()

store.dispatch({
    type: actions.BUG_REMOVED,
    payload:{
        id:1
    }
})


console.log(store.getState())