import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <main>
      <Head>
        <title>Norwegian X</title>
        <link rel="shortcut icon" href="/norx.ico" type="image/x-icon" />
      </Head>
      <div className="container">
        <Image
          src="/images/logo.png"
          className="object-contain"
          layout="fill"
        />
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
