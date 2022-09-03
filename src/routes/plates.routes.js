const {Router}= require ("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")
const PlatesController= require ("../controllers/PlatesController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const platesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const platesController = new PlatesController();

platesRoutes.use(ensureAuthenticated);

platesRoutes.get("/",platesController.index );
platesRoutes.get("/:id", platesController.show);
platesRoutes.put("/", ensureAuthenticated, upload.single("image"), platesController.update);



module.exports = platesRoutes;