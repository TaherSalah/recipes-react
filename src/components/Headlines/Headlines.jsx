import axios from 'axios'
import React, { Component } from 'react'
import { headlinesNews } from '../../services/constance'
import { Link } from 'react-router-dom'

import imageNotFound from '../../images/404-not-found.jpg'
export default class Headlines extends Component {
    state = {
        headlinesNews: [],
    }
    componentDidMount() {
        this.getHeadlinesNews()
    }
    getHeadlinesNews = async () => {
        let { data } = await axios.get(headlinesNews);

        console.log(data.articles);

        this.setState({ headlinesNews: data.articles })
    }
    render() {
        return (
            <>

                <h1 className="bg-warning p-2 text-center ">headlinesNews</h1>
                <div className="container">
                    <div className="row">
                        {this.state.headlinesNews.map((headlineNews,index) =>
                            <div key={index} className="col-md-4">

                                <Link to={headlineNews.url} target='_blank'>
                                    {headlineNews.urlToImage !== null ? <img className='w-100 h-75 ' src={headlineNews.urlToImage} alt="" srcset="" /> : <img className='w-100 h-75' src={imageNotFound} alt="" srcset="" />}
                                </Link>
                                <h6 className={` my-3`}>{headlineNews.title}</h6>
                                <p className={``} >{headlineNews.publishedAt}</p>
                            </div>

                        )}
                    </div>
                </div>

            </>
        )
    }
}
