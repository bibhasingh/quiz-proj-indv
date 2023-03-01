import React from "react";
import { useState } from "react";
import "./QuizCard.css";
import {
  IonCard,
  IonItem,
  IonLabel,
  IonCardContent,
  IonButton,
  useIonAlert,
} from "@ionic/react";

function QuizCard(props: any) {
  const [alert] = useIonAlert();
  const [style1, setStyle1] = useState("beforeAnswer");
  const [style2, setStyle2] = useState("beforeAnswer");
  const [style3, setStyle3] = useState("beforeAnswer");
  const [style4, setStyle4] = useState("beforeAnswer");

  const checkAnswerA = () => {
    if (props.option1 === props.answer) {
      setStyle1("correctAnswer");
      alert({ message: "That's Correct", buttons: ["ok"] });
    } else {
      setStyle1("wrongAnswer");
      alert({ message: "That's wrong", buttons: ["ok"] });
    }
  };
  const checkAnswerB = () => {
    if (props.option2 === props.answer) {
      setStyle2("correctAnswer");
      alert({ message: "That's Correct", buttons: ["ok"] });
    } else {
      setStyle2("wrongAnswer");
      alert({ message: "That's wrong", buttons: ["ok"] });
    }
  };
  const checkAnswerC = () => {
    if (props.option3 === props.answer) {
      setStyle3("correctAnswer");
      alert({ message: "That's Correct", buttons: ["ok"] });
    } else {
      setStyle3("wrongAnswer");
      alert({ message: "That's wrong", buttons: ["ok"] });
    }
  };
  const checkAnswerD = () => {
    if (props.option4 === props.answer) {
      setStyle4("correctAnswer");
      alert({ message: "That's Correct", buttons: ["ok"] });
    } else {
      setStyle4("wrongAnswer");
      alert({ message: "That's wrong", buttons: ["ok"] });
    }
  };
  return (
    <>
      <IonItem>
        <IonLabel>{props.question}</IonLabel>
      </IonItem>
      <IonCard>
        <IonCardContent>{props.code}</IonCardContent>
      </IonCard>
      <IonButton className={style1} onClick={checkAnswerA}>
        {props.option1}
      </IonButton>
      <IonButton className={style2} onClick={checkAnswerB}>
        {props.option2}
      </IonButton>
      <IonButton className={style3} onClick={checkAnswerC}>
        {props.option3}
      </IonButton>
      <IonButton className={style4} onClick={checkAnswerD}>
        {props.option4}
      </IonButton>
      <IonButton>MoreInfo</IonButton>
      <IonButton>Next</IonButton>
    </>
  );
}

export default QuizCard;
