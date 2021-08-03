export const ACTION={
  USER_STATUS:"USER_STATUS"
}





export const initState={
  userStatus:false
}






export function reducer(state,action){
  switch (action.type) {
    case ACTION.USER_STATUS:

      return {
        ...state,
        userStatus:action.payload?true:false
      }
      
    default:
      break;
  }




}