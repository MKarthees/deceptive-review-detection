import { createContext, useState } from 'react'

export const DataContext = createContext()

const Context = (props) => {
  const [slider, setSlider] = useState(true)
  const [userInput, setUserInput] = useState('')
  const [searchBar, setSearchBar] = useState(false)
  const currency = '₹'
  const [showReview, setShowReview] = useState(false)
  const [productId, setProductId] = useState('')

  return (
    <DataContext.Provider
      value={{
        slider,
        setSlider,
        searchBar,
        setSearchBar,
        currency,
        userInput,
        setUserInput,
        showReview,
        setShowReview,
        productId,
        setProductId,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
export default Context
