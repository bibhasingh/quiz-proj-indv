import React from "react";
import { useState } from "react";

import { useHistory } from "react-router";
import "./QuizCard.css";

import {
  IonCard,
  IonItem,
  IonLabel,
  IonCardContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonContent,
  IonPage,
  useIonToast,
} from "@ionic/react";

function QuizCard(props: any) {
  const [alert] = useIonToast();
  const history = useHistory();
  const [style1, setStyle1] = useState("beforeAnswer commonStyle");
  const [style2, setStyle2] = useState("beforeAnswer commonStyle");
  const [style3, setStyle3] = useState("beforeAnswer commonStyle");
  const [style4, setStyle4] = useState("beforeAnswer commonStyle");
  const [questionSet, questionSetMod] = useState(props.questionSet[0]);
  const [counter, setCounter] = useState(0);
  const [ans, setAns] = useState(true);
  const [score, setScore] = useState(props.score);

  const checkAnswerA = () => {
    setAns(false);
    if (ans) {
      if (questionSet.option1 === questionSet.answer) {
        setStyle1("correctAnswer commonStyle");
        setScore(score + 10);
        alert({
          message: "That's Correct",
          duration: 1500,
          position: "middle",
        });
      } else {
        setStyle1("wrongAnswer commonStyle");
        alert({ message: "That's wrong", duration: 1500, position: "middle" });
      }
    }
  };
  const checkAnswerB = () => {
    setAns(false);
    if (ans) {
      if (questionSet.option2 === questionSet.answer) {
        setStyle2("correctAnswer commonStyle");
        setScore(score + 10);
        alert({
          message: "That's Correct",
          duration: 1500,
          position: "middle",
        });
      } else {
        setStyle2("wrongAnswer commonStyle");
        alert({ message: "That's wrong", duration: 1500, position: "middle" });
      }
    }
  };
  const checkAnswerC = () => {
    setAns(false);
    if (ans) {
      if (questionSet.option3 === questionSet.answer) {
        setStyle3("correctAnswer commonStyle");
        setScore(score + 10);
        alert({
          message: "That's Correct",
          duration: 1500,
          position: "middle",
        });
      } else {
        setStyle3("wrongAnswer commonStyle");
        alert({ message: "That's wrong", duration: 1500, position: "middle" });
      }
    }
  };
  const checkAnswerD = () => {
    setAns(false);
    if (ans) {
      if (questionSet.option4 === questionSet.answer) {
        setStyle4("correctAnswer commonStyle");
        setScore(score + 10);
        alert({
          message: "That's Correct",
          duration: 1500,
          position: "middle",
        });
      } else {
        setStyle4("wrongAnswer commonStyle");
        alert({ message: "That's wrong", duration: 1500, position: "middle" });
      }
    }
  };
  const preQues = () => {
    setCounter(counter - 1);
    let i = counter - 1;
    setStyle1("beforeAnswer commonStyle");
    setStyle2("beforeAnswer commonStyle");
    setStyle3("beforeAnswer commonStyle");
    setStyle4("beforeAnswer commonStyle");
    setAns(true);
    if (i > 0) {
      questionSetMod(props.questionSet[i]);
    } else {
      history.push("/home");
    }
  };
  const nextQues = () => {
    let j = counter + 1;

    if (props.questionSet.length > j) {
      setCounter(counter + 1);
      setStyle1("beforeAnswer commonStyle");
      setStyle2("beforeAnswer commonStyle");
      setStyle3("beforeAnswer commonStyle");
      setStyle4("beforeAnswer commonStyle");
      setAns(true);
      questionSetMod(props.questionSet[j]);
    } else {
      alert({
        message: "There is no more question",
        duration: 1500,
        position: "middle",
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Score : {score}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="quizBody">
        <IonItem>
          <IonLabel>{questionSet.question}</IonLabel>
        </IonItem>
        {/* <IonCard>
          <IonCardContent>{questionSet.code}</IonCardContent>
        </IonCard> */}
        <IonButton className={style1} onClick={checkAnswerA}>
          {questionSet.option1}
        </IonButton>
        <IonButton className={style2} onClick={checkAnswerB}>
          {questionSet.option2}
        </IonButton>
        <IonButton className={style3} onClick={checkAnswerC}>
          {questionSet.option3}
        </IonButton>
        <IonButton className={style4} onClick={checkAnswerD}>
          {questionSet.option4}
        </IonButton>
        <IonButton href={questionSet.moreInfo} className="infoStyle">
          MoreInfo
        </IonButton>
      </IonContent>
      <IonFooter className="ion-footer navStyle">
        <IonButton onClick={preQues}>Previous</IonButton>
        <IonButton onClick={nextQues}>Next</IonButton>
      </IonFooter>
    </IonPage>
  );
}

export default QuizCard;
