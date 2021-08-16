import { BrowserRouter, Route, Link } from "react-router-dom";
import ChangePageButton from "../../ChangePageButton/ChangePageButton";
import { FcNext } from 'react-icons/fc';
const DropDown = () => {
  return ( 
    <div className="header__Dropdown">

        {/* <div>
          <p className="header__Dropdown__Categories">Categories <IoMdArrowDropdown/> </p> */}

        <Link to="./Categories">
          <p className="header__Dropdown__Categories">Categories</p>

          <ul className="header__Dropdown__UList">
            <ol className="header__Dropdown__UList__Dev">
              <li>Web Dev <FcNext/></li>
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
            <li>BackEnd <FcNext/></li>
            </ol>

            <ol className="header__Dropdown__UList__Dev">
            <li>ChatRoom <FcNext/></li>
            </ol>

            <ol className="header__Dropdown__UList__Dev">
            <li></li>
            </ol>
            
          </ul>
        {/* </div> */}
        
    </Link>
    </div>
   );
}
 
export default DropDown;