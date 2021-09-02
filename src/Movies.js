import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

//87ddbf572d37c8c9ab2b83fd928c482c
const Movies = () => {

    const [page, setPage] = useState(1)
    const [films, setFilms] = useState([])
    const [inLoading, setIsLoading] = useState(true)


    useEffect(() => {
        async function TheFilms() {
            const {data: {results}} = await axios(`https://api.themoviedb.org/3/discover/movie?page=${page}&language=en&api_key=87ddbf572d37c8c9ab2b83fd928c482c`)
            setFilms(results)
            setIsLoading(false)
        }
        TheFilms()
    }, [page])

    const handlePage = (num) => {
        setPage(num)
    }

    if (inLoading) {
        return <h1 className="inLoading">Loading....</h1>
    }
    return (
        <div className="movies">
            <div className="btn-movie-grid">
                {
                    Array(6).fill(0).map((el, idx) =>
                        <div>
                            <button className={`btnPage btn btn-primary mx-1 ${page === idx + 1 && "btn-success"}`} onClick={() => handlePage(idx + 1)}>{idx + 1}</button>
                        </div>
                    )
                }
            </div>
            <div className="grid">
                {
                    films.map(el => (
                        <div className="box" key={el.id}>
                            <Link  to={`/movie-info/${el.id}`}>
                                <img className="img-movies" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                <p className="title-movies">{el.title}</p>
                            </Link >
                        </div>
                    ))
                }
            </div>
            <div className="btn-movie-grid">
                {
                    Array(6).fill(0).map((el, idx) =>
                        <div>
                            <button className={`btnPage btn btn-primary mx-1 ${page === idx + 1 && "btn-success"}`} onClick={() => handlePage(idx + 1)}>{idx + 1}</button>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Movies;