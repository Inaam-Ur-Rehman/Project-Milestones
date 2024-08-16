import React from "react";
import Items from "./items";

const InvoiceCard = (props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">{props.invoiceNumber}</h2>
        <p className="text-sm text-gray-600">Date: {props.date}</p>
      </div>
      <div className="flex flex-wrap -mx-4 mb-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h3 className="text-lg font-bold mb-2">Billing Information</h3>
          <p className="text-md font-bold">{props.name}</p>
          <p className="text-sm">
            <b>Phone:</b>
            {props.phone}
          </p>
          <p className="text-sm">
            <b>Email:</b> {props.email}
          </p>
          <p className="text-sm">
            <b>Address:</b>
            {props.address}
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h3 className="text-lg font-bold mb-2">Payment Information</h3>
          <p className="text-sm">
            <b>Payment Method:</b> {props.paymentMethod}
          </p>

          <p className="text-sm">
            <b>Due Date:</b> {props.dueDate}
          </p>
          <p className="text-sm">
            <b>Status:</b> {props.status}
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h3 className="text-lg font-bold mb-2">Order Summary</h3>
          <Items />
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay Now
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default InvoiceCard;
