import { useRouter } from "next/router";
export default function Solutions() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full px-3 py-20 solutions bg-base-300">
      <h1 className="text-4xl text-center font-bold max-[640px]:text-3xl">
        解決方案
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 px-2 mt-10 list">
        <div className="card w-[375px] bg-base-100 shadow-xl image-full max-[600px]:w-[80vw] transition duration-500 ease-in-out transform hover:scale-110">
          <figure>
            <img src="/images/develop.jpg" alt="develop" loading="lazy" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-white card-title">網頁開發</h2>
            <p>提供自定性高的網頁設計/開發服務</p>
            <div className="justify-end card-actions">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/contact")}
              >
                立即詢問
              </button>
            </div>
          </div>
        </div>
        <div className="card w-[375px] bg-base-100 shadow-xl image-full max-[600px]:w-[80vw] transition duration-500 ease-in-out transform hover:scale-110">
          <figure>
            <img src="/images/adviser.jpg" alt="adviser" loading="lazy" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-white card-title">數位顧問</h2>
            <p>提供系統開發顧問，並協助規劃與提供數位轉型建議</p>
            <div className="justify-end card-actions">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/contact")}
              >
                立即詢問
              </button>
            </div>
          </div>
        </div>
        <div className="card w-[375px] bg-base-100 shadow-xl image-full max-[600px]:w-[80vw] transition duration-500 ease-in-out transform hover:scale-110">
          <figure>
            <img src="/images/support.jpg" alt="support" loading="lazy" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-white card-title">客戶服務</h2>
            <p>提供產品售後的問題引導以及解決</p>
            <div className="justify-end card-actions">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/contact")}
              >
                立即詢問
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
