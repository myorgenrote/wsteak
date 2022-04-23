import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonItem, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonInput, IonButton, IonText, IonRouterOutlet, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

import { useState } from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import Dashboard from './../Dashboard/index';
import Register from './../Register/index';
import MenuTab from '../../components/Navigation/MenuTab';
import Items from '../../components/Items';

const Menu: React.FC = () => {

    const foods = [
        {
            name: 'Beef Slice',
            img: 'Beef_Slice.png'
        },
        {
            name: 'Beef Sambal Korek',
            img: 'BEEF_SAMBAL_KOREK.png'
        },
        {
            name: 'Beef Sozis',
            img: 'Beef_Sozis.png'
        },
        {
            name: 'Chicken Leg',
            img: 'Chicken_Leg.png'
        },
        {
            name: 'Chicken Sambal Korek',
            img: 'CHICKEN_SAMBAL_KOREK.png'
        },
        {
            name: 'Beef Slice',
            img: 'DORY_SAMBAL_KOREK_2.png'
        },
        {
            name: 'Kulit Crispy',
            img: 'kulit_crispy.png'
        },
        {
            name: 'Sirloin Double',
            img: 'sirloin_double.png'
        },
        {
            name: 'Steak Waroeng',
            img: 'Steak_Waroeng.png'
        },
        {
            name: 'Tenderloin Eggstra',
            img: 'Tenderloin_Eggstra.png'
        },
    ]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
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
                        <IonCol className="ion-text-center">
                            <MenuTab />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <br />
                            <br />
                            <br />
                            <br />
                            Selamat Datang! <br />
                            Silahkan pilih menu
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Menu;
