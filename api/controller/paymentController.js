const stripe = require('stripe')('sk_test_51NUuHBSBEZsH2Wk9xkwl42RTPtItmRntnla3RQJQNGFqomvX5jgWAGT66GCywBCk9pvp088zY9Zx75zoftKDIgKB00fdC6NI9J');
const PurchaseModel=require('../models/PurchaseModel.js')


const payment= async (req, res) => {
    
    const {property,userId,propertyId}=req.body;
    const lineItems = property.map((property)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:property.name,
                images:property.image
            },
            unit_amount:property.price * 100,
        },
        quantity:property.quantity
    }));
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items:lineItems,
      mode:'payment',
      success_url: `http://localhost:4000/payment/success?session_id={CHECKOUT_SESSION_ID}&propertyid=${propertyId}&userId=${userId}`,
      cancel_url: `http://localhost:5173/cancel`,
    });
    res.status(200).json(session.url);
  };


  const success=async(req,res)=>
  {
    try {
      const { session_id,propertyId,userId } = req.query;
      const session = await stripe.checkout.sessions.retrieve(session_id);
      const paymentId = session.payment_intent;
      const history= await PurchaseModel.create({
        userId,
        paymentId,
        propertyId
      })
      if(!history)
      {
        res.redirect("http://localhost:5173/cancel");
      }
      res.redirect("http://localhost:5173/success");
      

      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

module.exports={payment,success}