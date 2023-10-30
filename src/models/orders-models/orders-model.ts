import mongoose from "mongoose";
import { MetadataModel } from "../meta-data/meta-data-model";
import { LineItemsModel, LineItemsSchema } from "./line-items-model";
import { FeeLineItems_Input } from "../../dto/orders/line-items/fee-lines";
import { TaxLineItems_Input } from "../../dto/orders/line-items/tax-line-items";
import { LineItemsInput } from "../../dto/orders/line-items/line-items";
import { CouponLinesScheme } from "../../dto/coupons/schemes";
import { billingAddressInput } from "../../dto/orders/orders-inputs";
import { couponLineItems } from "../../dto/coupons/interace";
import { TaxClassInput } from "../../dto/orders/tax/tax-class-input";

type OrdersModel = {
  id: string; // orderUnique identifier for the resource.

  shipping_method: string; // shipping method id.

  shipping_zone_method: string; // shipping zone method id.

  tax_class_slug: string;

  coupon_code: string;

  parent_id: string; // Parent order ID.

  number: string; // Order number.

  order_key: string; // Order key.

  created_via: string; // Shows where the order was created.

  version: string; // Shows where the order was created.

  status:
    | "pending"
    | "processing"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "refunded"
    | "failed"
    | "trash"
    | "pending"; // Order status. Options: pending, processing, on-hold, completed, cancelled, refunded, failed and trash. Default is pending.

  currency: string; // Currency the order was created with, in ISO format. Options: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTC, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GGP, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IMP, INR, IQD, IRR, IRT, ISK, JEP, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PRB, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XOF, XPF, YER, ZAR and ZMW. Default is USD.

  date_created: string; // The date the order was created, in the site's timezone.

  date_created_gmt: string; // The date the order was created, GMT

  date_modified: string; // The date the order was created, in the site's timezone.

  date_modified_gmt: string; // The date the order was created, in the site's timezone.

  discount_total: number; //Total discount amount for the order.REA

  discount_tax: number; // Total discount tax amount for the order.

  shipping: boolean; // shipping status.

  shipping_address: billingAddressInput; // hipping address.

  shipping_total: number; // Total shipping amount for the order.

  shipping_tax: number; //Total shipping amount for the order.

  cart_tax: Number; // Total shipping amount for the order.

  total: Number; // Grand total.

  total_tax: Number; // Sum of all taxes.

  prices_include_tax: boolean; // True the prices included tax during checkout.

  customer_id: number; // User ID who owns the order. 0 for guests. Default is 0.

  customer_ip_address: string; // Customer's IP address.

  customer_user_agent: string; // User agent of the customer.

  customer_note: string; // Note left by customer during checkout.

  billing: object; // Billing address.

  payment_method: string; // Payment method ID

  payment_method_title: string; // Payment method title.

  transaction_id: string; // Unique transaction ID.

  date_paid: string; // The date the order was completed, in the site's timezone

  date_paid_gmt: string; // The date the order was completed, in the site's timezone

  date_completed: string; // The date the order was completed, in the site's timezone.

  date_completed_gmt: string; // The date the order was completed, as GMT

  cart_hash: string; // MD5 hash of cart items to ensure orders are not modified.

  meta_data: MetadataModel[]; //  Meta data.

  line_items: LineItemsModel[]; // Line items data.

  tax_rate_id: string;

  tax_lines?: TaxLineItems_Input[]; // Tax lines data.

  tax_class_code: string;

  coupon_id: string;

  coupon_lines?: couponLineItems[]; // orders line data.

  fee_lines?: FeeLineItems_Input[]; // Fee lines data.

  refunds?: TaxClassInput[]; //  List of refunds. See Order - Refunds properties

  shipping_lines?: LineItemsInput[]; // Define if the order is paid. It will set the status to processing and reduce stock items. Default is false.

  set_paid: boolean; // Define if the order is paid. It will set the status to processing and reduce stock items. Default is false.
};

export type OrdersModelDoc = mongoose.Document & OrdersModel;

const ordersSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required:true
    },

    shipping_method: String,

    shipping_zone_method: String,

    tax_class_slug: String,

    coupon_code: String,

    parent_id: String,

    number: { type: String, required: true },

    order_key: { type: String, required: true },

    created_via: { type: String, required: true },

    version: { type: String, required: true },

    status: { type: String, deault: "pending" },

    currency: { type: String, required: true },

    date_created: { type: String, required: true },

    date_created_gmt: { type: String, required: true },

    date_modified: String,

    date_modified_gmt: String,

    discount_total: { type: Number, required: true },

    discount_tax: { type: Number, required: true },

    shipping: { type: Boolean, deafault: false },

    shipping_address: Object,

    shipping_total: { type: Number, required: true },

    shipping_tax: { type: Number, required: true },

    cart_tax: { type: Number, required: true },

    total: { type: Number, required: true },

    total_tax: { type: Number, required: true },

    prices_include_tax: { type: Boolean, default: false },

    customer_id: { type: String, required: true },

    customer_ip_address: String,

    customer_user_agent: String,

    customer_note: String,

    billing: {
      type: [
        {
          id: { type: Number, required: true },
          user_id: { type: Number, required: true },
          address_line1: { type: String, required: true },
          address_line2: { type: String, required: true },
          state: { type: String },
          city: { type: String, required: true },
          post_code: { type: Number, required: true },
          country: { type: String, required: true },
        },
      ],
      require: true,
    },

    payment_method: String,

    payment_method_title: String,

    transaction_id: {
      type: String,
    },

    date_paid: String,

    date_paid_gmt: String,

    date_completed: String,

    date_completed_gmt: String,

    cart_hash: String,

    meta_data: {
      type: [
        {
          id: { type: Number, required: true }, // Meta ID (READ-ONLY)
          key: { type: String, required: true }, // Meta key.
          value: { type: String, required: true }, // Meta value.
        },
      ],
      require: true,
    },

    line_items: LineItemsSchema,

    tax_rate_id: {
      type: String,
    },

    tax_lines: {
      type: [],
      require: true,
    },

    tax_class_code: String,

    coupon_id: mongoose.SchemaTypes.ObjectId,

    _coupon_lines: CouponLinesScheme,
    get coupon_lines() {
      return this._coupon_lines;
    },
    set coupon_lines(value) {
      this._coupon_lines = value;
    },

    fee_lines: {
      type: [{
        _id: { type: String, required: true },
        name: { type: String, required: true },
        tax_class: { type: String, required: true },
        tax_status: { type: String, required: true },
        total: { type: Number, required: true },
        total_tax: { type: Number, required: true },
        taxes: [{type:[], default:[]}],
        meta_data: {
          type: [
            {
              id: { type: Number, required: true }, // Meta ID (READ-ONLY)
              key: { type: String, required: true }, // Meta key.
              value: { type: String, required: true }, // Meta value.
            },
          ],
          default:[]
        },
    }],
    default: []
    },

    refunds: {
      type: [],
      default: []
    },

    shipping_lines: {
      type: [],
      default: []
    },

    set_paid: { type: Boolean, default: false },
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

const ordersModel =
  mongoose.models.categories ||
  mongoose.model<OrdersModelDoc>("ordersModel", ordersSchema);

export { ordersModel };
