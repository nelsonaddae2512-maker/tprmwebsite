import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Vendors(){return(<>
  <Head><title>For Vendors | Truvern</title></Head>
  <Nav/>
  <main className="mx-auto max-w-6xl px-4 py-16">
    <h1 className="text-4xl font-bold text-indigo-700">For Vendors</h1>
    <p className="mt-4 text-gray-700">Respond fast with guided questions and evidence uploads.</p>
  </main>
  <Footer/>
</>);}
