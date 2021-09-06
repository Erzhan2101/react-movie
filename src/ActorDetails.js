import {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom"
import axios from "axios";

const ActorInfo = () => {
    const [filmsList, setFilmsList] = useState([])
    const [actor, setActor] = useState({})
    const {id} = useParams()
    const history = useHistory();


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}?&language=en&api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US`)
            .then(res => setActor(res.data))

        axios(`https://api.themoviedb.org/3/person/${id}/combined_credits?&language=en&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setFilmsList(data.cast))

    }, [id])

    return (
        <div className='details-actor'>
            <div>
                <button className="back" onClick={() => history.goBack()}>Back</button>
            </div>
            <div className="info-grid">
                <div>
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
                    <h2 className="acting-art">Acting art</h2>
                    <div className="acting-art-box">
                        {
                            filmsList.filter(item => item.release_date).sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).map(el =>
                                <div key={el.id} >
                                    <p className="acting-art-details"><span>{el.release_date.slice(0, 4) } ----- </span>{el.title}  <span className="acting-art-det">filmed as</span> {el.character}</p>
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