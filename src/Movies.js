
import Movie from "./Movie.js"
import "./Movies.css"
import Navigation from "./Navigation.js";




function Movies(props)
{
   let films=props.movies;
    return<div id="Box">
        
        
        <h1>{props.label}</h1>
    <div id="list">  
    { 
    
    films.map((item,index,ar)=>{
           return <Movie img={item.poster}   src={item.src}/>;
     })
      
    }   
    </div>
    </div>
    
}

export default Movies