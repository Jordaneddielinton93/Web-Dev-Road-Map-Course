import { useContext } from "react";
import { pageWrapper } from "../App/App";
import ChangePageButton from "../ChangePageButton/ChangePageButton";
import { ACTION } from "../UseReducer/UseReducer";
import "./CatagoriesSidebar.scss"
import { CategoriesApi } from "../../CategoriesApi/CategoriesApi";
const CatagoriesSidebar = () => {
  let lastItem=[]
  let shownTitle
  return ( 
    <aside className="sidebar">
      <div className="catagoriesCont">
        <ul className="catagoriesCont__list">

          {CategoriesApi.map((item)=>{
            console.log(lastItem)
            
            if(lastItem.includes(item.title1)){
              shownTitle=""

            }else{
              shownTitle=item.title1
              lastItem.push(item.title1)
            }
          
            return[
              <h1 className="catagoriesCont-title">{shownTitle}</h1>,
            <ChangePageButton title={item.title} pageNum={item.page}/>
            ]
          })}

        </ul>
      </div>
      
    </aside>
   );
}
 
export default CatagoriesSidebar;