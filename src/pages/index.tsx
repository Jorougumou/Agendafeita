import Image from "next/image";
import localFont from "next/font/local";
import Agenda from '../components/Agenda'
import Loading from '../components/Loading'
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
useEffect(() => {
  let carregador:any = document.getElementById('loader')
  carregador.style.display = 'none'
},[])
  
  return (
    <div className="w-full h-[100vh] absolute">
    <Loading id='loader' />
  
    <Agenda/>
    
    </div>
  );
}
