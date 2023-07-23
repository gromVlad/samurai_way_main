import React, { useEffect, useState } from "react";
import s from "./news.module.css";
import { Preloader } from "../preloader/preloader";


export function News() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <p>in work</p>
      )}
    </div>
  );
}
