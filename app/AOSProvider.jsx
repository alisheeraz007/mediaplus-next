"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const onLoad = () => AOS.refreshHard();
    window.addEventListener("load", onLoad);

    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}