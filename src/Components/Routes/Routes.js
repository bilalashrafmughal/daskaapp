import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom';
import Videos from '../Videos/Videos'
import Video from '../Video/Video'
import Controller from '../../Controller/Controller';

class Routes extends Component{

    render(){
        const getId = props => {
            const id = props.match.params.id;
            return <Video {...props} id={id} />
        }
        return(
        <Switch>
            <Route exact path="/" component={Controller} />
            <Route exact path="/videos" component= {Videos} />
            <Route exact path="/videos/video/:id" component={getId }/>
        </Switch>
        )
        

    }
}

export default Routes;