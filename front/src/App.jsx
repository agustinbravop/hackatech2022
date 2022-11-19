<<<<<<< HEAD

import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegistroPage from "./pages/RegistroPage/RegistroPage";
import "./styles.css";
import CarreraPage from "./pages/CarreraPage/CarreraPage";
import CrearReviewPage from "./pages/CrearReviewPage/CrearReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/registro" component={RegistroPage}></Route>

        <Route exact path="/" component={HomePage}></Route>

        <Route
          exact
          path="/carrera/:id_carrera/"
          component={CarreraPage}
        ></Route>
        <Route exact path="/crear-review" component={CrearReviewPage}></Route>

        <Route exact path="/not-found" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
>>>>>>> 82ef06e697fbafb08354889f390b13ea300b136d
  );
}

export default App;
