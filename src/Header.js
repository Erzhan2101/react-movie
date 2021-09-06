import {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

const Header = () => {

    const [search, setSearch] = useState('')
    const history = useHistory();

    const searchInput = (e) => {
        setSearch(e.target.value)
    }

    const btnSearch = () => {
        if (search.trim()) {
            history.push(`browse/${search}`)
        }
    }

    return (
        <header className="container header">
                <p className="logo-title">watch with soul</p>
            <div className="p">
                <p>Home</p>
                <p>Films</p>
                <p>Serials</p>
                <p>Cartoons</p>
                <input className='search-input' onKeyDown={e => {if(e.key === "Enter") btnSearch()}} onChange={searchInput} type='text' placeholder='Search...'/>
                <button className='search-btn' onClick={btnSearch}><i className='bx bx-search'/></button>
            </div>
        </header>
    );
};

export default Header;