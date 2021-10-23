import { BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Intro from "./components/Intro";
import Products from "./components/Products";
import { useState } from "react";
import NavBar from "./components/NavBar";
import DropDownMenu from "./components/DropDownMenu";
import Footer from "./components/Footer";
import Desserts from "./components/Desserts";
import ContactUs from "./components/ContactUs";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {

    setIsOpen (!isOpen)
  }
  return (
    <Router>
      <NavBar toggle={toggle}/>
      <DropDownMenu isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Intro}/>
      </Switch>
      <Switch>
        <Route path='/Products' component={Products}/>
      </Switch>
      <Switch>
        <Route path='/Desserts' component={Desserts}/>
      </Switch>
      <Switch>
        <Route path='/ContactUs' component={ContactUs}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
