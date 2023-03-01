import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import QuizCard from "../components/QuizCard";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Score : 00</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <QuizCard
          question={"Identify the below code"}
          code={" <h1>Header1</h1>"}
          option1={"HTML"}
          option2={"CSS"}
          option3={"JavaScript"}
          option4={"React"}
          answer={"HTML"}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
