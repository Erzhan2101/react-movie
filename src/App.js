import Movies from "./views/Movies/Movies";
import MovieInfo from "./views/Movie-info/MovieInfo";
import Header from "./components/header/Header";
import ActorInfo from "./views/Actor-details/ActorDetails";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Actors from "./views/Actors/Actors";
import BtnUp from "./components/btnUp/BtnUp";

function App() {


    //87ddbf572d37c8c9ab2b83fd928c482c
    return (


            <Router>
                <Header/>
                <div className="container ">
                    <Route exact path='/'><Movies/></Route>
                    <Route path='/movie-info/:id'><MovieInfo/></Route>
                    <Route path='/actor-info/:id'><ActorInfo/></Route>
                    <Route path='/actors/:id'><Actors/></Route>
                    <Route path='/search/:name'><Search/></Route>
                </div>
                <BtnUp/>
                <Footer/>
            </Router>


    );
}

export default App;


// Название+
// Дата+
// Жанр+
// Длительность 2h 7m+
// Описание +
// Язык+
// Бюджет+
// Сборы+
// Вывести актеров, их должно быть максимум 10+
// если их больше то кнопка смотреть больше+
// Трейлер если он есть+
//
// Актер+
// Имя+
// Биография+
// За что известен (с постерами)----------------
// Хронология (Актерское искусство)+
// Персональная инофрмация-----------------
//
// Известность за+
// Известно авторство---------------
// Пол+
// Дата рождения+
//
// Место рождения+
// Также известность как+