import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonText } from '@ionic/react';

import MenuTab from '../../components/Navigation/MenuTab';
import Items from '../../components/Items';

const Orders: React.FC = () => {

    const orders = [
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
                    <IonTitle>Pesanan</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding container">
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonText>
                                <h1>Pesanan Saya</h1>
                            </IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <MenuTab active="orders" />
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {/* <Items menuItems={orders} /> */}
            </IonContent>
        </IonPage>
    );
};

export default Orders;
