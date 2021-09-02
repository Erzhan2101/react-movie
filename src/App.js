import Movies from "./Movies";
import MovieInfo from "./MovieInfo";


import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {

    return (
        <Router>
            <Route exact path='/'><Movies /></Route>
            <Route path='/movie-info/:id'><MovieInfo/></Route>
        </Router>
    );
}

export default App;
