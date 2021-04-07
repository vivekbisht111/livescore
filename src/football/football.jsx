import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Live from './live';
import League from './league';
const fhome=()=>{
    return(
        <div className = 'home'>
            Home Page
            <Link className="link" to='/live'>Live Fixtures</Link>
            <Link className="link" to='/league'>Leagues</Link>
            {console.log(window.env.REACT_APP_KEY)}
        </div>
    )
}

export default function football(props){
    return (
        <div className='football'>
            <Router>
                <Switch>
                    <Route path='/football/' exact component={fhome}></Route>
                    <Route path='/live' exact component={Live}></Route>
                    <Route path='/league' exact component={League}></Route>
                </Switch>
            </Router>
        </div>
    )
}