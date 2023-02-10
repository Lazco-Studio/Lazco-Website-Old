import { useRouter } from "next/router";
export default function Top() {
  const router = useRouter();
  return (
    <div className="relative top h-[640px]">
      <div className="bg-cover bg-center h-[640px] bg-[url('/images/home-bg.png')]"></div>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="absolute inset-0 p-2 content h-full max-w-[640px] m-auto flex flex-col justify-center items-start text-center	 max-[600px]:items-center max-[770px]:ml-14">
        <h1 className="text-white text-4xl font-bold max-[600px]:text-3xl">
          規劃。開發。提供數位解決方案
        </h1>
        <h2 className="text-gray text-2xl font-thin mt-2 max-[600px]:text-xl">
          提供網頁設計，開發，與架設服務
        </h2>
        <p>
          <button
            className="mt-4 btn btn-primary btn-outline"
            onClick={() => router.push("/contact")}
          >
            立即詢問
          </button>
        </p>
      </div>
    </div>
  );
}
