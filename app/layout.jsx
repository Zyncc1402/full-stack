import "@styles/globals.css";
import Navbar from "@components/navbar/Navbar";
import Provider from "@components/provider";
import { CartContext } from "@context/CartContext";

export const metadata = {
  title: "Zync Market",
  description: "E - Commerce Website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
