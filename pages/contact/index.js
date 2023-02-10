import Image from "next/image";
export default function Contact() {
  return (
    <main className="mt-10">
      <h1 class="text-center text-4xl font-medium mb-6">聯絡我們</h1>
      <div className="flex items-center justify-center">
        <form className="w-3/4 p-10 rounded-lg shadow-xl bg-base-300">
          <div className="mb-5">
            <label htmlFor="name" className="block text-lg text-base-500 ">
              姓名：
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
            <label htmlFor="email" className="block text-lg text-base-500">
              電子郵件：
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
            <label htmlFor="phone" className="block text-lg text-base-500">
              連絡電話：
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
            <label htmlFor="message" className="block text-lg text-base-500 ">
              留言與備註：
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
