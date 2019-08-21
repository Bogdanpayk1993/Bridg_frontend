import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import UserAunthentication from './game/components/user-authentication'
import Statistics from './statistics'
import Rules from './rules'
import './main.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>  
                <div className="h1">
                    <h1>Брідж</h1>
                </div>
                <nav>
                    <Link to="/">Гра</Link>
                    <Link to="/statistics">Статистика</Link>
                    <Link to="/rules">Правила</Link>
                </nav>
                <div className="main">
                    <Switch>
                        <Route path="/" exact component={UserAunthentication} />
                        <Route path="/statistics" exact component={Statistics} />
                        <Route path="/rules" exact component={Rules} />
                    </Switch>
                </div>
            </>
        );
    }
}

export default Main;
