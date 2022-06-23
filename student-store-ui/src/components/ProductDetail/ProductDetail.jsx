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

  return (
    <div className="product-detail">
      <div className="product-view">
        <h1 className="product-id"> Product #{productId}</h1>
      </div>
      <div className="product-view-card">
        <div className="media">
          <img src={products[productId-1].image} alt="" />
          <div className="product-info">
            <div className="main-info">
              <p className="product-name"> {products[productId-1].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}