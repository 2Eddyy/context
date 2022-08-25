export const intialState = {
    crad: [],
    isAthentication:JSON.parse(localStorage.getItem('userLogin')) || false,
    
}
console.log(intialState);
export const stateReducer = (state, action) => {
    // console.log(state);
    // return {...state,card:{name:'edwin'}}
    switch (action.type) {
        case "addtocard": {
            return {
                ...state,
                crad: [...state.crad, action.payload]
            }
        }
        case "remove":{
            return{
                ...state,
                crad:  action.payload
            }
        }
        case "login":{
           return{
               ...state,
               isAthentication:action.payload
           }
        }
      
        default: return state;
    }
}