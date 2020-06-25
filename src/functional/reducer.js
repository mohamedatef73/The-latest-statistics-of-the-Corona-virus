import * as actions from './actionTypes'

let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    decribtion: action.payload.decribtion,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
        default:
            return state;
    }
}