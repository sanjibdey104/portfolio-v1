import dynamic from "next/dynamic";

export const clientOnly = (importFn) => dynamic(importFn, { ssr: false });
