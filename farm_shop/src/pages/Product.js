import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../App.css';

function Product(){

    const[posts, setPosts] = useState([])

useEffect( () => {
    axios.get('https://ghibliapi.herokuapp.com/films').then((response) =>{
        setPosts(response.data);
        console.log(response.data);
    })
},[])


return(
    <div className="App">
        {posts.map(item =>(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={item.movie_banner} alt="im"/>
                    </div>
                    <div className="col-md-6 app__content">
                        <h2 key={item.id}>Title: <Link to={`/shop/${item.id}`} style={{textDecoration:"none"}}>{item.title}</Link></h2>
                        <h4> Director:<Link to={`/`} style={{textDecoration:"none"}}>{item.director}</Link></h4>
                        <h4>Release Date: {item.release_date}</h4>
                        <h4>Rating: {item.rt_score}</h4>
                    </div>
                </div>
            </div>
        ))}
    </div>
)

}

export default Product;