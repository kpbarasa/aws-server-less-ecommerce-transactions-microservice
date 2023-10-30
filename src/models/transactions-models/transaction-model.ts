import mongoose from "mongoose";
import { MetadataModel } from "../meta-data/meta-data-model";

type  TransactionsModel = {

  _id:string;
    
  customer_id?: string; // User ID who owns the order. 0 for guests. Default is 0.

  transaction_id?:string;

  order_id: string;

  payment_method: string; // Payment method ID

  payment_method_title: string; // Payment method title.

  status:string; // Order status. Options: pending, processing, on-hold, completed, cancelled, refunded, failed and trash. Default is pending.

  currency:string; // Currency the order was created with, in ISO format. Options: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTC, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GGP, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IMP, INR, IQD, IRR, IRT, ISK, JEP, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PRB, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XOF, XPF, YER, ZAR and ZMW. Default is USD.

  discount_total:number; //Total discount amount for the order.REA

  discount_tax:number; // Total discount tax amount for the order.

  shipping_total:number; // Total shipping amount for the order.

  prices_include_tax: boolean; // True the prices included tax during checkout.

  shipping_tax:number; //Total shipping amount for the order.

  cart_tax:number; // Total shipping amount for the order.

  total:number; // Grand total.

  total_tax:number; // Sum of all taxes.

  meta_data?:  MetadataModel[]; //  Meta data.
};

export type  TransactionsModelDoc = mongoose.Document &  TransactionsModel;

const TransactionsSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required:true
    },
      
    customer_id: {type:String, required:true},

    transaction_id: {type:String, required:true},
  
    order_id: {type:String, required:true},
  
    payment_method: {type:String, default:"pending"},
  
    payment_method_title: {type:String, default:"pending"},
  
    status:{type:String, default:"pending"},
    
    currency: {type:String, required:true},

    discount_total: {type:Number, required:true},
  
    discount_tax: {type:Number, required:true},
  
    shipping_total:  {type:Number, required:true},
  
    prices_include_tax:  {type:Number, default: false},
  
    shipping_tax:  {type:Number, required:true},
  
    cart_tax:  {type:Number, required:true},
  
    total:  {type:Number, required:true},
  
    total_tax:  {type:Number, required:true},

    meta_data:  {
      type: [
        {
          id: { type: Number, required: true }, // Meta ID (READ-ONLY)
          key: { type: String, required: true }, // Meta key.
          value: { type: String, required: true }, // Meta value.
        },
      ],
      default: [],
    }
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

const  TransactionsModel =
  mongoose.models.categories ||
  mongoose.model< TransactionsModelDoc>(" TransactionsModel", TransactionsSchema);

export {  TransactionsModel };
