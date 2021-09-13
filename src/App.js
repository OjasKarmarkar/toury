import Homescreen from "Project/Homescreen/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "Shared/Navbar/navbar";
import { useState, useEffect } from "react";
import browserHistory from "browserHistory";
import ErrorScreen from "Project/404/errorPage";

function App() {
  const [menuHidden, hideContent] = useState(false);

  return (
    <Router>
      <div className="font-body bg-primary-white">
      <div className="h-full px-10 md:px-20">
          <div>
            <Navbar openCallback={hideContent} />
          </div>
         
          </div>
      <Switch>
      <Route path="/" exact>
      <div className={"h-full px-10 md:px-20 " + (menuHidden ? "opacity-0" : "opacity-100")}>
            <Homescreen/>
            </div>
      </Route>
      <Route exact component={ErrorScreen}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
