import React from 'react';

import Main from "../main/Main";


import './app.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//npm install react-router-dom


function App() {
    return (
        <div className="container">

            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/main">Pagrindinis</Link>
                            </li>
                            <li>
                                <Link to="/allFilms">Filmai</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/main">
                            <Main/>
                        </Route>
                        <Route path="/allFilms">

                        </Route>
                    </Switch>
                </div>
            </Router>
<Main/>

        </div>
    );
}

export default App;
