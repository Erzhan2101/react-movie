import {useState, useEffect} from "react";
import {Link, useHistory, useParams} from "react-router-dom"
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ActorInfo = () => {
    const [filmsList, setFilmsList] = useState([])
    const [actorFilms, setActorFilms] = useState([])
    const [actor, setActor] = useState({})
    const {id} = useParams()
    const history = useHistory();
    const [inLoading, setIsLoading] = useState(true)
    const [actorsLoading, setActorsLoading] = useState(true)


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}?&language=en&api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US`)
            .then(res => {
                setActor(res.data)
                setIsLoading(false)
            })


        axios(`https://api.themoviedb.org/3/person/${id}/combined_credits?&language=en&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setFilmsList(data.cast))

        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setActorFilms(data.cast)
                setActorsLoading(false)
            })


    }, [id])


    if (inLoading && actorsLoading) {
        return <div className="spinner-loading ">
            <img className="inLoading" alt=""
                 src="https://icon-library.com/images/windows-10-loading-icon/windows-10-loading-icon-19.jpg"/>
        </div>

    }
    return (
        <div className='details-actor'>
            <div>
                <button className="back" onClick={() => history.goBack()}>Back</button>
            </div>
            <div className="info-grid">
                <div key={id}>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`} alt=""/>
                    <p className="actor-details-name"><span>Name: </span>{actor.name}</p>
                    <p className="details-actor-gender"><span>Gender: </span>{actor.gender === 1 ? "Woman" : "Man"}</p>
                    <p className="details-actor-birthday"><span>Birthday: </span>{actor.birthday}</p>
                    <p className="details-actor-birth"><span>Place of birth: </span>{actor.place_of_birth}</p>
                    <p className="details-actor-known">Also known as:</p>{actor?.also_known_as?.map(name =>
                    <p>{name}</p>)}
                </div>
                <div>
                    <h3 className="actor-details-name-hero">{actor.name}</h3>
                    <p className="details-actor-biography"><span>Biography: </span> {actor.biography}</p>
                    <h4 className="notable-for">Notable for</h4>
                    <OwlCarousel className='owl-theme' margin={10} items={4} dots={false} nav>
                        {
                            actorFilms.filter(el => el.vote_average).sort((a, b) => b.vote_average - a.vote_average).slice(0, 10).map(el =>
                                <Link key={id} to={`/movie-info/${el.id}`}>{el.poster_path
                                        ?
                                        <img alt=""  src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`}/>
                                        :
                                        <img className="no-img" alt="" src="https://o.remove.bg/downloads/7fc3cb79-d4bd-4307-9458-d426167fff5c/placeholder-removebg-preview.png"/>
                                }

                                </Link>
                            )
                        }
                    </OwlCarousel>
                    <h2 className="acting-art">Acting art</h2>
                    <div key={id} className="acting-art-box">
                        {
                            filmsList.filter(item => item.release_date).sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).map(el =>
                                <div key={el.id}>
                                    <p className="acting-art-details">{el.release_date.slice(0, 4)}<span> ----- </span>{el.title}
                                        <span className="acting-art-det">filmed as</span> {el.character}</p>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ActorInfo;