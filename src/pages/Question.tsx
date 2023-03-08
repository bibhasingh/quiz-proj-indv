import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import QuizCard from "../components/QuizCard";

function Question(props: any) {
  const htmlQuestionSet = [
    {
      question: "What does HTML stand for?",
      option1: "Hyper Text Markup Language",
      option2: "Hot Mail",
      option3: "How to Make Lasagna",
      option4: "None of the above",
      moreInfo: "https://www.w3schools.com/html/",
      answer: "Hyper Text Markup Language",
    },
    {
      question: "How many tags are in a regular element?",
      option1: "3",
      option2: "2",
      option3: "1",
      option4: "4",
      moreInfo: "https://www.w3schools.com/html/html_elements.asp",
      answer: "2",
    },
    {
      question: "< br  / > What type of tag is this?",
      option1: "Break tag",
      option2: "A broken one",
      option3: "An opening tag",
      option4: "A closing tag",
      moreInfo: "https://www.w3schools.com/html/html_elements.asp",
      answer: "Break tag",
    },
    {
      question: "Find error: <h1>Header1<h1>",
      option1: "<h>",
      option2: "Header1",
      option3: "</h>",
      option4: "No Error",
      answer: "</h>",
    },
  ];
  const cssQuestionSet = [
    {
      question: "What does HTML stand for?",
      option1: "Hyper Text Markup Language",
      option2: "Hot Mail",
      option3: "How to Make Lasagna",
      option4: "None of the above",
      moreInfo: "https://www.w3schools.com/html/",
      answer: "Hyper Text Markup Language",
    },
  ];

  const javaScriptQuestionSet = [
    {
      question: "What does HTML stand for?",
      option1: "Hyper Text Markup Language",
      option2: "Hot Mail",
      option3: "How to Make Lasagna",
      option4: "None of the above",
      moreInfo: "https://www.w3schools.com/html/",
      answer: "Hyper Text Markup Language",
    },
  ];

  const reactQuestionSet = [
    {
      question: "What does HTML stand for?",
      option1: "Hyper Text Markup Language",
      option2: "Hot Mail",
      option3: "How to Make Lasagna",
      option4: "None of the above",
      moreInfo: "https://www.w3schools.com/html/",
      answer: "Hyper Text Markup Language",
    },
  ];

  let questionSet = [];
  if (props.questionSet === "HtmlQuestionSet") {
    for (let i = 0; i < htmlQuestionSet.length; i++) {
      questionSet.push(htmlQuestionSet[i]);
    }
  } else if (props.questionSet === "CssQuestionSet") {
    for (let i = 0; i < cssQuestionSet.length; i++) {
      questionSet.push(cssQuestionSet[i]);
    }
  } else if (props.questionSet === "JavaScriptQuestionSet") {
    for (let i = 0; i < javaScriptQuestionSet.length; i++) {
      questionSet.push(javaScriptQuestionSet[i]);
    }
  } else {
    for (let i = 0; i < reactQuestionSet.length; i++) {
      questionSet.push(reactQuestionSet[i]);
    }
  }

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
