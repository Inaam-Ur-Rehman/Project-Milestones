import React from "react";
import ItemsList from "./ItemsList";

function Items({ item, quantity, price, img, total }) {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-md font-bold">Description</th>
            <th className="text-md font-bold">Quantity</th>
            <th className="text-md font-bold">Price</th>
            <th className="text-md font-bold">Total</th>
            <th className="text-md font-bold">image</th>
          </tr>
        </thead>
        <tbody>
          {ItemsList.map((item) => (
            <tr key={item.id}>
              <td className="text-sm ">{item.item}</td>
              <td className="text-sm text-center">{item.quantity}</td>
              <td className="text-sm text-center">{item.price}</td>
              <td className="text-sm text-center">{item.total}</td>
              <td className="text-sm text-center">
                <img className="w-10 h-10" src={item.img} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-sm" colSpan="3">
              Subtotal:
            </td>
            <td className="text-sm">
              {ItemsList.reduce((total, item) => total + item.total, 0)}
            </td>
          </tr>
          <tr>
            <td className="text-sm" colSpan="3">
              Tax (8%):
            </td>
            <td className="text-sm">
              {(8 / 100) *
                ItemsList.reduce((total, item) => total + item.total, 0)}
            </td>
          </tr>
          <tr>
            <td className="text-sm" colSpan="3">
              Grand Total:
            </td>
            <td className="text-sm">
              {ItemsList.reduce((total, item) => total + item.total, 0) +
                (8 / 100) *
                  ItemsList.reduce((total, item) => total + item.total, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Items;
