import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Gif, ServerResponse } from "../../interfaces/Gif";
import GifCardComponent from "../../components/GifCard/GifCardComponent";
import { GetStaticProps } from "next";
import GifsContainerComponent from "../../components/GifsContainer/GifsContainerComponent";

import styles from "./styles.module.css";
import Link from "next/link";

const GifPage = () => {
  const router = useRouter();

  const gifID = router.query.gifID;

  const [serverResponseSingleGif, setServerResponseSingleGif] = useState<{
    data: Gif;
  }>();

  const [serverResponseGifs, setServerResponseGifs] = useState<Gif[]>();

  const getSingleGif = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/${gifID}?api_key=DrwzSwYL7xrAfh3lMtMh4HRPhoVuEC16`
    );

    const data = await response.json();

    setServerResponseSingleGif(data);
  };

  const getGifs = async () => {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=DrwzSwYL7xrAfh3lMtMh4HRPhoVuEC16&limit=25&rating=g"
    );

    const data = await response.json();
    console.log();

    setServerResponseGifs(data.data);
  };

  useEffect(() => {
    if (router.isReady) {
      getSingleGif();
      getGifs();
    }
  }, [router.isReady, gifID]);

  return (
    <section className={styles.singleGifSection}>
      <Link href="/" className={styles.goHome}>
        Go Back
      </Link>
      <div className={styles.singleGifContainer}>
        <GifCardComponent
          gifID={serverResponseSingleGif?.data.id}
          gifURL={serverResponseSingleGif?.data.images.original.url}
        />

        <div className={styles.separator}></div>

        <>
          <h3>Recomended Gifs</h3>
          <GifsContainerComponent data={serverResponseGifs} />
        </>
      </div>
    </section>
  );
};

export default GifPage;
