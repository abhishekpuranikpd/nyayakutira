import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/faci";
import About from "./components/about";
import NavBar from "./components/nav";
import Footer from "../app/components/footer"
import Dashboard from "../app/components/blog"


export default function Home() {
  return (
    <div className="bg-gray-900">
    
      <Hero />
      <About />
      <Services />
      {/* <Dashboard/> */}
      <Footer/>

      {/* <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg> */}
    </div>
  );
}
