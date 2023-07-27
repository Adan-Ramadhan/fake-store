// import useParams
import { useParams } from "react-router-dom"
// import cart context
import {CartContext} from "../contexts/CartContext"
// import product context
import {ProductContext, productContext} from "../contexts/ProductContext"
import { useContext } from "react"

const ProductDetails = () => {
  // get the product id from the url
  const {id} = useParams()
   const {products} = useContext(ProductContext)
   const {addToCart} = useContext(CartContext)
  // get the single product base on the id
  const product = products.find ((item) => {
return item.id === parseInt(id)
  })
// if product not found 
if(!product){
  return <section className="h-screen flex justify-center items-center">Loading...</section>
}

// destructuring product
const {title, price, description, image} = product;

  return (
    <div className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      {/* image and text wrapper */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
        {/* image */}
        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
          <img src={image} alt="" className="max-w-[200px] lg:max-w-sm" />
        </div>
        {/* text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
          <div className="text-xl text-red-500 font-medium mb-6">${price}</div>
          <p className="mb-8">{description}</p>
          <button onClick={() => addToCart(product, product.id)} className="bg-primary text-white py-4 px-8">Add To Cart</button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails