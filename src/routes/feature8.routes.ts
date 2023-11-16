import { Router } from "express";

// here import your controllers(function)
import {
    getAllUser,
    getfeature8,
    getAllAdvertisements,
    getAdvertisementById,
    getAllNotification,
    getAllTransactionDetails, 
    getTransactionDetailById ,
    getCreditCardById,
    getCreditCardByUserId,
    getVenueCreditCardByVenueId,
    getVenuePromptpayByVenueId,
    createTransactionDetail,
    addCreditCard,
    addVenueCreditCard,
    addVenuePromptpay

} from "../controllers/feature8.controller";

const feature8Router = Router();

// here define your routes
// get method
feature8Router.get("/", getfeature8);
feature8Router.get("/users", getAllUser); 
feature8Router.get("/advertisements", getAllAdvertisements); 
feature8Router.get("/advertisements/:advertisementId", getAdvertisementById);
feature8Router.get("/notifications", getAllNotification);
feature8Router.get("/transaction_details", getAllTransactionDetails); 
feature8Router.get("/transaction_details/:transactionId", getTransactionDetailById); 
feature8Router.get("/creditcard/:userId", getCreditCardByUserId);
feature8Router.get("/creditcard/:creditCardId", getCreditCardById);
feature8Router.get("/venuecreditcard/:venueId", getVenueCreditCardByVenueId);
feature8Router.get("/venuepromptpay/:venueId", getVenuePromptpayByVenueId);

// post method
feature8Router.post("/create_transaction_detail", createTransactionDetail);
feature8Router.post("/add_creditcard", addCreditCard);
feature8Router.post("/add_venue_creditcard", addVenueCreditCard);
feature8Router.post("/add_venue_promptpay", addVenuePromptpay);



export default feature8Router;