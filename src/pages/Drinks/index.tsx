import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonText } from '@ionic/react';

import MenuTab from '../../components/Navigation/MenuTab';
import Items from '../../components/Items';

const Drinks: React.FC = () => {

    const drinks = [
        {
            name: 'Dcafe Latte',
            img: 'dcafe_latte.png'
        },
        {
            name: 'Dcaramel Latte',
            img: 'dcaramel_latte-2.png'
        },
        {
            name: 'Dfreshlime',
            img: 'dfreshlime.png'
        },
        {
            name: 'Dkopi Susu Gula Aren',
            img: 'dkopi_susu_gula_aren.png'
        },
        {
            name: 'Dlychee Tea',
            img: 'dlychee tea.png'
        },
        {
            name: 'Dmilkshake Chocolate',
            img: 'dMilkshake_chocolate.png'
        },
        {
            name: 'Dmilkshake Coklat',
            img: 'dMILKSHAKE_COKLAT.png'
        },
        {
            name: 'Dmilkshake Mocca',
            img: 'dmilkshake_mocca.png'
        }
    ]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Minuman</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding container">
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonText>
                                <h1>Menu Minuman</h1>
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <MenuTab active="drinks" />
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <Items menuItems={drinks} />
            </IonContent>
        </IonPage>
    );
};

export default Drinks;
