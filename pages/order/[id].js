import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const router = useRouter();
  const [percent, setPercent] = React.useState(0);
  React.useEffect(() => {
    setPercent(Math.floor(Math.random() * 101));
  }, []);
  return (
    <main className="flex flex-col items-center w-full text-center">
      <div className="flex flex-col w-full mt-5">
        <h1 className="text-3xl font-bold text-white">Order Info</h1>
        <hr className="mt-1 w-[90%] m-auto" />
        <p className="mt-1 text-xl">ID: {router.query.id}</p>
      </div>
      <div className="flex flex-col items-center w-full mt-5">
        <h1 className="text-3xl font-bold text-white">Order Progress</h1>
        <hr className="mt-1 w-[90%] m-auto" />
        <div class="w-11/12 lg:w-2/6 mx-auto mt-5 mb-10">
          <div class="bg-gray-200 dark:bg-gray-700 h-1 flex items-center justify-between">
            <div class="w-1/3 bg-indigo-700 h-1 flex items-center">
              <div class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                  alt="check"
                />
              </div>
            </div>
            <div class="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
              <div class="absolute right-0 -mr-2">
                <div class="relative bg-white dark:bg-gray-800 shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                  <svg
                    class="absolute top-0 -mt-1 w-full right-0 left-0 text-white dark:text-gray-800"
                    width="16px"
                    height="8px"
                    viewBox="0 0 16 8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Progress-Bars"
                        transform="translate(-322.000000, -198.000000)"
                        fill="currentColor"
                      >
                        <g
                          id="Group-4"
                          transform="translate(310.000000, 198.000000)"
                        >
                          <polygon
                            id="Triangle"
                            points="20 0 28 8 12 8"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p
                    tabindex="0"
                    class="focus:outline-none text-indigo-700 dark:text-indigo-400 text-xs font-bold"
                  >
                    Step 3: Analyzing
                  </p>
                </div>
              </div>
              <div class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
                  alt="check"
                />
              </div>
              <div class="bg-white dark:bg-gray-700 h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                <div class="h-3 w-3 bg-indigo-700 rounded-full"></div>
              </div>
            </div>
            <div class="w-1/3 flex justify-end">
              <div class="bg-white dark:bg-gray-700 h-6 w-6 rounded-full shadow"></div>
            </div>
          </div>
        </div>
        {/* <div
          className="mt-3 text-center text-green-400 radial-progress"
          style={{ "--value": percent }}
        >
          {percent}%
        </div> */}
      </div>
    </main>
  );
}
