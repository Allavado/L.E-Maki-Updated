import React, { useState } from "react";

interface Order {
  id: number;
  customer: string;
  status: "pending" | "completed";
}

const Dashboard = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1234, customer: "John Doe", status: "pending" },
    { id: 5678, customer: "Jane Smith", status: "completed" },
    { id: 9012, customer: "Michael Johnson", status: "pending" },
    { id: 3456, customer: "Sarah Davis", status: "completed" },
    { id: 7890, customer: "Robert Wilson", status: "pending" },
  ]);

  const totalOrders = orders.length;
  const totalRevenue = 2500;
  const newCustomers = 10;
  const popularProduct = "Sushi Roll";
  const pendingOrders = orders.filter(
    (order) => order.status === "pending"
  ).length;
  const completedOrders = orders.filter(
    (order) => order.status === "completed"
  ).length;

  const removeOrder = (idToRemove: number) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== idToRemove)
    );
  };

  const handleViewOrder = (id: number) => {
    const order = orders.find((order) => order.id === id);
    if (order) {
      alert(`Order Details:\nID: ${order.id}\nCustomer: ${order.customer}`);
    }
  };

  const handleAcceptOrder = (id: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id && order.status === "pending"
          ? { ...order, status: "completed" }
          : order
      )
    );
    alert("Order accepted!");
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Dashboard</h2>
      <div className="row text-white">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h3 className="card-title">Total Orders</h3>
              <p className="card-text">{totalOrders}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h3 className="card-title">Total Revenue</h3>
              <p className="card-text">${totalRevenue}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h3 className="card-title">New Customers</h3>
              <p className="card-text">{newCustomers}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-warning text-dark">
            <div className="card-body">
              <h3 className="card-title">Popular Product</h3>
              <p className="card-text">{popularProduct}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h3 className="card-title">Pending Orders</h3>
              <p className="card-text">{pendingOrders}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h3 className="card-title">Completed Orders</h3>
              <p className="card-text">{completedOrders}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3>Recent Orders</h3>
        <ul className="list-group">
          {orders.map((order) => (
            <li
              key={order.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              Order #{order.id} - Customer: {order.customer}
              <div>
                {order.status === "pending" && (
                  <button
                    className="btn btn-success btn-sm mr-2 mx-1"
                    onClick={() => handleAcceptOrder(order.id)}
                  >
                    Accept Order
                  </button>
                )}
                <button
                  className="btn btn-primary btn-sm mr-2 mx-1"
                  onClick={() => handleViewOrder(order.id)}
                >
                  View
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeOrder(order.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
