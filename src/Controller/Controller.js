import React, {Component} from 'react';
import './Controller.css';
import Videos from '../Components/Videos/Videos';
import random from './img/rand.jpg';
import asif from './img/asif.jpg';
import hamza from './img/hamza.jpg'

class Controller extends Component{
    constructor(props){
        super(props);

        this.state = {
        query: 'sex',
        per_page: "12",
        page: "1",
        thumbsize: 'medium',
        order: 'latest',
        gay: "1",
        lq: "1",
        searching: false
        }
    }
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            searching: true
        })
    }
    handleManuChange = (event)=>{
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            searching: true
        })
    }
    render(){
        const serachIcon = <i class="fas fa-search"></i>
        console.log('render')
        const catagories = ['anal', 'asian', 'aunty sex', 'big boobs', 'big booty', 'big dick',
    'big pussy', 'big ass', 'bold sex', 'creative', 'desi sex', 'pakistani sex', 'indian sex',
    'hd sex', 'mother son', 'milf', 'horney', 'naughty america', 'black man', 'cute girls',
    'beach', 'cry sex', 'first time', 'defloration', 'teen', 'mature', 'amature', 'shy girl'

    ]
        const {query, order, lq, gay, per_page, page, thumbsize} = this.state;
        return(
            <div className="Controller">
                <div className="container con-controls">
                    <div className="row search-menu">
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="Search Porn" onChange={this.handleChange} type="text" name="query" />
                            <input type="submit" name="submit" value="Search" />
                        </form>
                    </div>
                    <div className="row con-filters">
                            <div className="col-md-3">
                                <select name="order" onChange={this.handleManuChange}>
                                    <option>latest</option>
                                    <option>longest</option>
                                    <option>shortest</option>
                                    <option>top-rated</option>
                                    <option>most-popular</option>
                                    <option>top-weekly</option>
                                    <option>top-monthly</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                            <select name="gay" onChange={this.handleManuChange}>
                                    <option value="1">+ Gay Content</option>
                                    <option value="0">- Gay Content</option>
                                    <option value="2">Just Gay</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                            <select name="lq" onChange={this.handleManuChange}>
                                <option value="1">HD + LOW Quality</option>
                                <option value="0">HD</option>
                                <option value="2">Low Quality</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select name="query" onChange={this.handleManuChange}>
                                {catagories.map(c=> <option value={c}>{c}</option>)}
                                </select>
                            </div>
                        </div>
                </div>
                {
                    this.state.searching ? <Videos query={query}
                    per_page={per_page} page={page}
                    thumbsize={thumbsize} order={order} gay={gay} lq={lq}
                    /> : (
                        <div className="con-home">
                            <div className="con-text-box">
                             <h3><i className="fas fa-cat"></i>Daska Porn App</h3>
                             <p>First time in the history of daska</p>   
                            </div>
                            <div className="container">
                                <div className="row con-sponsers">
                                <h4>Our Sponsers</h4>
                                <p>Stay Home, Stay Jerking</p>
                                </div>
                                <div className="row">
                                <div className="col-md-4 con-col">
                                    <div className="img-box">
                                     <img src={asif} alt={random} />
                                    </div>
                                    <div className="con-img-about">
                                        <h6>Asif Iqbal</h6>
                                        <p>Doler east</p>
                                    </div> 
                                </div>
                                <div className="col-md-4 con-col">
                                    <div className="img-box">
                                     <img src={random} alt={random} />
                                    </div>
                                    <div className="con-img-about">
                                        <h6>Bilal Ashraf</h6>
                                        <p>Web Developer</p>
                                    </div> 
                                </div>
                                <div className="col-md-4 con-col">
                                    <div className="img-box">
                                     <img src={hamza} alt={random} />
                                    </div>
                                    <div className="con-img-about">
                                        <h6>Hamza bilal</h6>
                                        <p>head of Accounts</p>
                                    </div> 
                                </div>

                                </div>    
                            </div>    
                        </div>
                    )
                }
                
            </div>
        )
    }
}
export default Controller;