import Link from "next/link";
import React from "react";

import { useRouter } from "next/router";

type Props = {
  width: number;
  setGifsFinded: any;
};

const LogoComponent = ({ width, setGifsFinded }: Props) => {
  const router = useRouter();

  return (
    <picture
      onClick={() => {
        setGifsFinded(undefined);
        router.push("/");
      }}
    >
      <img
        src="/images/Giphy-logo.png"
        width={width}
        style={{ cursor: "pointer" }}
      />
    </picture>
  );
};

export default LogoComponent;
