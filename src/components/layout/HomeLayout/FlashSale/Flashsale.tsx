// pages/Flashsale.tsx or similar
import { Button } from "@/components/ui/button";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const getSecondsUntilNextMidnight = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setDate(now.getDate() + 1);
    midnight.setHours(0, 0, 0, 0);
    return Math.floor((midnight.getTime() - now.getTime()) / 1000);
};

// Updated data with an 'oldPrice' for some items
const carPartsData = [
  {
    "id": 1,
    "name": "Brake Rotor",
    "price": 45.99,
    "oldPrice": 59.99,
    "image": "https://orenmart.sgp1.digitaloceanspaces.com/product/149f4d97-4ff7-40d3-920d-c8d5d3e202e8.jpg",
    "description": "Brake rotors (also called brake discs) are circular metal components that rotate with the wheel. When you apply the brakes, the caliper squeezes the brake pads against the rotor, creating friction to slow or stop the vehicle. This friction converts kinetic energy into heat, which the rotor dissipates. Vented or drilled designs improve cooling and reduce brake fade during heavy use. Essential for safe braking, they provide reliable stopping power and are often made from high-carbon steel for durability."
  },
  {
    "id": 2,
    "name": "Spark Plug",
    "price": 8.50,
    "oldPrice": 10.00,
    "image": "https://orenmart.sgp1.digitaloceanspaces.com/product/7f0cce19-330c-4bb0-ba3c-614720852fdf.jpg",
    "description": "Spark plugs ignite the air-fuel mixture in the combustion chamber of gasoline engines using an electric spark from the ignition system. They feature a central electrode, insulator, and shell, often made with iridium or platinum for better performance, longevity, and resistance to high temperatures. Regular replacement ensures smooth engine operation, better fuel efficiency, and reduced emissions."
  },
  {
    "id": 3,
    "name": "Air Filter",
    "price": 22.00,
    "oldPrice": 25.00,
    "image": "https://orenmart.sgp1.digitaloceanspaces.com/product/565ef3fa-c816-4f60-be13-9b65009be162.jpg",
    "description": "The engine air filter traps dirt, dust, pollen, and debris from the incoming air before it enters the engine. It protects internal components from wear and maintains optimal air-fuel mixture for performance and efficiency. Typically made from pleated paper or synthetic media, it should be replaced regularly to prevent reduced power, poor fuel economy, or engine damage."
  },
  {
    "id": 4,
    "name": "Oil Filter",
    "price": 12.75,
    "oldPrice": 15.75,
    "image": "https://orenmart.sgp1.digitaloceanspaces.com/product/c0951178-b658-403e-9936-476c6ec73e1c.jpg",
    "description": "The oil filter removes contaminants like dirt, metal particles, and sludge from engine oil as it circulates. It ensures clean lubrication for engine parts, reducing wear and extending engine life. Common designs include spin-on canisters with pleated media, often featuring anti-drainback valves to maintain oil pressure on startup."
  },
  {
    "id": 5,
    "name": "Serpentine Belt",
    "price": 35.50,
    "oldPrice": 40.00,
    "image": "https://orenmart.sgp1.digitaloceanspaces.com/product/dd66953e-4ee8-4f69-8f5d-fec0371cb5fd.jpg",
    "description": "The serpentine belt (also called a drive belt) is a single, continuous multi-ribbed rubber belt that drives multiple engine accessories, including the alternator, power steering pump, water pump, and A/C compressor. Reinforced with strong materials like EPDM rubber, it provides efficient power transfer from the crankshaft and reduces noise/vibration. Replacement is needed when it shows cracks or wear to avoid accessory failure."
  },
  {
    "id": 6,
    "name": "Brake Pad Set",
    "price": 75.00,
    "oldPrice": 70.00,
    "image": "https://www.orenmart.com/_next/image?url=https%3A%2F%2Forenmart.sgp1.digitaloceanspaces.com%2Fproduct%2Fa4aaeb62-3a07-42d9-8af8-67569d01ed63.jpg&w=384&q=100",
    "description": "Brake pads are friction materials mounted in the brake caliper that press against the rotor to create stopping power through friction. A set typically includes pads for one axle (front or rear), available in ceramic, semi-metallic, or organic compounds for varying noise, dust, and performance levels. They wear over time and need replacement to maintain safe braking."
  }
]

export default function Flashsale() {
    const [seconds, setSeconds] = useState(getSecondsUntilNextMidnight());
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds <= 1) {
                    return getSecondsUntilNextMidnight();
                }
                return prevSeconds - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const remainingSeconds = totalSeconds % 60;
        const padZero = (num: number) => num.toString().padStart(2, '0');
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
    };

    return (
        <div>
            <div className="md:text-base text-[10px] px-2 container mx-auto flex justify-between items-center gap-4 my-10">
                <h2>FLASH SALE</h2>
                <div>
                    <Button className="md:text-xl text-[10px]">Ends In : {formatTime(seconds)}</Button>
                </div>
                <div>
                    <Button className="md:text-md text-[10px]">View All</Button>
                </div>
            </div>
            <hr />
            <div className="w-full overflow-x-auto px-2">
                <div className="flex gap-2 py-5 my-10 flex-nowrap">
                    {carPartsData.map((part) => (
                        <div key={part.id} className="w-[180px] md:w-1/6 flex-none">
                            <ProductCard
                                id={part.id}
                                name={part.name}
                                description={part.description}
                                price={part.price}
                                oldPrice={part.oldPrice} // Pass the new oldPrice prop
                                image={part.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}