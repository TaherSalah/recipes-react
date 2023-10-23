import axios from 'axios';
import React, { Component } from 'react'
import style from './Home.module.css'
export default class Home extends Component {
    state = {
        recipes: []

    }

    componentDidMount = () => {
        this.getRecipesData();
    }
    getRecipesData = async () => {
        let { data } = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
        this.setState({ recipes: data.recipes });
        console.log(data.recipes);
    }
    render() {
        return (
            <>
                <div className='container'>
                    <div className="row">
                        {this.state.recipes.map((recipe) =>
                        
                            <div className='col-md-4'>
                                <div className="data">
                                    <h5>{recipe.title}</h5>
                                    <img src={recipe.image_url} className={`${style.imgHeight} w-100`} alt="" srcset="" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}
