import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function Contact() {
    const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const endpoint = "/api/contact";
        const urlencoded = new URLSearchParams();
        if (!event.target.name.value) return alert("你必須輸入姓名！");
        if (!event.target.mail.value) return alert("你必須輸入姓名！");
        if (!event.target.phone.value) return alert("你必須輸入姓名！");
        if (!event.target.message.value) return alert("你必須輸入姓名！");
        urlencoded.append("name", event.target.name.value);
        urlencoded.append("mail", event.target.mail.value);
        urlencoded.append("phone", event.target.phone.value);
        urlencoded.append("message", event.target.message.value);
        if (event.target.discord) {
            urlencoded.append("discord", event.target.discord.value);
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: urlencoded,
        };
        const response = await fetch(endpoint, options);
        await response.json();
        Swal.fire({
            title: "成功送出聯絡資訊！",
            icon: "success",
            confirmButtonText: "確認",
            allowEscapeKey: false,
            allowOutsideClick: false,
            confirmButtonColor: "#55dba1",
            customClass: {
                container: "select-none",
            },
            focusConfirm: false,
        }).then((resault) => {
            router.push("/");
        });
    };
    return (
        <main className="m-10">
            <h1 className="mb-[44px] text-4xl font-medium text-center">聯絡我們</h1>
            <div className="flex items-center justify-center">
                <form
                    className="max-w-[1000px] w-3/4 p-10 rounded-lg shadow-xl bg-base-300"
                    onSubmit={handleSubmit}
                >
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
                        <label htmlFor="mail" className="flex text-lg text-base-500">
                            電子郵件<p className="text-red-500">*</p>
                        </label>
                        <input
                            type="email"
                            id="mail"
                            name="mail"
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
