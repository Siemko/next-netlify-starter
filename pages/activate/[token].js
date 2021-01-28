import { useRouter } from "next/router";

export function getStaticPaths() {
  return { paths: [], fallback: true };
}

export function getStaticProps({ params }) {
  return {
    props: { token: params.token },
    unstable_revalidate: true,
  };
}

export default function Activate({ token }) {
  return <h1>{token}</h1>;
}
