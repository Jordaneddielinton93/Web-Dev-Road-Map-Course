import { useContext } from "react";
import { pageWrapper } from "../App/App";
import ChangePageButton from "../ChangePageButton/ChangePageButton";
import { ACTION } from "../UseReducer/UseReducer";
import "./CatagoriesSidebar.scss"
import { CategoriesApi } from "../../CategoriesApi/CategoriesApi";
const CatagoriesSidebar = () => {
  let lastItem

  return ( 
    <aside className="sidebar">
      <div className="catagoriesCont">
        <ul className="catagoriesCont__list">

          {CategoriesApi.map((item)=>{
            console.log(item.title1)
            
            // if(item.title1!==lastItem){
            //   lastItem=""
            // }else{
            //   lastItem=item.title1
            // }
          
            return[
              // <h1>{item.title1}</h1>,
            <ChangePageButton title={item.title} pageNum={item.page}/>
            ]
          })}

        </ul>
      </div>


      

          {/* <h2 className="catagoriesCont-title">HTML</h2>
          <ul className="catagoriesCont__list">
            <ChangePageButton title={"Tags"} pageNum={0}/>
            <ChangePageButton title={"Elements"} pageNum={1}/>
            <ChangePageButton title={"Atrributes"} pageNum={2}/>
            <ChangePageButton title={"Tips"} pageNum={3}/>
          </ul>

          <h2 className="catagoriesCont-title">CSS</h2>
          <ul className="catagoriesCont__list">
            <ChangePageButton title={"Selectors"} pageNum={4}/>
            <ChangePageButton title={"Display"} pageNum={5}/>
            <ChangePageButton title={"Variables"} pageNum={6}/>
            <ChangePageButton title={"Tips"} pageNum={7}/>
          </ul>

          <h2 className="catagoriesCont-title">Sass</h2>
          <ul className="catagoriesCont__list">
            <ChangePageButton title={"Nesting"} pageNum={8}/>
            <ChangePageButton title={"Import"} pageNum={9}/>
            <ChangePageButton title={"Mixin"} pageNum={10}/>
            <ChangePageButton title={"Variables"} pageNum={11}/>
            <ChangePageButton title={"Functions"} pageNum={12}/>
          </ul>

          <h2 className="catagoriesCont-title">JavaScript</h2>
          <ul className="catagoriesCont__list">
            <ChangePageButton title={"DataTypes"} pageNum={13}/>
            <ChangePageButton title={"Classes"} pageNum={14}/>
            <ChangePageButton title={"Variables"} pageNum={15}/>
          </ul>

          <h2 className="catagoriesCont-title">REACT</h2>
          <ul className="catagoriesCont__list">
            <ChangePageButton title={"DataTypes"} pageNum={16}/>
            <ChangePageButton title={"Classes"} pageNum={17}/>
            <ChangePageButton title={"Variables"} pageNum={18}/>
            <ChangePageButton title={"useEffect"} pageNum={19}/>
            <ChangePageButton title={"useReducer"} pageNum={20}/>
            <ChangePageButton title={"useContext"} pageNum={21}/>
          </ul>
          <h2 className="catagoriesCont-title">Firebase</h2>
          <ul className="catagoriesCont__list">
            <ChangePageButton title={"Auth"} pageNum={22}/>
            <ChangePageButton title={"Database"} pageNum={23}/>
            <ChangePageButton title={"Storage"} pageNum={24}/>


          </ul>
          <h2 className="catagoriesCont-title">CodeWars</h2>
          <ul className="catagoriesCont__list">
            <ChangePageButton title={"Kata 4"} pageNum={25}/>

          </ul> */}
      {/* </div> */}
      
    </aside>
   );
}
 
export default CatagoriesSidebar;