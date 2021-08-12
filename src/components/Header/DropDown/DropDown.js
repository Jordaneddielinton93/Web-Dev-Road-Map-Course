import { BrowserRouter, Route, Link } from "react-router-dom";
import ChangePageButton from "../../ChangePageButton/ChangePageButton";

const DropDown = () => {
  return ( 
    <div className="header__Dropdown">
<<<<<<< HEAD
        <div>
          <p className="header__Dropdown__Categories">Categories <IoMdArrowDropdown/> </p>
=======
        <Link to="./Categories">
          <p className="header__Dropdown__Categories">Categories</p>
>>>>>>> parent of 5ea13c0 (added arrows)
          <ul className="header__Dropdown__UList">
            <ol className="header__Dropdown__UList__Dev">
              <li>Web Dev</li>
              <ul className="header__Dropdown__UList__Dev__List">
                <ChangePageButton pageNum={0} title={"HTML"}/>
                <ChangePageButton pageNum={4} title={"CSS"}/>
                <ChangePageButton pageNum={8} title={"Sass"}/>
                <ChangePageButton pageNum={12} title={"JavaScript"}/>
                <ChangePageButton pageNum={18} title={"React"}/>
                <ChangePageButton pageNum={22} title={"Firebase"}/>    
                <ChangePageButton pageNum={25} title={"CodeWars"}/>
              </ul>
            </ol>

            <ol className="header__Dropdown__UList__Dev">
            <li>BackEnd</li>
            </ol>

            <ol className="header__Dropdown__UList__Dev">
            <li>ChatRoom</li>
            </ol>

            <ol className="header__Dropdown__UList__Dev">
            <li></li>
            </ol>
            
          </ul>
        </div>
      </div>
   );
}
 
export default DropDown;