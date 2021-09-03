import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import axios from "axios";

const Actors = () => {
    const [actors, setActors] = useState([])
    const [inLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    const history = useHistory();


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=en&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setActors(data.cast)
                setIsLoading(false)
            })

    }, [id])

    if (inLoading) {
        return <h1 className="inLoading">Loading....</h1>
    }
    return (
        <div className="all-actors">
            <div>
                <button className="back all-actors-back" onClick={() => history.goBack()}>Back</button>
            </div>
            <div className="actors ">
                {
                    actors.map(el =>
                        <div className="actor-box">
                            <Link to={`/actor-info/${el.id}`}>
                                {(el.profile_path === null) ? <img className="user-unk" src="https://o.remove.bg/downloads/da7c58de-f7d3-4f1b-a245-05652b8f157c/avatar-Tonny-Regensburg-removebg-preview.png" alt=""/> : <img src={`https://image.tmdb.org/t/p/w200${el.profile_path}`} alt=""/>}
                                <h4 className="info-description actor-name">{el.name}</h4>
                                <p className="actor-character">{el.character}</p>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Actors;