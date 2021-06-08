import React from 'react';
import Head from 'next/head';

const CustomHead = () => {
    return (
        <Head>
            <title>Portfolio</title>
            <meta name="description" content="Personal Portfolio Website" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
    )
}

export default CustomHead;
