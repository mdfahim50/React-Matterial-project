import React from 'react';
import './App.css';
import PostData from './Components/Post/PostData';
import Error from './Components/Error';
import PostDetails from './Components/Post/PostDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <PostData></PostData>
          </Route>
          <Route path="/home">
            <PostData></PostData>
          </Route>
          <Route path="/post/:postKey">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
