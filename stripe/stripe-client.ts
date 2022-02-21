import firebase from "../firebase/firebase-config";
import {
  createCheckoutSession,
  getProducts,
  getStripePayments,
  Product,
  Session,
} from "@stripe/firestore-stripe-payments";

const payments = getStripePayments(firebase.app(), {
  productsCollection: process.env.NEXT_PUBLIC_PRODUCTS_COLLECTION!,
  customersCollection: process.env.NEXT_PUBLIC_CUSTOMERS_COLLECTION!,
});

export const retrieveProducts = async (): Promise<Product[]> => {
  return await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  });
};

export const checkout = async (priceId: string): Promise<Session> => {
  return await createCheckoutSession(payments, {
    price: priceId,
    trial_from_plan: true,
  });
};

export const isUserPremium = async (): Promise<boolean> => {
  await firebase.auth().currentUser?.getIdToken(true);
  const decodedToken = await firebase.auth().currentUser?.getIdTokenResult();
  return decodedToken?.claims?.stripeRole ? true : false;
};

export const manage = async (): Promise<Session> => {
  const functionRef = firebase
    .app()
    .functions()
    .httpsCallable("ext-firestore-stripe-payments-createPortalLink");
  const { data } = await functionRef({
    returnUrl: window.location.origin,
  });
  return data;
};
