import React from "react";

type Props = {
  width: number;
};

const LogoComponent = ({ width }: Props) => {
  return (
    <picture>
      <img src="/images/Giphy-logo.png" width={width} />
    </picture>
  );
};

export default LogoComponent;
