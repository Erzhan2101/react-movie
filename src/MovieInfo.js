import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory, useParams} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Fancy from "./Fancy";

const MovieInfo = () => {
    const [info, setInfo] = useState({})
    const [actors, setActors] = useState([])
    const [trailers, setTrailers] = useState([])

    const [inLoading, setIsLoading] = useState(true)
    const [actorsLoading, setActorsLoading] = useState(true)
    const history = useHistory();
    const {id} = useParams()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?&language=en&api_key=87ddbf572d37c8c9ab2b83fd928c482c`)
            .then(({data}) => {
                setInfo(data)
                setIsLoading(false)
            })


        axios(`http://api.themoviedb.org/3/movie/${id}/videos?&language=ru&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setTrailers(data.results))


        axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=en&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setActors(data.cast)
                setActorsLoading(false)
            })

    }, [id])

    const btnFarther = () => {
        history.push(`/actors/${id}`)
    }

    if (inLoading && actorsLoading) {
        return <h1 className="inLoading">Loading....</h1>
    }
    return (
        <div className="info">
            <div>
                <button className="back" onClick={() => history.goBack()}>Back</button>
            </div>
            <div className='info-grid'>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${info.poster_path}`} alt=""/>
                <div>
                    <h2 className="info-title">{info.title}</h2>
                    <h4 className="info-description-span"><span>Description:</span> {info.overview}</h4>
                    <div className="grid-2">
                        <div>
                            <p className="info-rating"><span>Rating:  </span>{info.vote_average}</p>
                            <p className="info-release"><span>Release date:  </span> {info.release_date}</p>
                            <p className="info-language"><span>Language:  </span>{info.original_language}</p>
                            <p className="info-budget"><span>Budget: </span>${info.budget?.toLocaleString()}</p>
                            <p className="info-revenue"><span>Revenue: </span>${info.revenue?.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className="info-genre"><span>Genre:  </span>{info.genres?.map(item => <div
                                key={item}>{item.name}</div>)}

                            </p>
                            <p className="info-film-duration">
                                <span>Film duration: </span> {Math.floor(info.runtime / 60)} hour {Math.floor(info.runtime % 60)} minutes
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {
                trailers.map(item =>
                    <Fancy id={item.key} key={item.id}/>
                )
            }


            <div className="actors">
                <h4 className="actors-desc">Starred in the film</h4>
                <OwlCarousel className='owl-theme' margin={10} items={4}>
                    {
                        actors.slice(actors, 10).map(el =>
                            <div className="actor-box">
                                <Link to={`/actor-info/${el.id}`}>
                                    {
                                        el.profile_path === null ?
                                            <img
                                                src="https://o.remove.bg/downloads/e8ade73f-2117-4dcb-9c56-cf552cbf6c4a/default-user-image-removebg-preview.png"
                                                alt="" className='img-movies-user'/>
                                            :
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                                                alt="" className='actor-img'/>
                                    }
                                    <h4 className="actor-name">{el.name}</h4>
                                    <p className="actor-character">{el.character}</p>
                                </Link>
                            </div>
                        )
                    }
                    <button className="look-beyond" onClick={btnFarther}>look beyond →</button>
                </OwlCarousel>
            </div>
        </div>
    )
}
export default MovieInfo