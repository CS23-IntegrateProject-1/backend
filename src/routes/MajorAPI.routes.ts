import { Router } from "express";
import MajorAPIController from "../controllers/MajorAPI.controller";

// here import your controllers(function)
const router = Router();

// here define your routes
router.get("/getFilmsFromMajor", MajorAPIController.getFilmsFromMajor);
router.get("/getScreenFromMajor", MajorAPIController.getScreenFromMajor);
router.get("/getTheaterFromMajor", MajorAPIController.getTheaterFromMajor);
router.get("/getSeatTypeFromMajor", MajorAPIController.getSeatTypeFromMajor);
router.get("/getSeatFromMajor", MajorAPIController.getSeatFromMajor);
router.get("/getShowFromMajor", MajorAPIController.getShowFromMajor);
router.get("/getpaymentFromMajor", MajorAPIController.getPaymentFromMajor);

router.get("/updateData", MajorAPIController.updateData);

export { router as MajorAPIRoutes };
