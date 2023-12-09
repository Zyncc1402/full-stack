import "@styles/globals.css";
import Navbar from '@components/navbar/Navbar'
import Provider from '@components/provider'

export const metadata = {
  title: "E-Commerce Website",
  description: "first time doing this",
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
