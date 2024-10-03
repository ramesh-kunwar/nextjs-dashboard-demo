import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "@/app/ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

{
  /* <html lang='en' > */
}
{
  /*     <body className={inter.className}> */
}
{
  /*       <Providers> */
}
{
  /*         <Navbar /> */
}
{
  /*         <main className='container py-10'>{children}</main> */
}
{
  /*       </Providers> */
}
{
  /*     </body> */
}
{
  /*   </html> */
}
