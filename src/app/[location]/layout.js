import { Inter } from "next/font/google";
import Image from "next/image";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EnviroScape",
  description: "A environment dashboard on single page",
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  wind,
  weather,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        className="bg-img"
        alt="backgroundImage"
        width={700}
        height={1200}
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {aqi}
            {temperature}
            {weather}
            {wind}
          </div>
        </div>
      </main>
    </div>
  );
}
