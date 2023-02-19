import Image from "next/image";
import { useRouter } from "next/router";

import Card from "./Card";


export default function Solutions() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center w-full px-3 py-20 solutions bg-base-300">
            <h1 className="text-4xl text-center font-bold max-[640px]:text-3xl">
                解決方案
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 px-2 mt-10 list">
                <Card
                    title={"網頁開發"}
                    description={"提供自定性高的網頁設計/開發服務"}
                    image={{
                        src: "/images/develop.jpg",
                        alt: "develop",
                        width: 640,
                        height: 427
                    }}
                    url={"/contact"}
                />
                <Card
                    title={"數位顧問"}
                    description={"提供系統開發顧問，並協助規劃與提供數位轉型建議"}
                    image={{
                        src: "/images/adviser.jpg",
                        alt: "adviser",
                        width: 640,
                        height: 427
                    }}
                    url={"/contact"}
                />
                <Card
                    title={"客戶服務"}
                    description={"提供產品售後的問題引導以及解決"}
                    image={{
                        src: "/images/support.jpg",
                        alt: "support",
                        width: 640,
                        height: 427
                    }}
                    url={"/contact"}
                />
            </div>
        </div>
    );
}
