import {
  IonContent,
  IonPage,
  IonButton,
  IonFooter,
  IonCard,
} from "@ionic/react";
import { useHistory } from "react-router";
import "./Home.css";

const Home: React.FC = () => {
  const history = useHistory();
  const startHtmlQuiz = () => {
    history.push("/htmlQuestion");
  };
  const startCssQuiz = () => {
    history.push("/CssQuestion");
  };
  const startJavaScriptQuiz = () => {
    history.push("/JavaScriptQuestion");
  };
  const startReactQuiz = () => {
    history.push("/ReactQuestion");
  };
  return (
    <IonPage>
      <IonContent className="ion-text-center ion-content">
        <div className="heading">
          <h2>Welcome </h2>
          <h2> To </h2>
          <h2> Tech Quiz</h2>
        </div>
        <IonButton className="startQuiz" onClick={startHtmlQuiz}>
          HTML
        </IonButton>
        <IonButton className="startQuiz" onClick={startCssQuiz}>
          CSS
        </IonButton>
        <IonButton className="startQuiz" onClick={startJavaScriptQuiz}>
          JavaScript
        </IonButton>
        <IonButton className="startQuiz" onClick={startReactQuiz}>
          React
        </IonButton>
      </IonContent>
      <IonFooter className="ion-footer ion-text-center">
        <IonCard className="footerButton">Check your knowledge !!</IonCard>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
