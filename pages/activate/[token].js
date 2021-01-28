import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function getStaticPaths() {
  return { paths: [], fallback: true };
}

export function getStaticProps({ params }) {
  return {
    props: { token: params.token },
    revalidate: true,
  };
}

export default function Activate({ token }) {
  const [t, setT] = useState(token);
  useEffect(() => {
    setT(token + " to dla Was!");
  }, []);
  return <h1>{t}</h1>;
}
