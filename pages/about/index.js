import Card from "@/components/about/Card";

export default function About() {
  return (
    <main>
      <div className="flex flex-col items-center justify-start px-4 py-6">
        <h1 className="mb-6 text-4xl font-bold text-base-500">關於我們</h1>
        <div className="grid grid-cols-2 gap-20 mt-5 max-[1200px]:flex max-[1200px]:flex-wrap justify-center">
          <Card
            image={{
              src: "/images/haco.jpg",
              alt: "Haco",
            }}
            content={{
              name: "HACO",
              text: "嗨！我是HACO，一位網頁開發者同時也是Lazco團隊的創始人，我在前端和後端開發方面都有豐富的經驗，並且熟練操作包括 JavaScript、Python、PHP、Visual Basic 和 React.js等多種程式語言。憑藉著對網頁開發的熱情和技能，我有信心能夠創造出具有創新性和動感的網站和應用程式，為所有人帶來出色的體驗，我很喜歡交朋友也歡迎大家來我的社群找我喔！對了我也很喜歡出去玩或是參加各種活動，運氣好的話說不定還能遇到我喔！",
            }}
            contact={{
              website: "https://www.haco.tw",
              mail: "mailto:jasonytonlinecomeandsee@gmail.com",
              github: "https://github.com/mrhaco",
              instagram: "https://www.instagram.com/jason_lin_0222",
              discord: "http://discord.com/users/508964901415550976",
            }}
          />
          <Card
            image={{
              src: "/images/lazp.jpg",
              alt: "Lazp",
            }}
            content={{
              name: "Lazp",
              text: "你好，我的名字是 Lazp。我是一名程式設計師也是是 Lazco 的創辦人，擁有 4 年全端開發的經驗。我在前端和後端技術上都有扎實的基礎，喜歡使用我的技能建立複雜的，可擴展的應用程式。我的專長包括 Vue、React、Golang、C 和 SQL/NoSQL。我是一個自我激勵的人，總是尋找新的挑戰和機會，作為開發者成長。我對我的能力提供高質量的結果有信心，並且始終渴望學習和擴展我的技能集。",
            }}
            contact={{
              website: "https://banahaker.github.io/",
              mail: "mailto:lazpytb@gmail.com",
              github: "https://github.com/banahaker",
              instagram: "https://www.instagram.com/pn0818x",
              discord: "http://discord.com/users/813904269727236108",
            }}
          />
        </div>
      </div>
    </main>
  );
}
