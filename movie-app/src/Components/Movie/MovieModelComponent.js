import './MovieModelComponent.css'
import React,{useState} from 'react';

function MovieModelComponent(props){
  
    return(
        <div className="movie-model-card">
            <img src={props.img} className='model-image'/>
            <h3 className='m-0'>{props.title}</h3>
            <div className='flex-apart'>
                <div><p className='m-0'>{props.year}</p></div>
                <div className='tag'><p className='m-0'>{props.genre}</p></div>
            </div>
            <p>{props.description}</p>
            
            
            <a className='btn' href={props.link}>Play Trailer</a>
            
            
        </div>
    );
}
export default MovieModelComponent