"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();
  const lastActionRef = useRef<{ type: string; productName?: string } | null>(
    null
  );
  const isInitialLoad = useRef(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
    isInitialLoad.current = false;
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (!isInitialLoad.current) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items]);

  // Show toast based on last action
  useEffect(() => {
    if (!isInitialLoad.current && lastActionRef.current) {
      const action = lastActionRef.current;

      if (action.type === "add" && action.productName) {
        toast({
          title: "Produk ditambahkan",
          description: `${action.productName} berhasil ditambahkan ke keranjang`,
        });
      } else if (action.type === "remove") {
        toast({
          title: "Produk dihapus",
          description: "Produk berhasil dihapus dari keranjang",
        });
      } else if (action.type === "clear") {
        toast({
          title: "Keranjang dikosongkan",
          description: "Semua produk berhasil dihapus dari keranjang",
        });
      }

      lastActionRef.current = null;
    }
  }, [items, toast]);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    lastActionRef.current = { type: "add", productName: product.name };

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    lastActionRef.current = { type: "remove" };
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    lastActionRef.current = { type: "clear" };
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
