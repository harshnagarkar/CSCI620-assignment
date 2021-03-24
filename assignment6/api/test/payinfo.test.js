const request = require("supertest")("http://localhost:3000/api/payinfo");
const expect = require("chai").expect;

var data={
    "Emp_ID": "123455",
    "Pay_from": "2021-01-01",
    "Pay_to": "2021-02-01",
    "Position": "IT Student Worker",
    "Department": "Engineering",
    "Pay_per_hour": 16,
    "Tax_percent": 9,
    "Active": true
}

describe("DELETE /", function () {
    it("Deletes all payinfos", async function () {
      const response1 = await request.delete("/");
      expect(response1.status).to.eql(200);
      // expect(response.body.data.length).to.eql(30);
      const response2 = await request.get("/");
      expect(response2.status).to.eql(200);
      expect(response2.body.length).to.eql(0);
    });
  });
  
  describe("POST /payinfo", function () {
    it("Adds a new payinfo", async function () {
      const response = await request
        .post("/")
        .send(data);
  
      expect(response.status).to.eql(200);
    });
  });
  
  
  describe("GET /payinfo", function () {
    it("returns all payinfo", async function () {
      await request.delete("/");
  
    //   for (let book of test_data) {
        await request
          .post("/")
          .send(data);
  
    //   }
  
      const response = await request.get("/");
  
      expect(response.status).to.eql(200);
      expect(response.body[0].length).to.eql(data.length);
    });
  });

  describe("GET /payinfo/department", function () {
    it("returns all payinfo in department", async function () {
      await request.delete("/");
  
    //   for (let book of test_data) {
        await request
          .post("/")
          .send(data);
  
    //   }
  
      const response = await request.get("/department/Engineering");
  
      expect(response.status).to.eql(200);
      expect(response.body[0].length).to.eql(data.length);
    });
  });

  describe("GET /payinfo/id", function () {
    it("returns all payinfo by id", async function () {
      await request.delete("/");
  
    //   for (let book of test_data) {
        await request
          .post("/")
          .send(data);
  
    //   }
  
      let response = await request.get("/");
  
      expect(response.status).to.eql(200);
      let id = response.body[0].id
      response = await request.get(`/id/${id}`);
      // console.log(response)
      expect(response.body.length).to.eql(data.length);
    });
  });

  describe("Update /payinfo/id", function () {
    it("updates all payinfo by id", async function () {
      await request.delete("/");
  
    //   for (let book of test_data) {
        await request
          .post("/")
          .send(data);
  
    //   }
  
      let response = await request.get("/");
  
      expect(response.status).to.eql(200);
      let data1 = response.body[0]
      data1.Pay_per_hour=25
      let id = response.body[0]._id
      // console.log(data1)
      response = await request.put(`/id/${id}`).send(data1);
      // expect(response.status).to.eql(200);
      // console.log(response.body);
      response = await request.get(`/`);
      expect(response.status).to.equal(200);
      delete response.body[0]["updatedAt"];
      delete data1["updatedAt"];
      data1.Pay_from=(new Date(data1.Pay_from)).toISOString()
      data1.Pay_to=new Date(data1.Pay_to).toISOString()
      console.log(response.body[0])
      console.log(data1)
      let data2=response.body[0]
      expect(data2.Pay_per_hour).to.equal(data1.Pay_per_hour);
    });
  });

  describe("GET /payinfo/position", function () {
    it("returns all payinfo in position", async function () {
      await request.delete("/");
  
    //   for (let book of test_data) {
        await request
          .post("/")
          .send(data);
  
    //   }
  
      const response = await request.get("/searchPosition?Position=IT%20Student%20Worker&from=2021-01-01&to=2021-02-01");
  
      expect(response.status).to.eql(200);
      expect(response.body[0].length).to.eql(data.length);
    });
  });

  describe("GET /payinfo/Pay", function () {
    it("returns all payinfo in Employee", async function () {
      await request.delete("/");
  
    //   for (let book of test_data) {
        await request
          .post("/")
          .send(data);
  
    //   }
  
      const response = await request.get("/searchEmployee?Emp_ID=123455&from=2021-01-01&to=2021-02-01");
  
      expect(response.status).to.eql(200);
      expect(response.body[0].length).to.eql(data.length);
    });
  });