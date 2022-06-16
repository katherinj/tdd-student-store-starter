import * as React from "react"
import "./ProductDetail.css"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart}) {
  const [product, setProduct] = useState()
  let { productId } = useParams();

  useEffect(() => {
  /*
    When the component is mounted to the screen...
  {x}It should make a GET request to the /store/:productId endpoint with the axios.get method.
  {x}The :productId part of the request should be replaced with the productId pulled from the url.
  {}When the initial request is loading, it should render an h1 element with the className of loading and contain the text "Loading..."
  {}It should store the product received by the request in state and then render the ProductView component.
  {}If no product is found with that id, it should render the NotFound component
  */
    const fetchData = async () => {
      const result = await axios.get("https://codepath-store-api.herokuapp.com/store/"+productId)
  
      //check if we got products 
      if(result?.data?.products){
        setProducts(result.data.products)
      }else{
        // error, no products, setError("error no products")
      }
      
    }
    
    fetchData();
  })

  return (
    <div className="product-detail">
      <p>Product Detail</p>
    </div>
  )
}