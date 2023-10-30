import mongoose from "mongoose";

type  OrderItemModel = {
  _id: string; // orderUnique identifier for the resource.
  order_id: string; //	Product ID.
  order_key: string; // Order key.
  name: string; // Product name.
  product_id: string; //	Product ID.
  variation_id: string; //	Variation ID, if applicable.
  quantity: number; // Quantity ordered.
  tax_class: string; // Slug of the tax class of product.
  subtotal: number; //	Line subtotal(before discounts).
  subtotal_tax: number; //	Line subtotal tax(before discounts).READ - ONLY
  total: number; //	Line total(after discounts).
  total_tax: number; //	Line total tax(after discounts).READ - ONLY
  taxes: string[]; //	Line taxes.See Order - Taxes propertiesREAD - ONLY
  meta_data: string[]; //	Meta data.See Order - Meta data properties
  sku: number;	// Product SKU.READ - ONLY
  price: string;	// Product price.
};

export type  OrderItemModelDoc = mongoose.Document &  OrderItemModel;

const orderItemSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.SchemaTypes.ObjectId,
      required:true
    },

    order_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required:true
    },

    order_key: { type: String, required: true },

    name: { type: String, required: true },

    product_id:  {
      type: mongoose.SchemaTypes.ObjectId,
      required:true
    },

    variation_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required:true
    },

    quantity: { type: Number, required: true },

    tax_class: { type: String, required: true },

    subtotal: { type: Number, required: true },

    subtotal_tax: { type: Number, required: true },

    total: { type: Number, required: true },
    
    total_tax: { type: Number, required: true },

    taxes:  {
      type: [],
      default: [],
    },

    meta_data:  {
      type: [
        {
          id: { type: Number, required: true }, // Meta ID (READ-ONLY)
          key: { type: String, required: true }, // Meta key.
          value: { type: String, required: true }, // Meta value.
        },
      ],
      default: [],
    },

    sku: { type: Number, required: true },

    price: { type: Number, required: true }
  },
  {
    toJSON: {
      transform(doc, ret, options) {
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const  OrderItemModel =
  mongoose.models.categories ||
  mongoose.model< OrderItemModelDoc>(" OrderItemModel", orderItemSchema);

export {  OrderItemModel };
