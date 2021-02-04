module.exports = app => {
    const payinfo = require("../controllers/payinfo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Payinfo
    router.post("/", payinfo.create);
  
    // Retrieve all Payinfo
    router.get("/", payinfo.findAll);
  
    // Retrieve all published Payinfo
    router.get("/department/:dept", payinfo.findAllDepartment);
  
    // Retrieve a single Payinfo with id
    router.get("id/:id", payinfo.find);
  
    router.get("/searchEmployee", payinfo.searchPay)

    router.get("/searchPosition", payinfo.searchPosition)
    // Update a Payinfo with id
    router.put("id/:id", payinfo.update);
  
    // Delete a Payinfo with id
    router.delete("id/:id", payinfo.delete);
  
    // Create a new Payinfo
    router.delete("/", payinfo.deleteAll);
  
    app.use('/api/payinfo', router);
  };