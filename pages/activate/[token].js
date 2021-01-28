import { useRouter } from "next/router";

export function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default function Activate() {
  const router = useRouter();
  const { token } = router.query;
  return <h1>{token}</h1>;
}
