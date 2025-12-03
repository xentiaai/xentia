import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const runtime = 'edge'; // optional: use edge if desired

export async function POST(request) {
  const sig = request.headers.get('stripe-signature') || '';
  const buf = await request.text();
  let event;
  try {
    event = stripe.webhooks.constructEvent(Buffer.from(buf), sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }
  if (event.type === 'checkout.session.completed') {
    console.log('checkout completed', event.data.object.id);
  }
  return new Response(JSON.stringify({ received: true }), { status: 200, headers: { 'Content-Type': 'application/json' }});
}
