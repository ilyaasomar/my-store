import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/cartReducer";
import { resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <h1>Product in your Cart</h1>
      {products.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeCart(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCESS TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
};

export default Cart;
