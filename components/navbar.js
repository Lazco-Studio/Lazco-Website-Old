import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <p
          className="text-xl normal-case btn btn-ghost"
          onClick={() => router.push("/")}
        >
          LAZCO
        </p>
      </div>
      <div className="flex-none max-[640px]:hidden">
        <ul className="px-1 menu menu-horizontal">
          <li tabIndex={0} className="dropdown">
            <p>
              服務項目
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
            <ul className="p-2 mt-3 bg-base-300 dropdown-content">
              <li>
                <p>網站製作</p>
              </li>
            </ul>
          </li>
          <li>
            <p onClick={() => router.push("/about")}>關於我們</p>
          </li>
          <li>
            <p onClick={() => router.push("/contact")}>聯絡我們</p>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end min-[640px]:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="p-2 mt-3 shadow-2xl menu dropdown-content bg-base-200 rounded-box w-52"
        >
          <li tabIndex={0}>
            <span>服務項目</span>
            <ul className="p-2 rounded-box bg-base-200">
              <li>
                <a>網頁開發</a>
              </li>
            </ul>
          </li>
          <li>
            <p onClick={() => router.push("/about")}>關於我們</p>
          </li>
          <li>
            <p onClick={() => router.push("/contact")}>聯絡我們</p>
          </li>
        </ul>
      </div>
      {/* <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
           <div
            tabIndex={0}
            className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-300"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src="/images/default-avatar.png"
                alt="user-avatar"
                width={40}
                height={40}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
