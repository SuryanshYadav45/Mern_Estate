const stripe = require('stripe')('sk_test_51NUuHBSBEZsH2Wk9xkwl42RTPtItmRntnla3RQJQNGFqomvX5jgWAGT66GCywBCk9pvp088zY9Zx75zoftKDIgKB00fdC6NI9J');

const payment= async (req, res) => {
    
    const {property}=req.body;
    const lineItems = property.map((property)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:property.name
            },
            unit_amount:property.price * 100,
        },
        quantity:property.quantity
    }));
    console.log(property);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items:lineItems,
      mode:'payment',
      success_url: `http://localhost:4000/success`,
      cancel_url: `http://localhost:4000/cancel`,
    });
  
    console.log(session);
    res.status(200).json(session);
  };


  const success=async(req,res)=>
  {
    try {
      const { session_id } = req.query;
      const session = await stripe.checkout.sessions.retrieve(session_id);
  
      const paymentId = session.payment_intent;
  
      console.log("paymentId",paymentId);
      // await User.updateOne({ _id: req.body.userId }, { $set: { paymentId } });
  
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

module.exports={payment,success}