import React, { useEffect, useState } from "react";
import { Gif, ServerResponse } from "../../interfaces/Gif";
import GifCardComponent from "../GifCard/GifCardComponent";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

type Props = {
  data?: Gif[];
  gifsFinded?: ServerResponse;
};

const GifsContainerComponent = ({ data, gifsFinded }: Props) => {
  const router = useRouter();

  return (
    <>
      {gifsFinded === undefined ? (
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
      ) : (
        <div className={styles.gifFinded}>
          {gifsFinded.data?.map((gifFinded, index) => {
            return (
              <GifCardComponent
                gifID={gifFinded.id}
                gifURL={gifFinded.images.original.url}
                key={index}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default GifsContainerComponent;
