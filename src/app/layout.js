import { Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "./provaider";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import Menu from "@/components/Menu/Menu";


const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Gonnago",
  description: "Welcome to Gonnago, your go-to destination for discovering the finest places and events across Armenia. Whether you're a local looking for hidden gems or a traveler seeking unforgettable experiences, our website is your gateway to the pulse of Armenian culture and entertainment.",
  siteName: 'Gonnago',
  openGraph: {
    images: '/favicon.ico',
  },
  robots: "all",
  author: "author",
  openGraph : {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navigation />
          <Menu />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
