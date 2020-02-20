import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={About} />
            <Route path="/projetos" component={Projects} />
            <Route path="/contato" component={Contact} />
        </Switch>
    )
}