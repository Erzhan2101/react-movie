import {useState, useEffect} from "react";
import { useHistory, useParams} from "react-router-dom"
import axios from "axios";

const ActorInfo = () => {

    const [actor, setActor] = useState({})
    const {id} = useParams()
    const history = useHistory();


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${id}?&language=en&api_key=ff9e9d0130b0f3c796f426d2bd9285c3&language=en-US`)
            .then(res => setActor(res.data))
    }, [id])

    return (
        <div className='details-actor'>
            <div>
                <button className="back" onClick={() => history.goBack()}>Back</button>
            </div>
            <div className="info-grid">
                <div>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`} alt=""/>
                </div>
                <div>
                    <h3>{actor.name}</h3>
                    <p className="details-actor-biography"><span>Biography: </span> {actor.biography}</p>
                    <p className="details-actor-birthday"><span>Birthday: </span>{actor.birthday}</p>
                    <p className="details-actor-birth"><span>Place of birth: </span>{actor.place_of_birth}</p>

                </div>

            </div>

        </div>
    );
};

export default ActorInfo;