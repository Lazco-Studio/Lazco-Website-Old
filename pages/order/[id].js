import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center w-full text-center">
      <div className="flex flex-col w-full mt-5">
        <h1 className="text-3xl font-bold text-white">Order Info</h1>
        <hr className="mt-1 w-[90%] m-auto" />
        <p className="mt-1 text-xl">ID: {router.query.id}</p>
      </div>
      <div className="flex flex-col w-full mt-5">
        <h1 className="text-3xl font-bold text-white">Order Progress</h1>
        <hr className="mt-1 w-[90%] m-auto" />
      </div>
    </main>
  );
}
