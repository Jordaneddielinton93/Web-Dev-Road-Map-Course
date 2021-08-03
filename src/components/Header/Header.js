import "./Header.scss"
import {FcCustomerSupport,FcSearch} from 'react-icons/fc';
import { BrowserRouter, Route, Link } from "react-router-dom";
const Header = () => {
  return ( 
    <header className="header">

      <h1 className="header__Logo">
        <Link to ="./" style={{color:"black"}}>Jord Linton</Link>
        
      </h1>
      
      <div className="header__Dropdown">
        <p className="header__Dropdown__Categories">Categories</p>
        <ul className="header__Dropdown__UList">
          <li className="header__Dropdown__UList-li">HTML</li>
          <li className="header__Dropdown__UList-li">CSS</li>
          <li className="header__Dropdown__UList-li">Sass</li>
          <li className="header__Dropdown__UList-li">JavaScript</li>
          <li className="header__Dropdown__UList-li">React</li>
          <li className="header__Dropdown__UList-li">Firebase</li>
        </ul>
      </div>

      <div className="header__SearchCont">
        <FcSearch className="header__SearchCont-icon"/>
        <input type="text" className="header__SearchCont-Bar"/>
      </div>


      <h1 className="header__Login">
        <Link to="/signin">
        Login
        </Link>
        
      </h1>

      <div className="header__profileImg">
      <FcCustomerSupport/>
      </div>

    </header>
   );
}
 
export default Header;