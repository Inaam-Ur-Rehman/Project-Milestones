import React from "react";
import InvoiceCard from "../components/other components/Invoice";

const InvoicePage = () => {
  const invoiceData = {
    invoiceNumber: "INV-12345",
    date: "2024-08-01",
    paymentMethod: "Credit Card",
    dueDate: "2024-08-14",
    status: "Pending",
    billTo: {
      name: "Amar Kumar",
      phone: "123-456-7890",
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
      <InvoiceCard
        invoiceNumber={invoiceData.invoiceNumber}
        date={invoiceData.date}
        name={invoiceData.billTo.name}
        phone={invoiceData.billTo.phone}
        email={invoiceData.billTo.email}
        address={invoiceData.billTo.address}
        paymentMethod={invoiceData.paymentMethod}
        dueDate={invoiceData.dueDate}
        status={invoiceData.status}
        total={calculateTotal()}
      />
    </div>
  );
};

export default InvoicePage;
