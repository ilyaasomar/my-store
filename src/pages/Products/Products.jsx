import React from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'

const Products = () => {
  const id = parseInt(useParams().id);
console.log(id)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Category</h2>
          <div className="itemInput">
            <input type='checkbox' id='1' value={1} />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div className="itemInput">
            <input type='checkbox' id='1' value={1} />
            <label htmlFor="shoes">Skart</label>
          </div>
          <div className="itemInput">
            <input type='checkbox' id='1' value={1} />
            <label htmlFor="shoes">Coats</label>
          </div>
        </div>
        <div className="filterPrice">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} />
          </div>
        </div>
        <div className="filterPrice">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div> 
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' />
            <label htmlFor="desc">Price (Highest First)</label>
          </div> 
        </div>
      </div>
      <div className="right">
      <img src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="catImg" />
      </div>
      <List />
    </div>
  )
}

export default Products