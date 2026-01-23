import { CarouselPlugin } from "./Carosel1";

const homeData1 = [
    { content: "https://i.ibb.co.com/CKysdQRc/Chat-GPT-Image-Sep-28-2025-03-15-44-PM.png" },
    { content: "https://static-01.daraz.com.bd/p/8ba80f0acff1055a2223ed4379bbf922.jpg" },
    { content: "https://static-01.daraz.com.bd/p/a4effb858e0c7348fb7781c22ccf198c.jpg" },
    { content: "https://static-01.daraz.com.bd/p/c45d2b1bc7d778e4617a6a09c5276164.jpg" },
    { content: "https://bd-live-21.slatic.net/kf/S5d83d4ee7f98458f80b9a91f0a6dffccF.jpg" }
]
const homeData2 = [
    { content: "https://static-01.daraz.com.bd/p/6dc39c2599cf3a3cd201f29bc1514b49.jpg" },
    { content: "https://static-01.daraz.com.bd/p/9346b754153311db8ac71877588b0371.jpg" },
    { content: "https://static-01.daraz.com.bd/p/233b80255c6654f27cd65062443e6cb8.jpg" },
    { content: "https://static-01.daraz.com.bd/p/7c3d2412024d0a6ba07c46e211d37ab9.jpg" },
    { content: "https://bd-live-21.slatic.net/kf/S272e772e0ba343be91ffa37f525da623I.jpg" }
]
const homeData3 = [
    { content: "https://static-01.daraz.com.bd/p/934d25d6b5ec9c0753761cc4e15e6556.jpg" },
    { content: "https://static-01.daraz.com.bd/p/6447d5c14c599bf0efc0e77f73000eff.jpg" },
    { content: "https://bd-live-21.slatic.net/kf/Sd1d50a4607bf4f11bc2605349d32406av.jpg" },
    { content: "https://static-01.daraz.com.bd/p/37d943311e82f8ad85a66922dd7bce28.jpg" },
    { content: "https://static-01.daraz.com.bd/p/4952b420e4c0ff0fd3f4db68444b5db2.jpg" }
]
const homeData4 = [
    { content: "https://static-01.daraz.com.bd/p/558f4ce6b8932bbda02c5e5b8fed8421.jpg" },
    { content: "https://bd-live-21.slatic.net/kf/Sc798e3c1536b489da7c9e6fd685bfa84s.jpg" },
    { content: "https://static-01.daraz.com.bd/p/101416d7f645b5cb76ea95214e0e9a46.jpg" },
    { content: "https://bd-live-21.slatic.net/kf/Se779445baf6e4359bc81ec6255b32684E.jpg" },
    { content: "https://bd-live-21.slatic.net/kf/Se33d18802fd14943a546d13f6cb435c7N.jpg" }
]
const homeData5 = [
    { content: "https://static-01.daraz.com.bd/p/bd4ac3a55dfd3b386555f71f7e874f12.jpg" },
    { content: "https://static-01.daraz.com.bd/p/e6a2f9510da1259093734138b9420158.jpg" },
    { content: "https://bd-live-21.slatic.net/kf/S29f5ea86007b492ba75e9a385854dfe41.jpg" },
    { content: "https://static-01.daraz.com.bd/p/2c18f3c03a1413abebe66b3b8ea7c82a.jpg" },
    { content: "https://bd-live-21.slatic.net/kf/S9e1a47f591294d69857945a03e3b904cp.jpg" }
]
const sideDAta = [
    { content: "https://static-01.daraz.com.bd/p/b2b7e44270c2ad65536e7081f3fe1fde.jpg" },
    { content: "https://static-01.daraz.com.bd/p/9346b754153311db8ac71877588b0371.jpg" },
    { content: "https://static-01.daraz.com.bd/p/cab140b06568c9a2e1a66ffdf86f63e9.jpg" }
]
export default function Banners() {
    return (
        <div className="grid     grid-cols-1 lg:grid-cols-10 gap-4 my-4 container mx-auto">
            {/* First column with two carousels stacked vertically */}
            <div className="flex-col grid-rows-2 col-span-3  gap-4 hidden lg:block">
                <div className=" ">
                    <CarouselPlugin imgsize="w-full h-[32vh]" delayyime={1400} data={homeData3} />
                </div>
                <div className="">
                    <CarouselPlugin imgsize="w-full  h-[32vh]" delayyime={1500} data={homeData2} />
                </div>
            </div>

            {/* Second column with a single carousel */}
            <div className="col-span-4   md:block hidden h-full">
                <CarouselPlugin imgsize="w-full  h-[65vh]" delayyime={1100}  data={homeData1} />
            </div>
            <div className="   w-full mx-auto  my-auto block md:hidden ">
                <CarouselPlugin imgsize="w-full  h-[35vh]" delayyime={1100}  data={homeData1} />
            </div>

            {/* Third column with two carousels stacked vertically */}
            <div className="flex-col col-span-3  hidden lg:block">
                <div className="">
                    <CarouselPlugin imgsize="w-full  h-[32vh]" delayyime={1500} data={homeData4} />
                </div>
                <div className="flex   items-center">
                    <CarouselPlugin delayyime={1400} imgsize=" w-full   h-[32vh] w-full" data={homeData5}  />
                    <CarouselPlugin delayyime={1300} imgsize=" w-full  h-[32vh] w-full" data={sideDAta}  />
                </div>
            </div>
        </div>
    )
}