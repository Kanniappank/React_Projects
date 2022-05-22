import './MovieComponent.css'
import MovieModelComponent from './MovieModelComponent';
import BackDrop from './BackDrop';
import React,{useState} from 'react';

function MovieComponent(props){
    let [model,setModel] = useState(false);

    let imageHandler = () =>{
        setModel(true); 
        console.log(model)
       console.log(props.title)
       console.log(model.toString())
    }
    let imageCloseHandler = () =>{
        setModel(false); 
       console.log(props.title)
       console.log(model.toString())
    }
    return(
        <div className='movie-card'>
            <img src = {props.img} className='card-img' onClick={imageHandler}/>
            <h3 className='mb-0'>{props.title}</h3>
            <p>{props.year}({props.genre})</p>
            {model ? <MovieModelComponent title={props.title} year={props.year} genre={props.genre} img={props.img} description = {props.description} link={props.link}/>  : null}
            {model ? <BackDrop onClick={imageCloseHandler}/> : null} 

        </div>
    );
}
export default MovieComponent   