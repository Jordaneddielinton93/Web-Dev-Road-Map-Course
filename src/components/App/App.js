
import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import FireLoginStatus from "../../Lib/FireLoginStatus/FireLoginStatus";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import RoadMap from "../RoadMap/RoadMap";
import Signin from "../Signin/Signin";
import { ACTION, initState, reducer } from "../UseReducer/UseReducer";
import './App.scss';

function App() {
  

  let [state,dispatch]= useReducer(reducer,initState)

  let [user]=FireLoginStatus()
  useEffect(()=>{
    dispatch({type:ACTION.USER_STATUS,payload:user?true:false})
  },[user])




  console.log(state)

  return (
    <Router>
    <div className="App">
      <Header state={state} USER={user}/>

      <Switch>

        <Route path="/signin">
          <Signin state={state} dispatch={dispatch}/>
        </Route>
        
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/RoadMap" component={RoadMap} />




      </Switch>
      <Footer/>

    </div>
    </Router>

  );
}

export default App;
