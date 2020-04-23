import React, {Component} from 'react'
import './Home.css';
import {Link} from 'react-router-dom'


class Home extends Component{

    render(){

        return(
            <div className="Home">
                <div className="Home-hero">
                    <h1> <span>Daska</span> Youn App</h1>
                    <div className="Home-buttons">
                        <Link className="btn-active" to="/videos"><i className="fas fa-video"></i> Go To Videos</Link>
                        <Link className="not-active" to="/images"><i className="fas fa-images"></i> Go To Images</Link>
                    </div>
                    <h4>first time in the <span>history</span> of daska</h4>
                </div>
            </div>
        )
    }
}

export default Home;