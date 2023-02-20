import { useRouter } from "next/router";
import Head from "next/head";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "@sweetalert2/themes/dark/dark.scss";


export default function Contact() {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!event.target.name.value) return alert("你必須輸入姓名！");
        if (!event.target.mail.value) return alert("你必須輸入信箱！");
        if (!event.target.phone.value) return alert("你必須輸入電話！");
        if (!event.target.message.value) return alert("你必須輸入留言！");

        const data = encodeQueryData({
            "name": event.target.name.value,
            "mail": event.target.mail.value,
            "phone": event.target.phone.value,
            "message": event.target.message.value,
            "discord": event.target.discord ? event.target.discord.value : ""
        });
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data
        };

        try {
            const endpoint = "/api/contact";
            const response = await fetch(endpoint, options);
            if (response.status === 201) {
                await Swal.fire({
                    title: "成功送出聯絡資訊！",
                    icon: "success",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    confirmButtonText: "回首頁",
                    confirmButtonColor: "#55dba1",
                    customClass: {
                        container: "select-none"
                    },
                    focusConfirm: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        router.push("/");
                    }
                });
            }
            else {
                throw new Error(await response.json().message);
            }
        }
        catch (error) {
            await Swal.fire({
                title: "發生錯誤！",
                icon: "error",
                allowEscapeKey: false,
                allowOutsideClick: false,
                confirmButtonText: "再試一次",
                confirmButtonColor: "#55dba1",
                customClass: {
                    container: "select-none"
                },
                focusConfirm: false,
            });
        }
    };

    return (
        <>
            <Head>
                <title>Lazco | Contact Us</title>
            </Head>
            <main className="m-10">
                <h1 className="mb-[44px] text-4xl font-medium text-center">聯絡我們</h1>
                <div className="flex items-center justify-center">
                    <form
                        className="max-w-[1000px] w-3/4 p-10 rounded-lg shadow-xl bg-base-300"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-5">
                            <label htmlFor="name" className="flex text-lg text-base-500">
                                姓名<span className="text-red-500">*</span>
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
                                電子郵件<span className="text-red-500">*</span>
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
                                連絡電話<span className="text-red-500">*</span>
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
                                留言與備註<span className="text-red-500">*</span>
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
        </>
    );
}

function encodeQueryData(data) {
    const ret = [];
    for (let d in data)
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
}