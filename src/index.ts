import {NextFunction, Request, Response, Router} from 'express';
import express from "express";
import * as bodyParser from 'body-parser';
import {RegisterRouteClass} from "./routes";
/* tslint:disable-next-line */
import session from 'express-session';
// this variable will be exported to be included as a middleware.
class TRouter extends RegisterRouteClass {
    private TRouter: any;

    constructor() {
        super();
        this.TRouter = Router();
        this.TRouter.use(express.json());
        this.TRouter.use(express.urlencoded({extended: false}));
        this.TRouter.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

        const _this = this;
        this.TRouter.use(function(_req: Request, res: Response, next: NextFunction) {
            // CORS header
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.setHeader("Content-Type", "application/json");
            next();
        });
        _this.RegisterRoutes(_this.TRouter);

    }

    public get getRouter() {
        return this.TRouter;
    }


}


export {TRouter};
