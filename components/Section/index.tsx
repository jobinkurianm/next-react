import styles from "./index.module.scss";
import { ICard } from "../../classes/Nominee";
import Title from "../../components/Title";
import Card from "../../components/Card";
const Section = (props: any) => {
  const {
    categories: { items, title },
    handleSelection,
    hasSubmitted,
    sectionID,
  } = props;

  return (
    <>
      <div className={hasSubmitted ? styles.disabledRow : ""}>
        <Title title={title} className={"sectionTitle"}></Title>
        <div className={`${styles.row}`}>
          {items.map((data: ICard, id: number) => {
            return (
              <Card
                hasSubmitted={hasSubmitted}
                nominee={data}
                handleSelection={handleSelection}
                key={id}
                sectionID={sectionID}
                id={data?.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Section;
