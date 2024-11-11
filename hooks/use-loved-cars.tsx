import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { Car } from "@prisma/client";

interface UseLovedCarsType {
    lovedItems: Car[];
    addLoveItem: (data: Car) => void;
    removeLoveItem: (id: string) => void;
}

export const useLovedCars = create(
    persist<UseLovedCarsType>(
        (set, get) => ({
            lovedItems: [],
            addLoveItem: (data: Car) => {
                const currentLovedItems = get().lovedItems;
                const existingItem = currentLovedItems.find((item) => item.id === data.id);

                if (existingItem) {
                    return toast({
                        title: "El coche ya está en tu lista de favoritos 💔",
                    });
                }

                set({
                    lovedItems: [...get().lovedItems, data],
                });

                toast({
                    title: "¡Se agregó el coche a tu lista de favoritos 🚘!",
                });
            },
            removeLoveItem: (id: string) => {
                set({
                    lovedItems: get().lovedItems.filter((item) => item.id !== id),
                });

                toast({
                    title: "¡Se eliminó el coche de tu lista de favoritos 💔!",
                });
            },
        }),
        {
            name: "loved-products-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
