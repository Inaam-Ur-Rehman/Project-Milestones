import React from "react";

const InvoicePage = () => {
  const invoiceData = {
    invoiceNumber: "INV-12345",
    date: "2023-10-01",
    billTo: {
      name: "John Doe",
      address: "123 Main St, Anytown, USA",
      email: "john.doe@example.com",
    },
    items: [
      { description: "Item 1", quantity: 2, price: 50 },
      { description: "Item 2", quantity: 1, price: 100 },
    ],
  };

  const calculateTotal = () => {
    return invoiceData.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Invoice</h1>
          <div>
            <p className="text-sm">
              Invoice Number: {invoiceData.invoiceNumber}
            </p>
            <p className="text-sm">Date: {invoiceData.date}</p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Bill To:</h2>
          <p>{invoiceData.billTo.name}</p>
          <p>{invoiceData.billTo.address}</p>
          <p>{invoiceData.billTo.email}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.quantity}
                  </td>
                  <td className="py-2 px-4 border-b text-right">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b text-right">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4">
          <div className="text-right">
            <p className="text-lg font-semibold">
              Total: ${calculateTotal().toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
