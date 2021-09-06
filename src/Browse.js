import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
const Browse = () => {

    const {search} = useParams()
    const [results, setResults] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {

    }, [search])

    return (
        <div>
            
        </div>
    );
};

export default Browse;