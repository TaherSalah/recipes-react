// import axios from 'axios'
// import React, { Component } from 'react'
// import imageNotFound from '../../images/404-not-found.jpg'
// import { Link } from 'react-router-dom'
// import style from './About.module.css'

// import {allNews} from '../../services/constance'

// export default class About extends Component {
//   state = {
//     articles: [],
//   }



//   //////////////****  get articles data  *****/////////////////


//   getArticle = async () => {

//     let { data } = await axios.get(allNews);
//     this.setState({ articles: data.articles });
//     console.log(data);


//   }

//   componentDidMount() {
//     this.getArticle();
//   }


//   render() {
//     return (
//       <>
//         <div className="container">
//           <div className="row">
//             {this.state.articles.map((article,index) =>

//               <div key={index} className="col-md-4 my-4">
//                 <Link to={article.url} target='_blank'>
//                   {article.urlToImage !== null ? <img className='w-100 h-75 ' src={article.urlToImage} alt="" srcset="" /> : <img className='w-100 h-75' src={imageNotFound} alt="" srcset="" />}
//                 </Link>
//                 <h6 className={`${style.title} my-3`}>{article.title}</h6>
//                 <p className ={`${style.createAt}`} >{article.publishedAt}</p>


//               </div>

//             )
//             }
//           </div>
//         </div>
//       </>
//     )
//   }
// }
import axios from 'axios'
import React, { useEffect } from 'react'

export default function About() {

  useEffect(()=>{
    getPizzaData()
  });

  const getPizzaData=async()=>{

    let {data} =await axios.get('https://forkify-api.herokuapp.com/api/search?q=broccoli');

    console.log(data.recipes)


  }



  return (
    
    <div>
      
    </div>
  )
}
