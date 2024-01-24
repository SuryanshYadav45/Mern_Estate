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
      success_url: `http://localhost:4000/payment/success?session_id={CHECKOUT_SESSION_ID}&order=${encodeURI(JSON.stringify(req.body))}`,
      cancel_url: `http://localhost:4000/cancel`,
    });
    res.status(200).json(session.url);
  };


  const success=async(req,res)=>
  {
    try {
      const { session_id,order } = req.query;
      console.log(session_id);
      const orderDetail = decodeURI(order);
      console.log(orderDetail);
      const session = await stripe.checkout.sessions.retrieve(session_id);
      console.log(session);
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