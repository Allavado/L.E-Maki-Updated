import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import image1 from "./image/noimage.jpg";
import { useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  quantity: number;
  selectQuantity?: number;
}

const MenuPage: React.FC = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(location.state && location.state.showModal === true);
  }, [location]);
  const menuItems = [
    {
      id: 1,
      name: "California Roll",
      description:
        "Crab, avocado, cucumber, and sesame seeds rolled in nori and sushi rice",
      price: "120.00",
      image: image1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Salmon Nigiri",
      description: "Fresh salmon slices over pressed sushi rice",
      price: "60.00",
      image: image1,
      quantity: 1,
    },
    {
      id: 3,
      name: "Tempura Udon",
      description:
        "Thick wheat noodles in a hot broth with tempura shrimp and vegetables",
      price: "160.00",
      image: image1,
      quantity: 1,
    },
    {
      id: 4,
      name: "Sashimi Platter",
      description:
        "Assortment of fresh raw fish slices served with soy sauce and wasabi",
      price: "200.00",
      image: image1,
      quantity: 1,
    },
    {
      id: 5,
      name: "Chicken Teriyaki",
      description:
        "Grilled chicken glazed with sweet teriyaki sauce, served with steamed rice and vegetables",
      price: "210.00",
      image: image1,
      quantity: 1,
    },
    {
      id: 6,
      name: "Miso Soup",
      description: "Soybean paste soup with tofu, seaweed, and green onions",
      price: "140.00",
      image: image1,
      quantity: 1,
    },
  ];

  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  const handleAddToCart = (itemToAdd: MenuItem) => {
    if (!loggedInUser) {
      alert("Please log in first to add items to your cart.");
      return;
    }

    const isItemInCart = cartItems.some((item) => item.id === itemToAdd.id);

    if (isItemInCart) {
      alert("Item is already in your cart!");
      console.log("Duplicate item:", itemToAdd);
      console.log("Cart items:", cartItems);
      return;
    }

    const itemId =
      cartItems.length > 0
        ? Math.max(...cartItems.map((item) => item.id)) + 1
        : 1;

    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...itemToAdd, id: itemId, selectQuantity: 1 },
    ]);
    alert("Item added to cart!");
  };

  const handleRemoveFromCart = (itemIdToRemove: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemIdToRemove);
    setCartItems(updatedCart);
    alert("Item removed from cart!");
  };

  const totalPrice = cartItems
    .reduce((total, cartItem) => total + parseFloat(cartItem.price), 0)
    .toFixed(2);

  return (
    <div className="p-4 m-4">
      <div className="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
        <h5 className="mt-5 section-title ff-secondary text-center text-danger fw-normal">
          Food Menu
        </h5>
        <h1 className="mb-5 fw-semi-bold">Our Menu</h1>
      </div>
      <div className="container">
        <div className="row">
          {menuItems.map((item) => (
            <div key={item.id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body d-flex flex-row align-items-center">
                  <img
                    src={item.image}
                    className="card-img-left img-fluid rounded"
                    style={{ width: "80px" }}
                    alt={item.name}
                  />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between border-bottom pb-2">
                      <span className="text-clamp fw-semi-bold">
                        {item.name.toUpperCase()}
                      </span>
                      <span className="text-danger fw-semi-bold">
                        ₱{item.price.toLocaleString()}
                      </span>
                    </div>
                    <button
                      className="btn btn-danger mt-3 w-100"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
          dialogClassName="modal-dialog-centered"
        >
          <Modal.Header>
            <Modal.Title>Cart Items</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cartItems.length > 0 ? (
              <div>
                <ul className="list-group">
                  {cartItems.map((cartItem) => (
                    <li
                      key={cartItem.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        {cartItem.name} - ₱{cartItem.price}
                      </div>
                      <div className="d-flex align-items-center">
                        <select
                          className="form-select form-select-sm me-2"
                          value={cartItem.selectQuantity}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            const updatedCart = cartItems.map((item) =>
                              item.id === cartItem.id
                                ? { ...item, selectQuantity: newQuantity }
                                : item
                            );
                            setCartItems(updatedCart);
                          }}
                        >
                          {(() => {
                            const options = [];
                            for (let i = 1; i <= cartItem.quantity; i++) {
                              options.push(i);
                            }
                            return options.map((val) => (
                              <option key={val} value={val}>
                                {val}
                              </option>
                            ));
                          })()}
                        </select>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemoveFromCart(cartItem.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center">Empty Cart</div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div>Total: ₱{totalPrice}</div>
            <Button
              variant="btn btn-primary"
              onClick={() => {
                alert("Your order is now pending.");
                window.location.reload();
                setShowModal(false);
              }}
            >
              Checkout
            </Button>
            <Button
              variant="btn btn-danger"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MenuPage;
