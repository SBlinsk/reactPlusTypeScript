import { IProduct } from "../models";
import { useState } from "react";

interface PoductProps {
  product: IProduct;
}
export function Product({ product }: PoductProps) {
  const [details, setDetails] = useState(false);

  const btnsBgClassNames = details ? " bg-blue-400" : " bg-yellow-400";

  const btnClasses = [`py-2 px-4 border`, btnsBgClassNames];

  return (
    <div className="border py-2 px-4 roundede flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title}></img>
      <p> {product.title}</p>
      <p className="font-bols">{product.price}</p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate: <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  ); 
}
