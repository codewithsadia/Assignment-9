import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ServerSideProducts = async () => {
  try {
    // Fetching data from the API
    const response = await fetch("https://fakestoreapi.com/products");
    const parsedResponse: IProduct[] = await response.json();

    console.log("products >>>", parsedResponse);

    return (
      <>
        <div className="w-15px h-[20] bg-slate-500 py-2 mt-4 rounded-full">
          <h1 className="grid justify-center text-3xl font-serif">
            Server-Side Data Fetching
          </h1>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-purple-200">
          {parsedResponse.map((pro) => (
            <div
              key={pro.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-200 transform transition-transform duration-300 hover:scale-105"
            >
              <Link href={`/product/${pro.id}`}>
                {/* Image Section */}
                <div className="relative w-full h-60">
                  <Image
                    src={pro.image}
                    alt={pro.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </Link>

              {/* Content Section */}
              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-xl font-serif text-gray-800">
                  {pro.title}
                </h2>
                <p className="text-gray-600 font-serif">{pro.description}</p>
                <p className="text-sm font-serif text-gray-800">
                  Price: ${pro.price}
                </p>
                <p className="text-gray-600">
                  <strong>Category:</strong> {pro.category}
                </p>
                <p className="text-gray-600">
                  <strong>Rating:</strong> {pro.rating.rate} ⭐ (
                  {pro.rating.count} reviews)
                </p>
                <button className="mt-2 bg-gray-500 text-black border border-black px-4 py-2 rounded hover:bg-gray-300 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="text-center text-red-600 font-bold">
        Failed to load products. Please try again later.
      </div>
    );
  }
};

export default ServerSideProducts;
