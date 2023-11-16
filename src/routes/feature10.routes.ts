import { Router } from "express";

// here import your controllers(function)
import {
    getfeature10,
    getNowShowingFilms,
    getUpcomingFilms,
    getShowingFilms,
    getFilmsById,
    getAllFilms,
    getShowsByFilmsId
} from "../controllers/feature10.controller";

const feature10Router = Router();

// here define your routes
feature10Router.get("/getNowshowingFilms", getNowShowingFilms);
feature10Router.get("/getUpcomingFilms", getUpcomingFilms);
feature10Router.get("/getShowingFilms", getShowingFilms);
feature10Router.get("/getFilmsById/:id", getFilmsById);
feature10Router.get("/getAllFilms", getAllFilms);
feature10Router.get("/getShowsByFilmsId/:id", getShowsByFilmsId);

export default feature10Router;