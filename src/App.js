import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Components/About/About.js";
import Home from "./Components/Home/Home.js";
import PostDetail from "./Components/PostDetail/PostDetail.js";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/users">

        </Route>
        <Route path="/post/:id">
          <PostDetail/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}


export default App;
