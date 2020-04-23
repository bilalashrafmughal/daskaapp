import React, {Component} from 'react'
import axios from 'axios';
import thumbnail from './thumbnail.png';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Videos.css';
import loader from './loader.gif';

class Videos extends Component{
// https://www.eporner.com/api/v2/video/search/?query=teen&per_page=10&page=2&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json
    
    static defaultProps = {
        query: 'sex',
        per_page: "12",
        page: 1,
        thumbsize: 'medium',
        order: 'latest',
        gay: "1",
        lq: "1"

    }
    constructor(props){
        super(props);

        this.state={
            query: this.props.query,
            per_page: this.props.per_page,
            thumbsize: this.props.thumbsize,
            order: this.props.order,
            gay: this.props.gay,
            lq: this.props.lq,
            
            numberOfResults: '',
            currentPage: 1,
            page: 1,
            videos: [],
            loading: false
        }
        this.getVideos = this.getVideos.bind(this);
        //this.randomQuery = this.randomQuery.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.compareObjects = this.compareObjects.bind(this);
    }
    // randomQuery(){
    //     const randIndex = Math.floor(Math.random()* this.props.query.length);
    //     const keyWord = this.props.query[randIndex]
    //     return keyWord; 
    // }
     compareObjects(obj1, obj2){
        const str1= obj1.query+obj1.order+obj1.gay+obj1.lq;
        const str2= obj2.query+obj2.order+obj2.gay+obj2.lq;
        const results = str1 === str2;
    }
    async getVideos(){
        const {per_page, thumbsize, order, gay, lq, query, page} = this.state;
        //const results = await axios.get(`https://www.eporner.com/api/v2/video/search/?query=${query}&per_page=${per_page}&page=${page}&thumbsize=${thumbsize}&order=${order}&gay=${gay}&lq=${lq}&format=json`);
        this.setState({loading: true});
        const results = await axios.get(`https://www.eporner.com/api/v2/video/search/?query=${query}&per_page=${per_page}&page=${page}&thumbsize=${thumbsize}&order=${order}&gay=${gay}&lq=${lq}&format=json`);
        console.log(results)
        this.setState({
            numberOfResults: results.data.total_count,
            videos: results.data.videos,
            total_pages: results.data.total_pages,
            loading: false
        })
}

    componentDidMount(){
        console.log('mounted');
      this.getVideos();
        
    }
    componentWillReceiveProps(newProps){
        this.setState({
            query: newProps.query,
            order: newProps.order,
            lq: newProps.order,
            gay: newProps.gay
        })
        this.componentDidMount();

    }

    handleChange(evt){
        this.setState({
            page: evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.getVideos(this.state.page);
        this.setState({
            currentPage: this.state.page
        })
        window.scrollTo(0,0);
    }
    handlePrevious(evt){
        evt.preventDefault();
        this.setState(st=>({
            page: st.page -1,
            currentPage: st.currentPage -1
        }))
        this.getVideos(this.state.page);
        window.scrollTo(0,0);
    }
    handleNext(evt){
        evt.preventDefault();
        this.setState(st=>({
            page: st.page +1,
            currentPage: st.currentPage +1
        }))
        this.getVideos(this.state.page);
            window.scrollTo(0, 0)
    }

        render(){
        console.log('Videos: render')
        const {numberOfResults, videos, currentPage, loading, total_pages, query} = this.state;
        if(loading){
            return(
                <div className="Loading">
                    <img src={loader} alt="loader"/>
                </div>

            )
        }else {

        
        return(
            <div className="Videos my-5">
                <div className="container mb-3 text-muted">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Your Searched: /{query} </p>
                            <h3>Searched Videos: {numberOfResults} </h3>
                            <h4> Page No: {currentPage}  </h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {videos.map(video=> (
                            <div key={video.id} className="col-md-3 video-box">
                                <div className="card">
                                    <Link to={`/videos/video/${video.id}`}>
                                    <img className="card-img-top img-responsive" src={thumbnail} alt={video.id} />
                                    <div className="video-length">
                                    <p> {video.length_min} </p>
                                    </div>
                                    <div className="video-overlay">
                                    <i className="fas fa-play"></i>
                                    </div>
                                    </Link>
                                    
                                    
                                </div>
                                <div className="card-body">
                                <h6> {video.title.substring(0, 40)}... </h6>
                                <div className="video-props">
                                    <p> 
                                    Rate: {video.rate}
                                    <i className="fas fa-star"></i> 
                                    <i className="fas fa-star"></i> 
                                    <i className="fas fa-star"></i> 
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    </p>
                                     
                                    <p><i className="fas fa-calendar-alt"></i> {video.added} </p>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total-pages">
                        <h6>Total Pages: {total_pages} </h6>
                    </div>
                    <div className="page-controller">
                        <button onClick={this.handlePrevious} ><i className="fas fa-arrow-left"></i> Previous</button>
                        <form className="page-form" onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChange} type="number" placeholder="Page No..." />
                            <input type="submit" value="Go"/>
                        </form>
                        <button onClick={this.handleNext} >Next <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        )
        }
    }
}
export default Videos;