import { create } from "zustand";

export type GlobalStoreState<T> = T & { isReady: boolean };
export type GlobalStoreActions<T> = T & { reset: () => void };

type Product = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string;
};

type State = GlobalStoreState<{
  cart: Product[];
  calculatePriceTotal: () => string;
}>;

type Actions = GlobalStoreActions<{
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}>;

export const useCartStore = create<State & Actions>((set, get) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((p) => p.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        String(product.id) === String(id) ? { ...product, quantity } : product
      ),
    })),
  calculatePriceTotal: () => {
    const total = get().cart.reduce((total, product) => {
      const priceString = product.price.replace("R$ ", "").replace(",", ".");

      const price = parseFloat(priceString);

      return total + price * product.quantity;
    }, 0);

    return total.toFixed(2).replace(".", ",");
  },
  isReady: true,
  reset: () => set({ cart: [] }),
}));
