import { Product } from "@stripe/firestore-stripe-payments";
import { useEffect, useState } from "react";
import { retrieveProducts } from "../stripe/stripe-client";

let initialProducts: Product[] = [];
const useProducts = (): Product[] => {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    retrieveProducts().then(setProducts);
  }, []);

  return products;
};

export default useProducts;
