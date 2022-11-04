import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

type Props = {
  gifID?: string;
  gifURL?: string;
};

const GifCardComponent = ({ gifID, gifURL }: Props) => {
  const router = useRouter();

  return (
    <div
      className={
        router.pathname === "/gif/[gifID]"
          ? styles.gifRecomendedCard
          : styles.gifCard
      }
    >
      <Link href={`/gif/${gifID}`}>
        <picture>
          <img
            src={gifURL}
            className={
              router.pathname === "/gif/[gifID]"
                ? styles.gifRecomendedIMG
                : styles.gifIMG
            }
          />
        </picture>
      </Link>
    </div>
  );
};

export default GifCardComponent;
