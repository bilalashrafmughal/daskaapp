import React, {Component} from 'react';
import axios from 'axios';
import './Video.css';
import Videos from '../Videos/Videos'

class Video extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: '',
            title: '',
            views: '',
            date: '',
            rating: '',
            embededUrl: '',
            keywords: ''
        }
        this.getVideo = this.getVideo.bind(this)
        console.log('constructor')
        
    }

    async getVideo(id){
        const videoData = await axios.get(`https://www.eporner.com/api/v2/video/id/?id=${id}&thumbsize=medium&format=json`);
        this.setState({
            id: videoData.data.id,
            title: videoData.data.title,
            views: videoData.data.views,
            rating: videoData.data.rate,
            date: videoData.data.added,
            embededUrl: videoData.data.embed,
            keywords: videoData.data.keywords
        })
    }
    componentDidMount(){
        console.log('component mount');
        this.getVideo(this.props.id);
        

    }
    
    render(){
        if(this.state.id !== this.props.id){
            this.componentDidMount();
        }
        const {title, keywords, views, date, rating, embededUrl, id} = this.state;
        console.log('render')
        return(
            <div className="Video">
                <div className="col-md-12 video-frame">
                        <iframe allowFullScreen src="https://www.youtube.com/embed/ow1QqW0jzTo">

                        </iframe>

                        </div>
                        <div className="video-text">
                        <h2> {title} </h2>
                        <p>Video Added on: {date}</p>
                        <div className="col-md-4 video-views-section">
                        <h3 className="">Views: {views} </h3>
                        <h6>Rate:  {rating}   
                                     <i className="ml-2 fas fa-star"></i> 
                                    <i className="fas fa-star"></i> 
                                    <i className="fas fa-star"></i> 
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                         </h6>
                        </div>
                        

                    </div>
                
                    
                <div className="container">
                    
                    <div className="row">
                        <Videos />
                    </div>
                </div>
            </div>
        )

    }
}

export default Video;