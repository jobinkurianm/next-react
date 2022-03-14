import Head from "next/head";
import styles from "./index.module.scss";

const Button = (props: any) => {
  const {
    hasSubmitted,
    className,
    currentSelections,
    text,
    isAlignRight,
    clickHandler,
  } = props;
  return (
    <div className={isAlignRight ? styles.textRight : ""}>
      <button
        className={`${styles[className] ? styles[className] : ""} ${
          hasSubmitted ? styles.disabledButton : ""
        }`}
        onClick={clickHandler ? clickHandler : () => false}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
