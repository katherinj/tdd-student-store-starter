import * as React from "react"
import "./ProductDetail.css"
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart, products}) {
  const [product, setProduct] = useState()
  let { productId } = useParams();
  let example = 1;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://codepath-store-api.herokuapp.com/store/"+example)
  
      if(result?.data?.products){
        setProduct(result.data.products) 
      }else{
        setError("error no products")

      }
    }
    fetchData();
  }, [])

  console.log("product id: " + products[productId])
  return (
    <div className="product-detail">
      <p>Product Detail for {product}</p>
    </div>
  )
}