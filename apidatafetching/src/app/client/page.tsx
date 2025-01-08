"use client";
import React, { useEffect, useState } from "react";
import Loader from "../components/loader/page"; // Correct import path
import { motion } from "framer-motion";
import ProductDetail from "../components/ProductDetail"; // Import ProductDetail

export const dynamic = "force-dynamic"
interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const Client = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const parsedResponse = await response.json();
        setData(parsedResponse.products); // Accessing `products` array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading state
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="p-6">
      <motion.h1
        className="grid justify-center bg-gray-300 rounded-md text-3xl font-bold font-serif mb-6 hover:bg-slate-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      Products List
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-slate-200 font-serif gap-6">
        {data.map((product) => (
          <motion.div
            key={product.id}
            className="flex flex-col gap-6 border border-gray-400 p-4 rounded shadow-md hover:visible"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            onClick={() => handleProductClick(product)}
          >
            <motion.img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="font-bold text-blue-600">${product.price}</p>
          </motion.div>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
};

export default Client;
