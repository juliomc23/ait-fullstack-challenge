import React, { useState } from "react";

import styles from "./styles.module.css";

type Props = {
  search: React.FormEventHandler;
  handleChange: React.ChangeEventHandler;
};

const SearchBarComponent = ({ search, handleChange }: Props) => {
  return (
    <form onSubmit={search}>
      <input
        type={"text"}
        placeholder="Introduce your search..."
        className={styles.searchBarDiv}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBarComponent;
