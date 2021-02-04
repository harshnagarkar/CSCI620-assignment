const { Model } = require("mongoose");
// const db = require(".");

module.exports = mongoose => {
    const Pay_Info = mongoose.model(
      "payinfo",
      mongoose.Schema(
        {
          Emp_ID: String,
          Pay_from: Date,
          Pay_to: Date,
          Position:String,
          Department:String,
          Pay_per_hour:Number,
          Tax_percent: Number,
          Active: Boolean
        },
        { timestamps: true }
      ).index({'Emp_ID':1,'Pay_from':1,'Pay_to':1}, {unique: true})
    );
    // Pay_Info.schema.index({'Emp_ID':1,'Pay_from':1,'Pay_to':1})
    // db.collection.createIndex( { <field1>: <type>, <field2>: <type2>, ... } )
    // mySchema.index({'field1': 1, 'field2': 1}, {unique: true});
    // Pay_Info.Schema.
    return Pay_Info;
  };