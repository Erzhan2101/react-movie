import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'

const MovieInfo = () => {
    const [info, setInfo] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setInfo(data))
    }, [id])

    return (
        <div>
            Movie Info

        </div>
    )
}
export default MovieInfo