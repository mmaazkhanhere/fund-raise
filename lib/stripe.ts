/*This code is responsible for creating a stripe instance using the loadStripe
function fro the stripe. This allows for a lazy-loading the Stripe library only
when needed, which can improve performance by reducing initial bundle siz */

import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripePromise = () => {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

    if (!stripePromise && !!key) {
        stripePromise = loadStripe(key);
    }
    return stripePromise;
};

export default getStripePromise;