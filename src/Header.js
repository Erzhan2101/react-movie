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
            history.push(`browse/${textSearch}`)
        }
    }

    return (
        <header className="container header">
            <Link className="logo-title" to ={`/`}>
                watch with soul
            </Link>

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