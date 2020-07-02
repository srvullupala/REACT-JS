import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import aboutme from './aboutme';
import contact from './contact';
import projects from './projects';
import resume from './resume';
import weather from './weather';



const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={aboutme} />
        <Route path="/contact" component={contact} />
        <Route path="/projects" component={projects} />
        <Route path="/resume" component={resume} />
        <Route path="/weather" component={weather} />

    </Switch>
)

export default Main;