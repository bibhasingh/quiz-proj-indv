import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import QuizCard from "../components/QuizCard";

function Question() {
  const questionSet = [
    {
      question: "Identify the below code",
      code: " <h1>Header1</h1>",
      option1: "HTML",
      option2: "CSS",
      option3: "JavaScript",
      option4: "React",
      answer: "HTML",
    },
    {
      question: "Find error in below code",
      code: " <h1>Header1<h>",
      option1: "<h1>",
      option2: "Header1",
      option3: "<h>",
      option4: "No Error",
      answer: "<h>",
    },
  ];

  return (
    <>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <QuizCard questionSet={questionSet} score={0} />
      </IonContent>
    </>
  );
}

export default Question;
