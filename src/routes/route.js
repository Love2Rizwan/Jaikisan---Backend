const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController.js")
const cardController = require("../controller/cardController.js");


//=====================  Customer Api ================
router.post("/createCustomer", customerController.createCustomer)
router.get("/getCustomer", customerController.getCustData)
router.delete("/deleteCustomer/:customerId", customerController.deleteCustomer )


//========================= Card Api ========================
router.post("/createCard", cardController.createCard)
router.get("/getCard", cardController.getCardData)


module.exports = router;