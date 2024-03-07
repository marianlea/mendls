require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const express = require('express')

const router = express.Router()

router.post('/api/create-checkout-session', async (req, res) => {
  const { products } = req.body
  
  console.log(products);
  function getPriceId(pastry) {
    switch(pastry.id) {
      case 1: 
          return 'price_1OrCRUJMehcHOqCVi5MHFR1v'
      case 2: 
          return 'price_1OrCS7JMehcHOqCVJSkyTlvd'
      case 3: 
          return 'price_1OrCSgJMehcHOqCVrhv3pYll'
      case 4: 
          return 'price_1OrCUOJMehcHOqCVfiI11GWN'
      case 5: 
          return 'price_1OrCUsJMehcHOqCVksBli7Ik'
      case 6: 
          return 'price_1OrCWFJMehcHOqCVORq0QFEj'
      case 7: 
          return 'price_1OrCWfJMehcHOqCVQJxDmBdf'
    }
}

  const lineItems = products.map((product) => ({
    price: getPriceId(product),
    quantity: product.quantity
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types:['card'],
    client_reference_id: products.cartId,
    line_items: lineItems,
    mode: 'payment',
    shipping_options: [
      {shipping_rate: 'shr_1Ora7kJMehcHOqCVv2qp6SgU'}
    ],
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/cancel'
  })

  res.json(session)

})

module.exports = router