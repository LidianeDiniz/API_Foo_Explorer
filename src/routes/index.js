const { Router } = require ("express");

const usersRouter = require("./users.routes")
const cartsRouter = require("./carts.routes")
const platesRouter = require("./plates.routes");
const sessionsRouter = require("./Sessions.routes");



const routes = Router();

routes.use("/users", usersRouter);
routes.use("/carts", cartsRouter);
routes.use("/plates", platesRouter);
routes.use("/sessions", sessionsRouter);


module.exports = routes;