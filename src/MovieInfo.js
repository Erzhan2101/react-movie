import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'

const MovieInfo = () => {
    const [info, setInfo] = useState({})
    const [actors, setActors] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?&language=en&api_key=87ddbf572d37c8c9ab2b83fd928c482c`)
            .then(({data}) => setInfo(data))
    }, [id])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=en&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setActors(data.cast))

    }, [id])


    return (
        <div className="info">
            <div className='info-grid'>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${info.poster_path}`} alt=""/>
                <div>
                    <h2 className="info-title">{info.title}</h2>
                    <h4 className="info-description"><span>Description:</span> {info.overview}</h4>
                    <div>
                        <p className="info-rating"><span>Rating:  </span>{info.vote_average}</p>
                        <p className="info-release"><span>Release date:  </span> {info.release_date}</p>
                        <p className="info-language"><span>Language:  </span>{info.original_language}</p>


                    </div>

                </div>
            </div>
            <div className="actors">
                {
                    actors.filter(item => item.popularity > 5).map(el =>
                        <div className="actor-box">
                            <img src={`https://image.tmdb.org/t/p/w200${el.profile_path}`} alt=""/>
                            <h4 className="info-description actor-name">{el.name}</h4>
                            <p className="actor-character">{el.character}</p>
                        </div>
                    )
                }
            </div>
        </div>

    )
}
export default MovieInfo