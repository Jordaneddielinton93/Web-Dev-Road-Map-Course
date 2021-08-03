export const ACTION={
  USER_STATUS:"USER_STATUS"
}





export const initState={
  statusColor:false
}






export function reducer(state,action){
  switch (action.type) {
    case ACTION.USER_STATUS:

      return {
        ...state,
        statusColor:action.payload?true:false
      }
      
    default:
      break;
  }




}