import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [descrValue, setDescrValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [countValue, setCountValue] = useState(0);

  const [error, setError] = useState("");

  const sabmitHandler = async (event: React.FormEvent) => {
    setError("");
    event.preventDefault();
    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }
    productData.title = value;
    productData.price = priceValue;
    productData.description = descrValue;
    productData.category = categoryValue;
    productData.rating.rate = rateValue;
    productData.rating.count = countValue;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data);
  };

  const changeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    // setValue(event.target.value);

    const value = event.target.value;

    switch (fieldName) {
      case "title":
        setValue(value);
        break;
      case "price":
        setPriceValue(+value);
        break;
      case "descr":
        setDescrValue(value);
        break;
      case "catetgory":
        setCategoryValue(value);
        break;
      case "rate":
        setRateValue(+value);
        break;
      case "count":
        setCountValue(+value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={sabmitHandler}>
      <input
        type="text"
        className="border py-4 px-2 mb-2 w-full outline-0"
        placeholder="Enter product tittle..."
        value={value}
        onChange={(e) => changeHandler(e, "title")}
      />
      <input
        type="text"
        className="border py-4 px-2 mb-2 w-full outline-0"
        placeholder="Enter product tittle..."
        value={priceValue}
        onChange={(e) => changeHandler(e, "price")}
      />
      <input
        type="text"
        className="border py-4 px-2 mb-2 w-full outline-0"
        placeholder="Enter product tittle..."
        value={descrValue}
        onChange={(e) => changeHandler(e, "descr")}
      />
      <input
        type="text"
        className="border py-4 px-2 mb-2 w-full outline-0"
        placeholder="Enter product tittle..."
        value={categoryValue}
        onChange={(e) => changeHandler(e, "catetgory")}
      />
      <input
        type="text"
        className="border py-4 px-2 mb-2 w-full outline-0"
        placeholder="Enter product tittle..."
        value={rateValue}
        onChange={(e) => changeHandler(e, "rate")}
      />
      <input
        type="text"
        className="border py-4 px-2 mb-2 w-full outline-0"
        placeholder="Enter product tittle..."
        value={countValue}
        onChange={(e) => changeHandler(e, "count")}
      />
      {error && <ErrorMessage error={error} />}
      <button
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
        type="submit"
      >
        Click!
      </button>
    </form>
  );
}
