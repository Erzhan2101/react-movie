import {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

const Header = () => {

    const [textSearch, setTextSearch] = useState('')
    const history = useHistory();

    const searchInput = (e) => {
        setTextSearch(e.target.value)
    }

    const btnSearch = () => {
        if (textSearch.trim()) {
            history.push(`/search/${textSearch}`)
            setTextSearch("")
        }
    }

    return (
        <header className="header">
            <Link className="logo" to={`/`}>
                <i className='bx bx-film'/>
                <div className="logo-title">watch with soul</div>
            </Link>

            <div className="p">
                <p>Home</p>
                <p>Films</p>
                <p>Serials</p>
                <p>Cartoons</p>
                <input className='search-input' value={textSearch} onKeyDown={e => {if(e.key === "Enter") btnSearch()}} onChange={searchInput} type='text' placeholder='Search...'/>
                <button className='search-btn'  onClick={btnSearch}><i className='bx bx-search'/></button>
            </div>
        </header>
    );
};

export default Header;