import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarSelectorProps } from "./CalendarSelector.types";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CalendarSelector(props: CalendarSelectorProps) {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 5),
    });
    const { setDateSelected, className, carPriceDay } = props;

    useEffect(() => {
        setDateSelected({
            from: date?.from,
            to: date?.to,
        });
    }, [date]);

    const calculateDaysBetween = (from: Date, to: Date): number => {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffInTime = to.getTime() - from.getTime();
        return Math.round(diffInTime / oneDay);
    };

    const daysBetween = date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

    return (
        <>
            <div className={cn("grid gap-2", className)}>
                {date?.from && date?.to && (
                    <>
                        <p className="mt-4 text-lg text-black">
                            Días Totales: {daysBetween}
                        </p>
                        <p className="mb-4 text-md">
                            Precio total: ${daysBetween * Number(carPriceDay)} (Imp. incluidos)
                        </p>
                    </>
                )}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant="outline"
                            className={cn("justify-start text-left font-normal bg-white text-black dark:bg-black dark:text-white", !date && "text-muted-foreground")}
                        >
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            {date?.from ? (
                                date.to ? (
                                    <>
                                        {format(date.from, "LLL dd, y")} - {""}
                                        {format(date.to, "LLL dd, y")}
                                    </>
                                ) : (
                                    format(date.from, "LLL dd, y")
                                )
                            ) : (
                                "Selecciona una fecha"
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white dark:bg-black">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                            className="bg-white dark:bg-black"
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </>
    )
}
