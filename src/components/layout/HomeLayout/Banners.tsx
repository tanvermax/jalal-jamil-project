import { CarouselPlugin } from "./Carosel1";

const homeData1 = [
    { content: "https://i.ibb.co.com/CKysdQRc/Chat-GPT-Image-Sep-28-2025-03-15-44-PM.png" },
    { content: "https://orenmart.sgp1.digitaloceanspaces.com/slider/de520231-1e21-404d-9c4b-3b7428c21544.jpg" },
    { content: "https://orenmart.sgp1.digitaloceanspaces.com/slider/014a83e2-e396-415b-9ada-cb2c106bb0b4.jpg" },
    { content: "https://orenmart.sgp1.digitaloceanspaces.com/slider/89fc8cbb-c7e0-4c04-b1d0-83c80c38a5e2.jpg" },
    { content: "https://i.ibb.co.com/CKysdQRc/Chat-GPT-Image-Sep-28-2025-03-15-44-PM.png" }
]
const sideDAta = [
    { content: "https://orenmart.sgp1.digitaloceanspaces.com/banner/900e7486-c540-429b-91ac-788c438f1c29.jpg" },
    { content: "https://orenmart.sgp1.digitaloceanspaces.com/banner/d8848de3-4bd2-42bd-8ecc-d54bdd1e9db2.jpg" },
    { content: "https://orenmart.sgp1.digitaloceanspaces.com/banner/55ea9ba8-507a-4227-9ef2-5ad1c546edb1.jpg" }
]
export default function Banners() {
    return (
        <div className="grid     grid-cols-1 lg:grid-cols-10 gap-4 my-4 container mx-auto">
            {/* First column with two carousels stacked vertically */}
            <div className="flex-col grid-rows-2 col-span-3  gap-4 hidden lg:block">
                <div className=" ">
                    <CarouselPlugin imgsize=" h-[32vh]" delayyime={1400} data={homeData1} />
                </div>
                <div className="">
                    <CarouselPlugin imgsize=" h-[32vh]" delayyime={1500} data={homeData1} />
                </div>
            </div>

            {/* Second column with a single carousel */}
            <div className="col-span-4   md:block hidden h-full">
                <CarouselPlugin imgsize=" h-[65vh]" delayyime={1100}  data={homeData1} />
            </div>
            <div className="   w-full mx-auto  my-auto block md:hidden ">
                <CarouselPlugin delayyime={1100}  data={homeData1} />
            </div>

            {/* Third column with two carousels stacked vertically */}
            <div className="flex-col col-span-3  hidden lg:block">
                <div className="">
                    <CarouselPlugin imgsize=" h-[32vh]" delayyime={1500} data={homeData1} />
                </div>
                <div className="flex   items-center">
                    <CarouselPlugin delayyime={1400} imgsize=" h-[32vh] w-full" data={sideDAta}  />
                    <CarouselPlugin delayyime={1300} imgsize="h-[32vh] w-full" data={sideDAta}  />
                </div>
            </div>
        </div>
    )
}