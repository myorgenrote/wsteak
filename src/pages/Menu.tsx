import {
  IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { useState } from "react";

  import {wifi, pin, wine, warning, walk} from "ionicons/icons"
  
  const Menu: React.FC = () => {
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="home" />
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Menu</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia delectus corrupti? Tenetur ut architecto atque hic odio quasi
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol size="6">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Steak</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    IDR. 30.000
                    <IonButton size="small" color="warning" expand="full">+</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Ramen</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      IDR. 45.000
                    <IonButton size="small" color="warning" expand="full">+</IonButton>
                    </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>BoBa</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    IDR. 23.000
                    <IonButton size="small" color="warning" expand="full">+</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard>
                    <IonCardHeader>
                      <IonCardTitle>Menu</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      IDR. 14.000
                    <IonButton size="small" color="warning" expand="full">+</IonButton>
                    </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Menu;
  