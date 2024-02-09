import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addProduct(product: IProduct) {
    setProducts((prev) => [...prev, product]);
  }

  async function fetchProduct() {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return { products, loading, error, addProduct };
}
