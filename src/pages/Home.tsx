import { IonContent, IonPage, IonButton, IonFooter } from "@ionic/react";
import { useHistory } from "react-router";
import "./Home.css";

const Home: React.FC = () => {
  const history = useHistory();
  const startQuiz = () => {
    history.push("/question");
  };
  return (
    <IonPage>
      <IonContent className="ion-text-center ion-margin-top ion-content">
        <h2>Welcome </h2>
        <h2> To </h2>
        <h2> Tech Quiz</h2>
      </IonContent>
      <IonFooter className="ion-footer ion-text-center">
        <IonButton className="startButton" onClick={startQuiz}>
          Let's begin!
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
