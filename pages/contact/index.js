import Image from "next/image";
export default function Contact() {
  return (
    <main className="my-10">
      <h1 className="mb-6 text-4xl font-medium text-center">聯絡我們</h1>
      <div className="flex items-center justify-center">
        <form className="w-3/4 p-10 rounded-lg shadow-xl bg-base-300">
          <div className="mb-5">
            <label htmlFor="name" className="flex text-lg text-base-500">
              姓名<p className="text-red-500">*</p>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 text-lg bg-gray-600 border rounded-lg text-base-500 border-base-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="flex text-lg text-base-500">
              電子郵件<p className="text-red-500">*</p>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 text-lg bg-gray-600 border rounded-lg text-base-500 border-base-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="flex text-lg text-base-500">
              連絡電話<p className="text-red-500">*</p>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-2 text-lg bg-gray-600 border rounded-lg text-base-500 border-base-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="discord" className="block text-lg text-base-500">
              Discord名稱(例:HACO#8888)
            </label>
            <input
              id="discord"
              name="discord"
              className="w-full p-2 text-lg bg-gray-600 border rounded-lg text-base-500 border-base-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="flex text-lg text-base-500 ">
              留言與備註<p className="text-red-500">*</p>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              className="w-full p-2 text-lg bg-gray-600 border rounded-lg text-base-500 border-base-500"
            />
          </div>
          <div className="flex justify-center pt-3">
            <button className="text-lg btn btn-primary btn-outline">
              送出
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
