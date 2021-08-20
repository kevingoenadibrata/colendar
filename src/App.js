import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./Context/User";
import Calendar from "./Routes/Calendar";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Calendar} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
