import React from "react";

const Orders = () => {
  const orders = [
    { id: 1, customer: "John Doe", status: "Pending" },
    { id: 2, customer: "Jane Smith", status: "Completed" },
    { id: 3, customer: "Michael Johnson", status: "Processing" },
    { id: 4, customer: "Sarah Davis", status: "Pending" },
    { id: 5, customer: "Robert Wilson", status: "Completed" },
  ];

  return (
    <div>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;