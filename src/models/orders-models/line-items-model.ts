import mongoose from "mongoose";

export class LineItemsModel {
    _id: number;	// Item ID.READ-ONLY
    name: string; // Product name.
    product_id: number; //	Product ID.
    variation_id: number; //	Variation ID, if applicable.
    quantity: number; // Quantity ordered.
    tax_class: string; // Slug of the tax class of product.
    subtotal: string; //	Line subtotal(before discounts).
    subtotal_tax: string; //	Line subtotal tax(before discounts).READ - ONLY
    total: number; //	Line total(after discounts).
    total_tax: number; //	Line total tax(after discounts).READ - ONLY
    taxes: string[]; //	Line taxes.See Order - Taxes propertiesREAD - ONLY
    meta_data: string[]; //	Meta data.See Order - Meta data properties
    sku: number;	// Product SKU.READ - ONLY
    price: string;	// Product price.
}


export const LineItemsSchema = {
    type: [
      {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        product_id: { type: Number, required: true },
        variation_id: { type: Number, required: true },
        quantity: { type: Number, required: true },
        tax_class: { type: String, required: true },
        subtotal: { type: String, required: true },
        subtotal_tax: { type: Number, required: true },
        total: { type: Number, required: true },
        total_tax: { type: Number, required: true },
        taxes: [{ type: String, required: true, default: "none" }],
        meta_data: {
          type: [
            {
              id: { type: Number, required: true }, // Meta ID (READ-ONLY)
              key: { type: String, required: true }, // Meta key.
              value: { type: String, required: true }, // Meta value.
            },
          ]
        },
        sku: { type: Number, required: true },
        price: { type: String, required: true }
      },
    ],
    require: true,
  }