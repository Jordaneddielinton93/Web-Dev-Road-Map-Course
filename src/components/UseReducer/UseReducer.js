export const ACTION={
  USER_STATUS:"USER_STATUS",
  CHOOSEN_PAGE:"CHOOSE_PAGE"
}



export const initState={
  userStatus:false,
  page_number:0,
  page_title:""
  
}



export function reducer(state,action){
  switch (action.type) {
    case ACTION.USER_STATUS:
      return {
        ...state,
        userStatus:action.payload?true:false
      }

    case ACTION.CHOOSEN_PAGE:
      return{...state,
        page_number:action.payload.pageNum,
        page_title:action.payload.title
      }
      
    default:
      break;
  }




}