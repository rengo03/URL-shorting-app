export const initialState = {
    isOpen: false
}

export function menuReducer(state, actionResult) {
    switch (actionResult.type) {
        case "MENU_IS_OPEN":{
            let newState = {
                isOpen: true
            }
            return newState;
        }
        case "MENU_IS_CLOSED":{
            let newState = {
                isOpen: false
            }
            return newState;
        }
        default:
           return state;
    }
}