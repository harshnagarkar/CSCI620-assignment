const db = require("../models");
const Pay_Info = db.pay_info;

exports.create = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.Emp_ID) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Book
    const payinfo = new Pay_Info(        {
      Emp_ID: req.body.Emp_ID,
      Pay_from: req.body.Pay_from,
      Pay_to: req.body.Pay_to,
      Position:req.body.Position,
      Department:req.body.Department,
      Pay_per_hour:req.body.Pay_per_hour,
      Tax_percent: req.body.Tax_percent,
      Active: req.body.Active
    });
  
    // Save Book in the database
    payinfo
      .save(payinfo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Pay Info."
        });
      });
  };
  
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Pay_Info.find(title)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving payinfo."
        });
      });
  };

  exports.find = (req, res) => {
    const id = req.params.id;
  
    Pay_Info.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Payinfo with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Payinfo with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Pay_Info.findByIdAndUpdate(id, req.body,  { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Payinfo with id=${id}. Maybe Payinfo was not found!`
          });
        } else res.send({ message: "Payinfo was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating payinfo with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Pay_Info.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete payinfo with id=${id}. Maybe Book was not found!`
          });
        } else {
          res.send({
            message: "payinfo was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete payinfo with id=" + id
        });
      });
  };
  
  exports.deleteAll = (req, res) => {
    Pay_Info.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Payinfo were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all books."
        });
      });
  };

  exports.findAllDepartment = (req, res) => {
    // if (!req.params.dept) {
    //   return res.status(400).send({
    //     message: "Data to find can not be empty!"
    //   });
    // }
  
    const dept = req.params.dept;
    console.log(dept)
    Pay_Info.find({ Department: dept })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving books."
        });
      });
  };

  exports.searchPay = (req, res) => {
    // if (!req.params.dept) {
    //   return res.status(400).send({
    //     message: "Data to find can not be empty!"
    //   });
    // }
    console.log("inside");
    const Eid = parseInt(req.query.Emp_ID);
    const from = new Date(req.query.from);
    const to = new Date(req.query.to);
    console.log(req.query)
    Pay_Info.find({ Emp_ID: Eid, Pay_from: { $gte: from}, Pay_to: { $lte: to} })
    // Pay_Info.find({ Emp_ID: Eid, Pay_from: new Date(from), Pay_to: new Date(to) })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving books."
        });
      });
  };

  exports.searchPosition = (req, res) => {
    // if (!req.params.dept) {
    //   return res.status(400).send({
    //     message: "Data to find can not be empty!"
    //   });
    // }
    console.log("inside");
    const pos = req.query.Position;
    const from = new Date(req.query.from);
    const to = new Date(req.query.to);
    console.log(req.query)
    Pay_Info.find({ Position: pos, Pay_from: { $gte: from}, Pay_to: { $lte: to} })
    // Pay_Info.find({ Emp_ID: Eid, Pay_from: new Date(from), Pay_to: new Date(to) })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving books."
        });
      });
  };