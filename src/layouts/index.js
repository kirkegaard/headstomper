import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/layouts/index.module.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({
  metadata = {
    title: "Headstomper",
    description: "Biggest fighting game tournament in the north",
  },
  children,
}) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} ${styles.main}`}>{children}</main>
    </>
  );
};

export default Layout;
