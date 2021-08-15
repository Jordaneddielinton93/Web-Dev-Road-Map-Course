
import ChangePageButton from "../ChangePageButton/ChangePageButton";
import "./CatagoriesSidebar.scss"
import { CategoriesApi } from "../../CategoriesApi/CategoriesApi";
const CatagoriesSidebar = () => {
  let lastItem=[]
  let shownTitle
  return ( 
    <aside className="sidebar">
      <div className="catagoriesCont">
        <ul className="catagoriesCont__list">

          {/* this map func places the title when loop changes */}
          {CategoriesApi.map((item)=>{   
            if(lastItem.includes(item.title1)){
              shownTitle=""
            }else{
              shownTitle=<h1 className="catagoriesCont-title">{item.title1}</h1>
              lastItem.push(item.title1)
            }   
            return(
              <>
              {shownTitle}
              <ChangePageButton title={item.title} pageNum={item.page}/>
            </>
            )
          })}

        </ul>
      </div>
      
    </aside>
   );
}
 
export default CatagoriesSidebar;