import { useContext } from "react";
import productsData from "../Services/Json/Products";
import { ProductContext } from "../Hooks/Context/CreateProductContext";
import { toast } from "sonner";
import type { AddProduct } from "../Typescript/Interface/Interface";

const ProductsPage = () => {
  const { handleDispatch } = useContext(ProductContext);

  const addProducts = (product:AddProduct) => {
    handleDispatch(product);
    toast.success("Item Added Successfully");
  };

  return (
    <div className="p-8 bg-gradient-to-br from-orange-100 to-orange-200 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex gap-5 
            hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
            min-h-[190px]"
          >
            {/* Image */}
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 rounded-xl object-cover shadow-md"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-xl text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-orange-600 font-extrabold text-lg">
                    ₹{product.price}
                  </p>
                  <p className="text-sm text-gray-400">
                    ⭐ {product.rating}
                  </p>
                </div>

                <button
                  onClick={() => addProducts(product)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 
                  text-white px-5 py-2 rounded-full text-sm font-semibold
                  hover:from-orange-600 hover:to-orange-700
                  transition-all duration-300 
                  hover:scale-110 active:scale-95 shadow-md"
                >
                  ADD TO CART +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
