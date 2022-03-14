import styles from "./index.module.scss";
import Image from "next/image";
import Button from "../Button";
import { SelectNominee } from "../../utilities/constants";
const Card = (props: any) => {
  const {
    nominee: { photoUrL, title, isSelected, id },
    handleSelection,
    sectionID,
    hasSubmitted,
  } = props;
  return (
    <>
      <div
        className={`${styles.Card} ${isSelected ? styles.activeItem : ""} ${
          hasSubmitted ? styles.disabledItem : ""
        }`}
        onClick={() =>
          handleSelection({ ...props.nominee, isSelected: true }, sectionID)
        }
      >
        <p>{title}</p>
        <div className={styles.imageWrap}>
          <Image src={photoUrL} layout="fill" alt={title} />
        </div>
        <Button
          hasSubmitted={hasSubmitted}
          className={"btnCard"}
          text={SelectNominee}
        />
      </div>
    </>
  );
};
export default Card;
