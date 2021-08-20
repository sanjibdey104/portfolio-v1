import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <title>Sanjib Kumar Dey - Web Developer</title>
      <meta name="description" content="Personal Portfolio Website" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default CustomHead;
