import "./App.css";
import Home from "./pages/index";
import SignIn from "./pages/SignIn";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
      </div>
    </Switch>
  );
}

export default App;
