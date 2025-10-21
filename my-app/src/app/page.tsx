import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Buy from "@/components/buy/Buy";
import Tokenomics from "@/components/tokenomics/Tokenomics";
import Socials from "@/components/socials/Socials";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Hero/>
      <About/>
      <Buy/>
      <Tokenomics/>
      <Socials/>
      <Footer/>
    </div>
  );
}