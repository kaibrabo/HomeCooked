import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import "./App.css";

function App() {
    return (
        // BEM
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    {/* route: "/search" */}
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    {/* route: "/" */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
