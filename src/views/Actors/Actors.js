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
        return <div className="spinner-loading ">
            <img className="inLoading" alt="" src="https://icon-library.com/images/windows-10-loading-icon/windows-10-loading-icon-19.jpg"/>
        </div>
    }
    return (
        <div className="all-actors">
            <div>
                <button className="back " onClick={() => history.goBack()}>Back</button>
            </div>
            <div className="actors-all ">
                {
                    actors.map(el =>
                        <div className="all-actor-box">
                            <Link key={id} to={`/actor-info/${el.id}`}>
                                {
                                    el.profile_path === null ?
                                        <i className='bx bxs-user'/>
                                        // <img
                                        //     src="https://o.remove.bg/downloads/c97812bd-9636-4515-9146-05bf8140bb3d/default-user-image-removebg-preview.png"
                                        //     alt="" className='user-unk'/>
                                        :
                                        <img
                                            src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`}
                                            alt="" className='all-actor-img'/>
                                }
                                <h4 className="all-info-description ">{el.name}</h4>
                                <p className="all-actor-character">{el.character}</p>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Actors;