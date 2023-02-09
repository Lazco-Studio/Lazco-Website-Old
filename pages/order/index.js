import { useRouter } from "next/router";

export default function Order() {
  const router = useRouter();
  router.push("/");
  return <main>Redirect...</main>;
}
