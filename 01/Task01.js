import React from 'react';
import Home from "../src/components/Home";
import Contact from "../src/components/Contact";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

const Task01 = () => {
  return (
    <div>
      <h1>Task01</h1>
      <nav>
        <Link to="/task01/home">Home</Link> |{" "}
        <Link to="/task01/contact">Contact</Link>
      </nav>
      <Switch>
        <Route exact path="/task01/home" component={Home} />
        <Route exact path="/task01/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Task01;

