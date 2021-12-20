import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import MusicList from "../components/Music/MusicList";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jagsy</title>
        <meta name="description" content="Jagsy home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <main className="container mx-auto px-4">
        <MusicList />
      </main>
    </div>
  );
};

export default Home;
