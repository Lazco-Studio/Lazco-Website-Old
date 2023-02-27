import Card from "./Card";


export default function Service() {
    return (
        <div className="service flex flex-col py-20 px-3 items-center min-h-[400px]">
            <h1 className="text-4xl text-center p-2 max-[640px]:text-3xl font-bold">
                多樣化的服務，解決所有問題
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 px-2 mt-12 list">
                <Card
                    title={"設計 Design"}
                    content={"提供網頁設計及規劃建議"}
                />
                <Card
                    title={"開發 Develop"}
                    content={"依照您的需求給出最佳的解決方案"}
                />
                <Card
                    title={"架設 Hosting"}
                    content={"幫您把網站架設到網路上"}
                />
            </div>
        </div>
    );
}
