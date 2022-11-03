import React, { useState } from "react";
import toaster, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

import { User } from "../../interfaces/User";
import { loginUser } from "../../services/loginUser";

import styles from "./styles.module.css";

const FormComponent = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await loginUser(user);

    if (!response.ok) {
      toaster.error(response.msg);
    }

    if (response.ok) {
      router.push("/");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form className={styles.form} onSubmit={login}>
        <div className={styles.form__group}>
          <input
            name="email"
            type="email"
            className={`${styles.form__field} ${styles.w_100}`}
            placeholder="Introduce your email"
            onChange={handleChange}
          />
          <label htmlFor="name" className={styles.form__label}>
            {" "}
            Email{" "}
          </label>
        </div>

        <div className={styles.form__group}>
          <input
            name="password"
            type="password"
            className={`${styles.form__field} ${styles.w_100}`}
            placeholder="Introduce your password"
            onChange={handleChange}
          />
          <label htmlFor="name" className={styles.form__label}>
            {" "}
            Password{" "}
          </label>
        </div>

        <button className={styles.loginButton}>
          Sign up
          <div className={styles.arrow_wrapper}>
            <div className={styles.arrow}></div>
          </div>
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default FormComponent;
