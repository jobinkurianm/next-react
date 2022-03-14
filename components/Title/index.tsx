import Head from "next/head";
import styles from "./index.module.scss";

const Title = (props: any) => {
  return props.isH1 ? (
    <h1 className={styles[props.className]}>{props.title}</h1>
  ) : (
    <h2 className={styles[props.className]}>{props.title}</h2>
  );
};
export default Title;
