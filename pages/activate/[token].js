import { useRouter } from "next/router";

export default function Activate() {
  const router = useRouter();
  const { token } = router.query;
  return <h1>{token}</h1>;
}
