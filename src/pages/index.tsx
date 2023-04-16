import { type NextPage } from "next";
import Head from "next/head";
import { Layout } from "~/components/app-shell";
import { Features } from "~/components/features";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>do i really need this?</title>
        <meta name="description" content="embrace conscious consumption" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout withNavbar={false}>
        <main>
          <Features />
          <p className="text-lg text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </main>
      </Layout>
    </>
  );
};

export default Home;
