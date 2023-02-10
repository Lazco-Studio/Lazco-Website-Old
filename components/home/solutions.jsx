export default function Solutions() {
  return (
    <div className="solutions py-20 px-3 flex flex-col items-center w-full bg-neutral">
      <h1 className="text-4xl text-center font-bold max-[640px]:text-3xl">
        解決方案
      </h1>
      <div className="list mt-10 flex flex-wrap p-3 gap-10 items-center justify-center">
        <div className="card w-[375px] bg-base-100 shadow-xl image-full max-[600px]:w-[80vw]">
          <figure>
            <img src="/images/develop.jpg" alt="develop" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-white">網頁開發</h2>
            <p>提供自定性高的網頁設計/開發服務</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/contact")}
              >
                立即詢問
              </button>
            </div>
          </div>
        </div>
        <div className="card w-[375px] bg-base-100 shadow-xl image-full max-[600px]:w-[80vw]">
          <figure>
            <img src="/images/adviser.jpg" alt="adviser" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-white">數位顧問</h2>
            <p>提供系統開發顧問，並協助規劃與提供數位轉型建議</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => router.push("/contact")}
              >
                立即詢問
              </button>
            </div>
          </div>
        </div>
        <div className="card w-[375px] bg-base-100 shadow-xl image-full max-[600px]:w-[80vw]">
          <figure>
            <img src="/images/support.jpg" alt="support" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-white">客戶服務</h2>
            <p>提供產品售後的問題引導以及解決</p>
            <div className="card-actions justify-end">
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
