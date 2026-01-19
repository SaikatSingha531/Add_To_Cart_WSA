export interface ProductPayload {
  data: {
  id: string;
  }
}
// export interface CartPayload {
//   item: {
//   id: string;
//   }
// }


export interface AddProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}



// Cart item
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// State
export interface ProductState {
  cartItems: CartItem[];
}

// Context type
export interface ProductContextType {
  productsState: ProductState;
  handleIncrease: (item: CartItem) => void;
  handleDecrase: (item: CartItem) => void;
  handleRemove: (item: CartItem) => void;
  handleClear: () => void;
}

