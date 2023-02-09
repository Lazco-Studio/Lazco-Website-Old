import Image from "next/image";
import {
  FaInstagram,
  FaDiscord,
  FaGlobe,
  FaYoutube,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
export default function About() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center p-4 mt-5">
        <h1 className="mb-4 text-4xl font-bold text-base-500">關於我們</h1>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="relative flex flex-col items-center p-8 rounded-lg shadow-md bg-base-300">
            <Image
              src="/images/haco.png"
              alt="Haco"
              width={128}
              height={128}
              className="object-cover w-32 h-32 mb-4 rounded-full"
            />
            <h2 className="mb-4 text-2xl font-bold text-base-500">Haco</h2>
            <p className="mb-16 text-lg text-base-500">
              嗨！我是HACO，一位網頁開發者同時也是Lazco
              團隊的創始人，我在前端和後端開發方面都有豐富的經驗，並且熟練操作包括
              JavaScript、Python、PHP、Visual Basic 和 React.js
              等多種程式語言。憑藉著對網頁開發的熱情和技能，我有信心能夠創造出具有創新性和動感的網站和應用程式，為所有人帶來出色的體驗，
              我很喜歡交朋友也歡迎大寄來我的社群找我喔！對了我也很喜歡出去玩或是參加各種活動，運氣好的話說不定還能遇到我喔！
            </p>
            <div className="absolute bottom-0 flex flex-wrap mb-8">
              <p className="hover:cursor-pointer">
                <FaGlobe className="mr-4 text-3xl text-base-500" />
              </p>
              <p className="hover:cursor-pointer">
                <FaGithub className="mr-4 text-3xl text-base-500" />
              </p>
              <p className="hover:cursor-pointer">
                <FaInstagram className="mr-4 text-3xl text-base-500" />
              </p>
              <p className="hover:cursor-pointer">
                <FaYoutube className="mr-4 text-3xl text-base-500" />
              </p>
              <p className="hover:cursor-pointer">
                <FaDiscord className="mr-4 text-3xl text-base-500" />
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center p-8 rounded-lg shadow-md bg-base-300">
            <Image
              src="/images/lazp.png"
              alt="Lazp"
              width={128}
              height={128}
              className="object-cover w-32 h-32 mb-4 rounded-full"
            />
            <h2 className="mb-4 text-2xl font-bold text-base-500">Lazp</h2>
            <p className="mb-16 text-lg text-base-500">
              你好，我的名字是 Lazp。我是一名程式設計師，擁有 4
              年全端開發的經驗。我在前端和後端技術上都有扎實的基礎，喜歡使用我的技能建立複雜的，可擴展的應用程式。
              我的專長包括Vue、React、Golang、C
              和SQL/NoSQL。我是一個自我激勵的人，總是尋找新的挑戰和機會，作為開發者成長。我對我的能力提供高質量的結果有信心，並且始終渴望學習和擴展我的技能集。
            </p>
            <div className="absolute bottom-0 flex flex-wrap items-center mb-8">
              <p className="hover:cursor-pointer">
                <FaGlobe className="mr-4 text-3xl text-base-500" />
              </p>
              <p className="hover:cursor-pointer">
                <FaGithub className="mr-4 text-3xl text-base-500" />
              </p>
              <p className="hover:cursor-pointer">
                <FaInstagram className="mr-4 text-3xl text-base-500" />
              </p>
              <p className="hover:cursor-pointer">
                <FaYoutube className="mr-4 text-3xl text-base-500" />
              </p>
              <p className="hover:cursor-pointer">
                <FaDiscord className="mr-4 text-3xl text-base-500" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
