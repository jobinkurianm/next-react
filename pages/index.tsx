import { useEffect, useState } from "react";
import { NextPage } from "next/types";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { myNominees } from "../utilities/constants";
import { ICard, ICardProps, IPopup } from "../classes/Nominee";
import Title from "../components/Title";
import {
  SubmitBallot,
  mainTitle,
  API,
  SucessMsg,
  alreadySubmitted,
} from "../utilities/constants";
import Button from "../components/Button";
import AlertMessage from "../components/AlertMessage";

const Home: NextPage = (props: any) => {
  const { response } = props;
  const [modifiedList, setSelectedItems] = useState(
    response?.items ? response?.items : []
  );
  const [currentSelections, setCurrentSelections] = useState<any>({});
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [updatePopup, setPopup] = useState<IPopup>({
    isOpen: false,
    msg: "",
  });
  const handleSelection = (item: ICard, id: string) => {
    if (hasSubmitted) {
      openPopUpMessage(alreadySubmitted);
      return;
    }

    setCurrentSelections((prevProps: any) => {
      const itemSelected = { ...prevProps };
      itemSelected[id] = item;
      return itemSelected;
    });
  };

  const submitSelection = () => {
    if (hasSubmitted) {
      openPopUpMessage(alreadySubmitted);
      return;
    }
    localStorage.setItem(myNominees, JSON.stringify(currentSelections));
    if (Object.keys(currentSelections).length !== 0) {
      setCurrentSelections(currentSelections);
      setHasSubmitted(true);
      openPopUpMessage(SucessMsg);
    }
  };

  const openPopUpMessage = (message: string) => {
    setPopup((prevProps: IPopup) => {
      return { ...prevProps, isOpen: true, msg: message };
    });
  };
  const closePopUp = () => {
    setPopup((prevProps: IPopup) => {
      return { ...prevProps, isOpen: false, msg: "" };
    });
  };

  const updateSelection = () => {
    console.log(currentSelections);
    let updatedArr = [...response?.items];
    let newArr = updatedArr.map((element: ICardProps) => {
      const obj = { ...element };
      const matched = currentSelections[obj.id];
      if (matched) {
        obj.isSelected = true;
        let modifiedArr = obj.items.map((item: ICard) => {
          return item.id === matched.id ? matched : item;
        });
        obj.items = modifiedArr;
      }
      return obj;
    });
    setSelectedItems(newArr);
  };

  useEffect(() => {
    updateSelection();
  }, [currentSelections, hasSubmitted]);

  useEffect(() => {
    const submittedData = JSON.parse(localStorage?.getItem(myNominees) || "{}");
    if (Object.keys(submittedData).length !== 0) {
      setHasSubmitted(true);
      setCurrentSelections(submittedData);
    }
  }, []);

  return (
    <Layout>
      <AlertMessage updatePopup={updatePopup} closePopup={closePopUp} />
      <Title title={mainTitle} isH1={true} className={"pageHead"}></Title>
      {modifiedList?.map((list: ICardProps, index: number) => {
        return (
          <Section
            hasSubmitted={hasSubmitted}
            key={index}
            sectionID={list?.id}
            handleSelection={handleSelection}
            categories={list}
          />
        );
      })}
      <Button
        hasSubmitted={hasSubmitted}
        className={"btnSubmit"}
        isAlignRight={true}
        text={SubmitBallot}
        currentSelections={currentSelections}
        clickHandler={submitSelection}
      />
    </Layout>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const request = await fetch(API);
  const response = await request.json();

  return {
    props: { response },
  };
}
