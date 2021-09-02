import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

//87ddbf572d37c8c9ab2b83fd928c482c
const Movies = () => {

    const [page, setPage] = useState(1)
    const [films, setFilms] = useState([])

    useEffect(() => {
        async function TheFilms() {
            const {data: {results}} = await axios(`https://api.themoviedb.org/3/discover/movie?page=${page}&language=ru&api_key=87ddbf572d37c8c9ab2b83fd928c482c`)
            setFilms(results)
        }
        TheFilms()
    }, [page])

    const handlePage = (num) => {
        setPage(num)
    }

    return (
        <div>
            <div className="btn-movie-grid">
                {
                    Array(6).fill(0).map((el, idx) =>
                        <div>
                            <button className='btnPage btn ml-2 btn-primary' onClick={() => handlePage(idx + 1)}>{idx + 1}</button>
                        </div>
                    )
                }
            </div>
            <div className="grid">
                {
                    films.map(el => (
                        <div key={el.id}>
                            <Link to={`/movie-info/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                <div>{el.title}</div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Movies;