import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./Add";
import BlogDetail from "./BlogDetail";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="contenu">
                    <Switch>
                        <Route exact path={"/"}>
                            <Home />
                        </Route>
                        <Route path={"/ajouter"}>
                            <Add />
                        </Route>
                        <Route path={"/blogs/:id"}>
                            <BlogDetail />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
