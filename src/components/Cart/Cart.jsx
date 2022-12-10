import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'
const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/3807769/pexels-photo-3807769.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'T-shirt',
            desc: 'Long description details for t-shirt very nice shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/3807769/pexels-photo-3807769.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'T-shirt',
            desc: 'Long description details for t-shirt very nice shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ]
  return (
    <div className='cart'>
        <h1>Product in your Cart</h1>
            {data.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
                    <DeleteOutlinedIcon />
                </div>
            ))}
            <div className="total">
                <span>SUB TOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCESS TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart