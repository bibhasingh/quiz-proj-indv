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
      question: " CSS stands for ______",
      option1: "Color Style Sheets",
      option2: "Cascade Sheets Style",
      option3: "Cascade Style Sheet",
      option4: "Cascading Style Sheets",
      moreInfo: "https://www.w3schools.com/html/html_css.asp",
      answer: "Cascade Style Sheet",
    },
    {
      question: " Which tag is used to embed CSS in HTML document?",
      option1: "<CSS>",
      option2: "<!DOCTYPE html>",
      option3: "<script>",
      option4: "<style>",
      moreInfo: "https://www.w3schools.com/css/css_intro.asp",
      answer: "<style>",
    },
    {
      question: " The <link> tag goes inside",
      option1: "the title section",
      option2: "the head section",
      option3: "the body section",
      option4: "None of the above",
      moreInfo: "https://www.w3schools.com/css/css_howto.asp",
      answer: "the head section",
    },
    {
      question: " What CSS define in HTML ?",
      option1: "How to send HTML elements",
      option2: "How to save HTML elements",
      option3: "How to display HTML elements",
      option4: "How to made HTML elements",
      moreInfo: "https://www.w3schools.com/css/css_howto.asp",
      answer: "How to display HTML elements",
    },
  ];

  const javaScriptQuestionSet = [
    {
      question: "Javascript is a _____ language.",
      option1: "Programming",
      option2: "Application",
      option3: "Scripting",
      option4: "None of the above",
      moreInfo: "https://www.w3schools.com/js/js_intro.asp",
      answer: "Scripting",
    },
    {
      question: "JavaScript is a _____ Side Scripting Language.",
      option1: "Server",
      option2: "Browser",
      option3: "ISP",
      option4: "None of the above",
      moreInfo: "https://www.w3schools.com/js/js_whereto.asp",
      answer: "Browser",
    },
    {
      question: "Which of the following purpose, JavaScript is designed for ?",
      option1: "To Execute Query Related to DB on Server",
      option2: "To Style HTML Pages",
      option3: "To Perform Server Side Scripting Operation",
      option4: "To add interactivity to HTML Pages.",
      moreInfo: "https://www.w3schools.com/js/js_whereto.asp",
      answer: "To add interactivity to HTML Pages.",
    },
    {
      question: "JavaScript can be written",
      option1: "directly on the Server Script",
      option2: "directly into HTML pages",
      option3: "All of the above",
      option4: "None of the above",
      moreInfo: "https://www.w3schools.com/js/js_whereto.asp",
      answer: "All of the above.",
    },
  ];

  const reactQuestionSet = [
    {
      question: "React is mainly used for building ___.",
      option1: "Database",
      option2: "Connectivity",
      option3: "User interface",
      option4: "Design Platform",
      moreInfo: "https://www.w3schools.com/react/react_intro.asp",
      answer: "User interface",
    },
    {
      question: "The lifecycle methods are mainly used for ___.",
      option1: "keeping track of event history",
      option2: "enhancing components",
      option3: "freeing up resources",
      option4: "none of the above",
      moreInfo: "https://www.w3schools.com/react/react_components.asp",
      answer: "keeping track of event history",
    },
    {
      question:
        "___ can be done while multiple elements need to be returned from a component.",
      option1: "Abstraction",
      option2: "Packing",
      option3: "Insulation",
      option4: "Wrapping",
      moreInfo: "https://www.w3schools.com/react/react_components.asp",
      answer: "Wrapping",
    },
    {
      question:
        "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
      option1: "<h1>{fetch()}</h1>",
      option2: "<h1>%{fetch()}</h1>",
      option3: "<h1>{fetch}</h1>",
      option4: "<h1>:{fetch}</h1>",
      moreInfo: "https://www.w3schools.com/react/react_events.asp",
      answer: "<h1>{fetch()}</h1>",
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
