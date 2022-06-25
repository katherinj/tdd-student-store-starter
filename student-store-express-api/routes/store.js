const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()
// list all purchases
router.get("/purchases", async (req, res, next) => {
  try {
    const purchases = await Store.listPurchases()
    res.status(200).json({ purchases })
  } catch (err) {
    next(err)
  }
})
// create new purchase
router.post("/purchases", async (req, res, next) => {
  try {
    const purchase = req.body.purchase
    const newPurchase = await Store.recordPurchase(purchase)
    res.status(201).json({ purchase: newPurchase })
  } catch (err) {
    next(err)
  }
})


// list all products
router.get("/store", async (req, res, next) => {
    try {
      const products = await Store.listProducts()
      res.status(200).json({ products })
    } catch (err) {
      next(err)
    }
  })

// fetch single product
router.get("/store/:productId", async (req, res, next) => {
    try {
      const productId = req.params.productId
      const product = await Store.fetchProductById(productId)
      if (!product) {
        throw new NotFoundError("Product not found")
      }
      res.status(200).json({ "product" : product })
    } catch (err) {
      next(err)
    }  
  })


  module.exports = router