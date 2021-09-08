import Homescreen from "Project/Homescreen/home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "Shared/Navbar/navbar";
import { useState, useEffect } from "react";
import browserHistory from "browserHistory";
import ErrorScreen from "Project/404/errorPage";

function App() {
  const [menuHidden, hideContent] = useState(false);

  return (
    <Router>
      <Switch>
        <div className="h-full px-10 md:px-20 font-body bg-primary-white">
          <div>
            <Navbar openCallback={hideContent} />
          </div>
          <div className={menuHidden ? "opacity-0" : "opacity-100"}>
            <Route path="/" exact component={Homescreen} />
          </div>
        </div>
        <Route exact component={ErrorScreen} />
      </Switch>
    </Router>
  );
}

export default App;
