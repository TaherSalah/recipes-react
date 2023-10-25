// import axios from 'axios'
// import React, { Component } from 'react'
// import imageNotFound from '../../images/404-not-found.jpg'
// import { Link } from 'react-router-dom'

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
import React, { useEffect, useState } from 'react'
import style from './About.module.css'

export default function About() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getPizzaData()
  }, []);

  const getPizzaData = async () => {

    let { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);


  }

  console.log(products);


  return (

    <div>
      <div className="row">
        {
          products.map((product) =>

            <div key={product.id} className="col-md-4">
              <div className="prod text-center">
                <img className={`${style.imageH} w-50`} src={product.image} alt="" />
                <h6>{product.category}</h6>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}
