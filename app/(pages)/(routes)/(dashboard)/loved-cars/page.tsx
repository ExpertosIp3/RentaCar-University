import { ListLovedCars } from "./components/ListLovedCars/ListLovedCars";

export default function pageLovedCars() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Coches que te gustan</h1>
            <br />
            <ListLovedCars />
        </div>
    )
}
