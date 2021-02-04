module.exports = app => {
    const payinfo = require("../controllers/payinfo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Book
    router.post("/", payinfo.create);
  
    // Retrieve all Books
    router.get("/", payinfo.findAll);
  
    // Retrieve all published Books
    router.get("/department", payinfo.findAllDepartment);
  
    // Retrieve a single Book with id
    router.get("/:id", payinfo.find);
  
    // Update a Book with id
    router.put("/:id", payinfo.update);
  
    // Delete a Book with id
    router.delete("/:id", payinfo.delete);
  
    // Create a new Book
    router.delete("/", payinfo.deleteAll);
  
    app.use('/api/payinfo', router);
  };