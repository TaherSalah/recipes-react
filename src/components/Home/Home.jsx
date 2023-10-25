import axios from 'axios';
import React, { Component } from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom';
import imgJif from '../../images/loading-gif.gif'
export default class Home extends Component {
    state = {
        recipes: []

    }

    componentDidMount = () => {
        this.getRecipesData();
    }
    getRecipesData = async () => {
        let { data } = await axios.get('https://forkify-api.herokuapp.com/api/search?q=broccoli');
        this.setState({ recipes: data.recipes });
        console.log(data.recipes);
    }
    render() {
        return (
            <>
                <div className='container'>
                    {this.state.recipes.length > 0 ? <div className="row">
                        {this.state.recipes.map((recipe,index) =>

                            <div key={index} className='col-md-4'>
                                <div className="data text-center my-2">
                                    <img src={recipe.image_url} className={`${style.imgHeight} w-100`} alt="" srcset="" />
                                    <h6>{recipe.title}</h6>
                                    <Link to={recipe.publisher_url} target='_blank'>publisher</Link>
                                </div>
                            </div>
                        )}
                    </div> : <div className=' min-vh-100  d-flex justify-content-center   '>
                        <img src={imgJif} alt="" srcset="" className='min-vh-25 w-25' />
                        </div>}

                </div>
            </>
        )
    }
}
