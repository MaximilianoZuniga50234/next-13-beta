import Navigation from "./components/Navigation";
import "../styles/globals.css";
import Font from "./font";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={Font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
