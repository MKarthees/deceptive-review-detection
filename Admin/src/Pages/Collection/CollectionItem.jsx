import { Link } from 'react-router-dom'
import './collection.css'
const CollectionItem = ({
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
  return (
    <Link to={`/product/${id}`}>
      <div className="product">
        <div className="product-item">
          <img src={image} />
          <p className="product-item-name">{name}</p>
          <p className="product-item-price">₹ {price}</p>
          <p className="product-item-stock">{stock}</p>
          <p className="product-item-offer">{offer}%</p>
        </div>
      </div>
    </Link>
  )
}

export default CollectionItem
