import { Container, Row, Col, Card, Image, Title, Text } from "daisyui";
export default function About() {
  return (
    <main>
      <div className="min-h-screen p-10">
        <h1 className="text-5xl font-bold text-center text-white">About Us</h1>
        <div className="p-10">
          <div className="grid w-11/12 grid-cols-2 gap-10 mx-auto">
            <div className="p-10 transition duration-500 ease-in-out transform rounded-lg shadow-lg bg-base-300 hover:scale-105">
              <img
                src="/images/lazp.png"
                alt="Lazp"
                className="w-16 h-16 mb-10 rounded-full"
              />
              <h2 className="font-medium text-white font-xl">Lazp</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                rhoncus euismod varius. Aliquam erat volutpat.
              </p>
              <h3 className="mt-10 font-medium text-white font-lg">
                Contact Information:
              </h3>
              <p className="text-white">
                Email: lazp@example.com
                <br />
                Phone: (555) 555-5555
              </p>
            </div>
            <div className="p-10 transition duration-500 ease-in-out transform rounded-lg shadow-lg bg-base-300 hover:scale-105">
              <img
                src="/images/haco.png"
                alt="Haco"
                className="w-16 h-16 mb-10 rounded-full"
              />
              <h2 className="font-medium text-white font-xl">Haco</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                rhoncus euismod varius. Aliquam erat volutpat.
              </p>
              <h3 className="mt-10 font-medium text-white font-lg">
                Contact Information:
              </h3>
              <p className="text-white">
                Email: haco@example.com
                <br />
                Phone: (555) 555-5555
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-10 ">
          <div className="container p-10 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full p-10 md:w-1/2">
                <div className="p-10 bg-white rounded-lg shadow-lg">
                  <img
                    src="/images/lazp.png"
                    alt="Lazp"
                    className="w-32 h-32 mb-10 rounded-full"
                  />
                  <h2 className="text-xl font-medium text-gray-900">Lazp</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc rhoncus euismod varius. Aliquam erat volutpat.
                  </p>
                  <h3 className="mt-10 text-lg font-medium text-gray-900">
                    Contact Information:
                  </h3>
                  <p className="text-gray-700">
                    Email: lazp@example.com
                    <br />
                    Phone: (555) 555-5555
                  </p>
                </div>
              </div>
              <div className="w-full p-10 md:w-1/2">
                <div className="p-10 bg-white rounded-lg shadow-lg">
                  <img
                    src="/images/haco.png"
                    alt="Haco"
                    className="w-32 h-32 mb-10 rounded-full"
                  />
                  <h2 className="text-xl font-medium text-gray-900">Haco</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc rhoncus euismod varius. Aliquam erat volutpat.
                  </p>
                  <h3 className="mt-10 text-lg font-medium text-gray-900">
                    Contact Information:
                  </h3>
                  <p className="text-gray-700">
                    Email: haco@example.com
                    <br />
                    Phone: (555) 555-5555
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </main>
  );
}
