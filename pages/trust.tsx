import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Trust(){return(<>
  <Head><title>Trust Center | Truvern</title></Head>
  <Nav/>
  <main className="mx-auto max-w-6xl px-4 py-16">
    <h1 className="text-4xl font-bold text-indigo-700">Trust Center</h1>
    <p className="mt-4 text-gray-700">Security, compliance, and availability.</p>
  </main>
  <Footer/>
</>);}
