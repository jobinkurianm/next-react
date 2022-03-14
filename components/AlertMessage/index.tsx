import styles from "./index.module.scss";

const AlertMessage = (props: any) => {
  const {
    hasSubmitted,
    updatePopup: { isOpen, msg },
    closePopup,
    message,
  } = props;
  if (!isOpen) return null;
  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.show : ""}`}>
        <div className={styles.backDrop} onClick={closePopup}></div>
        <div className={styles.popUpBox}>
          <span className={styles.close} onClick={closePopup}>
            <img src="close.png" alt="close" />
          </span>
          <p>{msg}</p>
        </div>
      </div>
    </>
  );
};
export default AlertMessage;
