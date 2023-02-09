export default function Service() {
  return (
    <div className="service flex flex-col pt-10 items-center min-h-[400px]">
      <h1 className="text-4xl max-[600px]:text-2xl font-bold">
        多樣化的服務，解決所有問題
      </h1>
      <div className="carousel rounded-box mt-20">
        <div className="carousel-item flex flex-col p-10 bg-slate-600 border-r-[1.5px] border-gray-700	">
          <h3 className="font-bold text-2xl 	">設計 Design</h3>
          <p className="mt-1 text-white text-lg">提供網頁設計及規劃建議</p>
        </div>
        <div className="carousel-item lex flex-col p-10 bg-slate-600 border-r-[1.5px] border-gray-700	">
          <h3 className="font-bold text-2xl 	">開發 Develop</h3>
          <p className="mt-1 text-white text-lg">
            依照您的需求給出最佳的解決方案
          </p>
        </div>
        <div className="carousel-item lex flex-col p-10 bg-slate-600 ">
          <h3 className="font-bold text-2xl 	">架設 Hosting</h3>
          <p className="mt-1 text-white text-lg">幫您把網站架設到網路上</p>
        </div>
      </div>
    </div>
  );
}
