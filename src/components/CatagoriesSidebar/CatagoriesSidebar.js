import { useContext } from "react";
import { pageWrapper } from "../App/App";
import ChangePageButton from "../ChangePageButton/ChangePageButton";
import { ACTION } from "../UseReducer/UseReducer";
import "./CatagoriesSidebar.scss"
const CatagoriesSidebar = () => {

  let stateObj = useContext(pageWrapper)

  // let [openCat,SetOpenCat]=useState("none")

  

  class DropdownList{
    constructor(mainTag,subTag1,subTag2,subTag3,subTag4,subTag5,subTag6,
      // below this is the page numbers
      pageNum1,pageNum2,pageNum3,pageNum4,pageNum5,pageNum6
      ){
      this.mainTag=mainTag;
      this.subTag1=subTag1;
      this.subTag2=subTag2;
      this.subTag3=subTag3;
      this.subTag4=subTag4;
      this.subTag5=subTag5;
      this.subTag6=subTag6;

      this.pageNum1=pageNum1;
      this.pageNum2=pageNum2;
      this.pageNum3=pageNum3;
      this.pageNum4=pageNum4;
      this.pageNum5=pageNum5;
      this.pageNum6=pageNum6;

    }
    makePage(){
      return(
        <div key={this.mainTag} className="catagoriesCont">
          <h2 className="catagoriesCont-title">{this.mainTag}</h2>
          <ul className="catagoriesCont__list" >

              <ChangePageButton title={this.subTag1} pageNum={this.pageNum1} classname={""}/>

              <ChangePageButton title={this.subTag2} pageNum={this.pageNum2} classname={""}/>

              <ChangePageButton title={this.subTag3} pageNum={this.pageNum3} classname={""}/>

              <ChangePageButton title={this.subTag4} pageNum={this.pageNum4} classname={""}/>

              <ChangePageButton title={this.subTag5} pageNum={this.pageNum5} classname={""}/>

              <ChangePageButton title={this.subTag6} pageNum={this.pageNum6} classname={""}/>
          </ul>
        </div>
      )
    }
  }

  let HTML = new DropdownList("HTML","Tags","Elements","Refs","Tips","","",
  // below this is the page numbers
  0,1,2,3
  )
  let CSS  = new DropdownList("CSS","Selectors","Display","Variables","Tips","","",
  // below this is the page numbers
  4,5,6,7
  )
  let SASS  = new DropdownList("SASS","Nesting","Import","Mixin","Variables","","",
   // below this is the page numbers
   8,9,10,11
  )
  let JavaScript  = new DropdownList("JavaScript","Functions","Data-Types","Classes","Variables","","",
   // below this is the page numbers
   12,13,14,15
  )
  let REACT  = new DropdownList("REACT","State","JSX","useState","useEffect","useReducer","useContext",
   // below this is the page numbers
   16,17,18,19,20,21
  )
  let FIREBASE  = new DropdownList("Firebase","Auth","Database","Storage","","","",
   // below this is the page numbers
   22,23,24
  )
  let CODEWARS  = new DropdownList("CodeWars","Kata6","","","","","",
   // below this is the page numbers
  25
  )

  const DropDownToJSX = [HTML,CSS,SASS,JavaScript,REACT,FIREBASE,CODEWARS]


  return ( 
    <aside className="sidebar">
      {DropDownToJSX.map((item)=>{
        return item.makePage()
      })}
      
      
    </aside>
   );
}
 
export default CatagoriesSidebar;