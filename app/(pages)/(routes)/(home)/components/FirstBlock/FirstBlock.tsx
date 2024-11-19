import Image from "next/image";

export function FirstBlock() {
    return (
        <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
            <div className="p-6 lg:pl-40">
                <h1 className="text-4xl lg:text-8xl font-bold">
                    Premium
                    <span className="block">Renta de Coches</span>
                    en Colombia 
                </h1>
                <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
                    No te niegues el placer de conducir los mejores coches premium de todo el mundo aquí y ahora.
                </p>
            </div>
            <div className="flex justify-end">
                <Image
                    src="/images/porshe.png"
                    alt="Rent cars"
                    width={800}
                    height={800}
                    priority />
            </div>
        </div>
    )
}
