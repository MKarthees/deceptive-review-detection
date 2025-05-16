import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './shop.css'

const ShopItem = ({
  id,
  name,
  image,
  price,
  brand,
  category,
  description,
  stock,
  offer,
}) => {
  const location = useLocation()

  return (
    <Link to={`/product/${id}`}>
      <div className="item">
        <img src={image} />
        <div className="item-title">
          <p className="name">{name}</p>
          <div className="price-offer">
            <p className="offer">{offer}%</p>
            <p className="price">₹ {price}</p>
          </div>
        </div>

        {location.pathname === `/product/${id}` ? (
          <p className="product-item-stock">{stock}</p>
        ) : (
          ''
        )}
      </div>
    </Link>
  )
}

export default ShopItem
