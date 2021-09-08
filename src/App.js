import Homescreen from "Project/Homescreen/home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "Shared/Navbar/navbar";
import { useState } from "react";

function App() {
  const [menuHidden , hideContent] = useState(false);
  return (
    <Router>
      <div className="relative 1 h-full px-10 md:px-20 font-body bg-primary-white dark:bg-black">
      <Navbar openCallback={hideContent}/>
        <div className={menuHidden?"opacity-0":"opacity-100"}>
          <Route path="/" exact component={Homescreen} />
        </div>
       
      </div>
    </Router>
  );
}

export default App;
