import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import './App.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

      <Switch>
        <Route path="/signin" component={Signin} />
        <Route exact path="/" component={LandingPage} />




      </Switch>
      <Footer/>

    </div>
    </Router>

  );
}

export default App;
