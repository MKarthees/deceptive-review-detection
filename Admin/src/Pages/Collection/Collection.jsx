import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Context/Context'
import axios from 'axios'
import { backendURL } from '../../App'
import CollectionItem from './CollectionItem'
import './collection.css'

const Collection = ({ token }) => {
  const { slider, setSlider, userInput } = useContext(DataContext)
  const [product, setProduct] = useState([])
  const getProduct = async () => {
    const response = await axios.get(backendURL + '/product/list', {
      headers: { token },
    })
    setProduct(response.data.Products)
    if (userInput) {
      setProduct(
        product.filter((item) => item.name.toLowerCase().includes(userInput))
      )
    }
  }
  useEffect(() => {
    getProduct()
  }, [product])

  return (
    <main className={`${slider == true ? 'container' : 'grid'}`}>
      <section className="collection">
        <h1>Products</h1>

        <div className="collection-headline">
          <p>Image</p>
          <p className="product-name">Name</p>
          <p>Price</p>
          <p>Stock</p>
          <p>Offer</p>
        </div>
        {product.map((item, index) => (
          <div key={index} className="collection-item">
            <CollectionItem
              id={item._id}
              name={item.name}
              image={item.image[0]}
              price={item.price}
              brand={item.brand}
              category={item.category}
              description={item.description}
              stock={item.stock}
              offer={item.offer}
            />
          </div>
        ))}
      </section>
    </main>
  )
}

export default Collection
