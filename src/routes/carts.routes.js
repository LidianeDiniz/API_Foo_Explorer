const {Router}= require ("express");
const CartsController= require ("../controllers/CartsController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const cartsRoutes = Router();


const cartsController = new CartsController();

cartsRoutes.use(ensureAuthenticated);

cartsRoutes.post("/", cartsController.create );
cartsRoutes.get("/", cartsController.index );
cartsRoutes.get("/:id", cartsController.show );
cartsRoutes.delete("/:id", cartsController.delete );


module.exports = cartsRoutes;