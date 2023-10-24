import axios from 'axios';
import React, { Component } from 'react'
import { sportsNews } from '../../services/constance'
import { Link } from 'react-router-dom';
import imageNotFound from '../../images/404-not-found.jpg'

export default class Sport extends Component {
    state = {
        Sports: [],

    }
    componentDidMount = () => {
        this.getSportsData();
    }
    getSportsData = async () => {
        let { data } = await axios.get(sportsNews);
        this.setState({ Sports: data.articles });
        console.log(this.Sports.articles);
    }
    render() {
        return (
            <>

                <h1 className="bg-warning p-2 text-center ">Sports News</h1>
                <div className="container">
                    <div className="row">
                        {this.state.Sports.map((Sports) =>
                            <div className="col-md-4">
                                <Link to={Sports.url} target='_blank'>
                                    {Sports.urlToImage !== null ? <img className='w-100 h-75 ' src={Sports.urlToImage} alt="" srcset="" /> : <img className='w-100 h-75' src={imageNotFound} alt="" srcset="" />}
                                </Link>
                                <h6 className={` my-3`}>{Sports.title}</h6>
                                <p className={``} >{Sports.publishedAt}</p>
                            </div>
                        )}
                    </div>
                </div>

            </>
        )
    }
}
