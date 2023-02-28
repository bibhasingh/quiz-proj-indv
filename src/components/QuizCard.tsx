import React from "react";
import {
  IonCard,
  IonItem,
  IonLabel,
  IonCardContent,
  IonButton,
} from "@ionic/react";

function QuizCard() {
  let code = " <h1>Header1</h1>";
  return (
    <>
      <IonItem>
        <IonLabel>Identify the below code</IonLabel>
      </IonItem>
      <IonCard>
        <IonCardContent>{code}</IonCardContent>
      </IonCard>
      <IonButton>HTML</IonButton>
      <IonButton>CSS</IonButton>
      <IonButton>JavaScript</IonButton>
      <IonButton>ReactJs</IonButton>
      <IonButton>Moreinfo</IonButton>
      <IonButton>Next</IonButton>
    </>
  );
}

export default QuizCard;
