const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")
 
class Store {
    static async listProducts() {
        const products = storage.get("products").value()
        return products
    }
    static async listPurchases() {
      const purchases = storage.get("purchases").value()
      return purchases
    }

    static async fetchProductById(productId) {
        // fetch a single product
        const product = storage
          .get("products")
          .find({ id: Number(productId) })
          .value()
        return product
      }


    //create a purchase order 
    static async recordPurchase(purchase) {
      // create a new purchase 
      if (!purchase) {
        throw new BadRequestError(`No purchase sent.`)
      }


      let requiredFields = ["user","shoppingCart"]
      requiredFields.forEach((field) => {
        if (!purchase[field] && purchase[field] !== 0) {
          throw new BadRequestError(`Field: "${field}" is required in purchase`)
        } 
        // else if (this.checkDuplicateItems(purchase.shoppingCart)){
        //   throw new BadRequestError("No duplicate items allowed in shopping cart")
        // }
      })
  
      const purchases = await Store.listPurchases()
      const purchaseId = purchases.length + 1
      const postedAt = new Date().toISOString()
  
      const newPurchase = { 
        id: purchaseId, 
        name: purchase.user.name, 
        email: purchase.user.email, 
        order: purchase.shoppingCart, 
        total: this.calculateTotal(purchase.shoppingCart),
        createdAt: postedAt}
  
      storage.get("purchases").push(newPurchase).write()
  
      return newPurchase
    }

    static async checkDuplicateItems(shoppingCart){
      
      return false;
    }

    static async calculateTotal(shoppingCart){
      const formatter = Intl.NumberFormat("en-US", {
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      let subtotal = shoppingCart.reduce(calculateSubtotal, 0);

      function calculateSubtotal(total, p) {
        return total + p.quantity * products[p.itemId].price;
      }

      let taxesAndFees = subtotal * 0.0875;
      
      let total = formatter.format(parseFloat(subtotal) + parseFloat(taxesAndFees));
      return total; 
    }

}

module.exports = Store