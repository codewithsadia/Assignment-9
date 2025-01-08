import React from "react";
import { motion } from "framer-motion";

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ProductDetailProps {
  product: IProduct | null;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 className="text-xl font-semibold mb-4">{product.title}</h2>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="font-bold text-blue-600 mb-4">${product.price}</p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetail;
