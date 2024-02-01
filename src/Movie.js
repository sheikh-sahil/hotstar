import "./Movie.css"

function Movie(props)
{
    return<div id="poster">
        <a href={props.src} target='_self'>
        <img src={props.img}/>
        </a>
    </div>
}
export default Movie;