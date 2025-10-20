// generic return type for form data
export type ActionResult = { message: string } | undefined;

// Function type for action functions
export type ActionFunction = (
  prevState: any,
  formData: FormData
) => Promise<ActionResult>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
