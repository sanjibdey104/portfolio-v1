import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <title>Sanjib Kumar Dey - Web Developer</title>
      <meta name="description" content="Personal Portfolio Website" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default CustomHead;
