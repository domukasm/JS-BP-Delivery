import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./NavMenu";
import Home from "./Home";
import SignIn from "./SignIn";
import Create from "./Create"
import List from "./List"

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}