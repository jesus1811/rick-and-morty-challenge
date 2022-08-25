import React from "react";
import Head from "next/head";
import styles from "./layout.module.scss";
interface Prop {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ title, description, children }: Prop) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;
