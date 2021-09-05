import Movies from "./Movies";
import MovieInfo from "./MovieInfo";
import Header from "./Header";
import ActorInfo from "./ActorDetails";


import {BrowserRouter as Router, Route} from "react-router-dom"
import Actors from "./Actors";

function App() {

    return (

        <div className="container mb-3">
            <Header />
            <Router>
                <Route exact path='/'><Movies /></Route>
                <Route path='/movie-info/:id'><MovieInfo/></Route>
                <Route path='/actor-info/:id'><ActorInfo/></Route>
                <Route path='/actors/:id'><Actors/></Route>
            </Router>
        </div>

    );
}

export default App;


// Название+
// Дата+
// Жанр+
// Длительность 2h 7m---------------------
// Описание +
// Язык+
// Бюджет+
// Сборы+
// Вывести актеров, их должно быть максимум 10+
// если их больше то кнопка смотреть больше+
// Трейлер если он есть---------------------------------
//
// Актер+
// Имя+
// Биография+
// За что известен (с постерами)
// Хронология (Актерское искусство)
// Персональная инофрмация
//
// Известность за
// Известно авторство
// Пол
// Дата рождения
//
// Место рождения
// Также известность как