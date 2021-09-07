import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Search = () => {

    const {name} = useParams()
    const [film, setFilm] = useState({})
    const [page, setPage] = useState(1)
    const [inLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?&language=en&query=${name}&page=${page}&api_key=87ddbf572d37c8c9ab2b83fd928c482c`)
            .then(({data}) => {
                setFilm(data)
                setIsLoading(false)
            })

    }, [name, page])


    let pageButtons = ""
    if (film.total_pages > 1 && page === 1) {
        pageButtons = (
            <button className='pageButton' onClick={() => setPage(page + 1)}><i className='bx bxs-right-arrow-circle'/>
            </button>)
    } else if (film.total_pages > page && page > 1) {
        pageButtons = (<>
            <button className='pageButton' onClick={() => setPage(page - 1)}><i className='bx bxs-left-arrow-circle'/>
            </button>
            <button className='pageButton' onClick={() => setPage(page + 1)}><i className='bx bxs-right-arrow-circle'/>
            </button>
        </>)
    } else if (film.total_pages === page && page !== 1) {
        pageButtons = (<button className='pageButton' onClick={() => setPage(page - 1 )}><i
            className='bx bxs-left-arrow-circle'/></button>)
    }

    if (inLoading) {
        return <div className="spinner-loading ">
            <img className="inLoading" alt=""
                 src="https://icon-library.com/images/windows-10-loading-icon/windows-10-loading-icon-19.jpg"/>
        </div>
    }
    return (
        <div className='movies'>
            <div>
                {pageButtons}
            </div>
            <div className="search-grid">
                {
                    film.results.map(el =>
                        <div className="box-search">
                            <Link to={`/movie-info/${el.id}`}>
                                <img className="img-movies" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                <p className="title-movies">{el.title}</p>
                            </Link>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default Search;