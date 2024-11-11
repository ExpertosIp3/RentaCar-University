"use client";

import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Car } from "@prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { title } from "process";
import { toast } from "@/components/ui/use-toast";

export function ModalAddReservation(props: ModalAddReservationProps) {
    const { car } = props;
    const [dateSelected, setDataSelected] = useState<{
        from: Date | undefined;
        to: Date | undefined;
    }>({
        from: new Date(),
        to: addDays(new Date(), 5),
    });

    const onReserveCar = async (car: Car, dateSelected: DateRange) => {
        const response = await axios.post("/api/checkout", {
            carId: car.id,
            priceDay: car.priceDay,
            startDate: dateSelected.from,
            endDate: dateSelected.to,
            carName: car.name,
        });

        window.location = response.data.url;
        toast({
            title: "Carro reservado ✌",
        });
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="w-full mt-3">
                    Reservar vehiculo
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Selecciona las fechas en las que quieres alquilar el vehículo</AlertDialogTitle>
                    <AlertDialogDescription>
                        <CalendarSelector setDateSelected={setDataSelected} carPriceDay={car.priceDay} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>
                        Reservar vehiculo</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
