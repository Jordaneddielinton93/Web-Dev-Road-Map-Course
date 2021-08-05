import "./CategoriesItem.scss"
import { CategoriesApi } from "../../CategoriesApi/CategoriesApi";
const CategoriesItem = ({state}) => {

  // let newObj= CategoriesApi.map((item,index)=>{
  //   return console.log( item.title )
  // })



  return( 

        <>
    {
      
      CategoriesApi.map((item,index)=>{

      return item.page===state.page_number?(
        <main className="CategoriesItem">
          <h1 className="CategoriesItem--title">
            BEGINNER'S GUIDE: {item.title}
          </h1>
          {item.video}
          <p>{item.discription}</p>
        </main>):<></>
    })
  
  
  }
    </>
    
   );
}
 
export default CategoriesItem;