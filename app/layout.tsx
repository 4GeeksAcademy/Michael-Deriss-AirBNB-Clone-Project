import "./globals.css";
import NavBarAndSearchBar from "../components/NavBarAndSearchBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <NavBarAndSearchBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
