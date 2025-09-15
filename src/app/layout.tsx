import Footer from "@/Page/footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/globalContext/store";
import { Navbar, Sidebar, Header as MainHeader,ThemeProvider} from "@/components/index";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JeevanSetu",
  description: "Bringing the clinic to your home.",
  icons:{
    icon:undefined
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen  dark:text-white  antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider>
          <header >
            <div className="md:hidden">
              <Sidebar />
            </div>
            
            <MainHeader  />


          </header>
          <Navbar className="hidden md:flex justify-center mt-3 sticky top-5 transition-all ease-in-out " />




          
            <main className="dark:bg-gray-900">{children}</main>
                                                                           
        
          <Footer />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
