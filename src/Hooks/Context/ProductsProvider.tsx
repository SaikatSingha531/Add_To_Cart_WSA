import { useReducer } from "react";
import { ProductContext } from "./CreateProductContext";
import {
  productsInitialState,
  productsReducer,
} from "../Reducer/ProductsReducer";
import { toast } from "sonner";
import type {  ProductPayload } from "../../Typescript/Interface/Interface";

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState,
  );

  const handleDispatch = (data:ProductPayload) => {
    productsDispatch({
      type: "ADD_TO_CART",
      payload: data,
    });
  };

  const handleIncrease = (item:any): void => {
    productsDispatch({
      type: "INCREASE_QTY",
      payload: item.id,
    });
}

const handleDecrase =(item:any): void=>{

    productsDispatch({
      type: "DECREASE_QTY",
      payload: item.id,
    });
    
}

const handleRemove =(item:any): void=>{

    productsDispatch({
      type: "REMOVE_FROM_CART",
      payload: item.id,
      
    });
toast.info("Item Remove Successfull")

}

const handleClear = ()=>{

    productsDispatch({ type: "CLEAR_CART" })
    toast.info("All Item Removed")
}


  return (
    <div>
      <ProductContext.Provider
        value={{ productsState, handleDispatch,handleIncrease,handleDecrase,handleRemove, handleClear  }}
      >
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductsProvider;
