import Movies from "./Movies";
import MovieInfo from "./MovieInfo";
import Header from "./Header";

import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {

    return (

        <div className="container mb-3">
            <Header />
            <Router>
                <Route exact path='/'><Movies /></Route>
                <Route path='/movie-info/:id'><MovieInfo/></Route>
            </Router>
        </div>

    );
}

export default App;
