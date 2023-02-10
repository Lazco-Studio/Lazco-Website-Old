export default function Service() {
  return (
    <div className="service flex flex-col py-20 items-center min-h-[400px]">
      <h1 className="text-4xl text-center p-2 max-[600px]:text-3xl font-bold">
        多樣化的服務，解決所有問題
      </h1>
      <div className="list mt-12 flex flex-wrap items-center justify-center gap-4 px-2">
        <div className="card w-96 bg-neutral shadow-xl max-[600px]:w-[80vw]">
          <div className="card-body">
            <h2 className="card-title">設計 Design</h2>
            <p>提供網頁設計及規劃建議</p>
          </div>
        </div>
        <div className="card w-96 bg-neutral shadow-xl max-[600px]:w-[80vw]">
          <div className="card-body">
            <h2 className="card-title">開發 Develop</h2>
            <p>依照您的需求給出最佳的解決方案</p>
          </div>
        </div>
        <div className="card w-96 bg-neutral shadow-xl max-[600px]:w-[80vw]">
          <div className="card-body">
            <h2 className="card-title">架設 Hosting</h2>
            <p>幫您把網站架設到網路上</p>
          </div>
        </div>
      </div>
    </div>
  );
}
