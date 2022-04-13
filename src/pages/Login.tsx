import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    //validate inputs code not shown
    const loginData = {
      email: email,
      password: password,
    };

    /* const api = axios.create({
      baseURL: `https://reqres.in/api`,
    });

    api.post("/login", loginData)
      .then((res) => {
        history.push("/dashboard/" + email);
      })
      .catch((error) => {
        setMessage("Auth failure! Please create an account");
        setIserror(true);
      }); */

      console.log(loginData);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding container">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonText>
                <h1>Waroeng Steak and Shake</h1>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
