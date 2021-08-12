import "./CategoriesItem.scss"
import { CategoriesApi } from "../../CategoriesApi/CategoriesApi";
import Footer from "../Footer/Footer"
import { useContext } from "react";
import { pageWrapper } from "../App/App";
const CategoriesItem = () => {
  let stateObj = useContext(pageWrapper)

  return( 

        <>
    {
      CategoriesApi.map((item,index)=>{
      return item.page===stateObj.state.page_number?(
        <main key={index}
        className="CategoriesItem">
          <h1 className="CategoriesItem--title">
            BEGINNER'S GUIDE: {item.title}
          </h1>
          {item.video}
          <p className="CategoriesItem--discription">{item.discription}</p>
          <Footer/>
        </main>):<></>
    })
  }
    </>
    
   );
}
 
export default CategoriesItem;