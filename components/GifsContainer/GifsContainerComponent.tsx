import React from "react";
import { Gif, ServerResponse } from "../../interfaces/Gif";
import GifCardComponent from "../GifCard/GifCardComponent";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

type Props = {
  data?: Gif[];
};

const GifsContainerComponent = ({ data }: Props) => {
  const router = useRouter();

  return (
    <div
      className={
        router.pathname === "/gif/[gifID]"
          ? styles.gifRecomended
          : styles.gifContainer
      }
    >
      {data?.map((gif, index) => {
        return (
          <GifCardComponent
            gifID={gif.id}
            gifURL={gif.images.original.url}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default GifsContainerComponent;
