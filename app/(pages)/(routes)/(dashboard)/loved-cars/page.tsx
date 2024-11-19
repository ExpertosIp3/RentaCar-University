import { auth } from "@clerk/nextjs/server";
import { ListLovedCars } from "./components/ListLovedCars/ListLovedCars";
import { redirect } from "next/navigation";

export default function pageLovedCars() {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Coches que te gustan</h1>
            <br />
            <ListLovedCars />
        </div>
    )
}
