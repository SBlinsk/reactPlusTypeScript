import { Product } from "../components/Product";
import { useProducts } from "../hooks/Product";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { IProduct } from "../models";
import { useContext } from "react";
import { modalContext } from "../context/ModalContext";

export function AboutProduct() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(modalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create New Product" onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-green-700 text-white text-2xl px-4 py-2"
        onClick={() => open()}
      >
        Add item
      </button>
    </div>
  );
}
