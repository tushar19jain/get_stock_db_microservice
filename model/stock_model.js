import mongoose, { Schema } from "mongoose";

const STOCK_SCHEMA = new Schema({
  item_name: {
    type: String,
    required: true,
  },
  item_category: {
    type: String,
    required: false,
  },
  item_quantity: {
    type: Number,
    require: true,
  },
  item_cost_price: {
    type: Number,
    require: true,
  },
  item_selling_price: {
    type: Number,
    require: true,
  },
  /*date_added: {
    type: Date,
    require: true,
  },*/
  batch_number: {
    type: String,
    require: false,
  },
});

export const STOCK_MODEL =
  mongoose.models.stock || mongoose.model("stock", STOCK_SCHEMA);
