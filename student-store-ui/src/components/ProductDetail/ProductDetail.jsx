import * as React from "react"
import "./ProductDetail.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart, products}) {
  const [product, setProduct] = useState()
  let { productId } = useParams();
  let example = 1;


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get("https://codepath-store-api.herokuapp.com/store/"+example)
  //     console.log(result)

  //   }
  //   fetchData();
  // }, [])


//   useEffect(() => {
//   /*
//     When the component is mounted to the screen...
//   {x}It should make a GET request to the /store/:productId endpoint with the axios.get method.
//   {x}The :productId part of the request should be replaced with the productId pulled from the url.
//   {}When the initial request is loading, it should render an h1 element with the className of loading and contain the text "Loading..."
//   {}It should store the product received by the request in state and then render the ProductView component.
//   {}If no product is found with that id, it should render the NotFound component
//   */
//     const fetchData = async () => {
//       let example = 1;
//       const result = await axios.get("https://codepath-store-api.herokuapp.com/store/"+example)
//       console.log(result)

//     //   //check if we got products 
//     //   if(result?.data?){
//     //     setProduct(result.data.products)
//     //   }else{
//     //     // error, no products, setError("error no products")
//     //   }
      
//     // }
    
//     fetchData();
//   }
// }

  console.log("product id: " + products[productId])
  return (
    <div className="product-detail">
      <p>Product Detail for </p>
    </div>
  )
}