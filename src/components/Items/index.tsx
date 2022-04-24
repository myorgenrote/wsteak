import { IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonImg, IonCardContent } from '@ionic/react';

interface Items {
    name: string,
    img: string
}

interface ContainerProps {
    menuItems: Items[]
}

const Items: React.FC<ContainerProps> = ({ menuItems }) => {
    return (
        <>
            <IonGrid>
                <IonRow>
                    {menuItems.map((item) => (
                        <>
                            <IonCol size="4" key={item.name}>
                                <IonCard>
                                    <IonCardHeader className='ion-text-center'>
                                        <IonImg src={`/img/${item.img}`} style={{ height: '100px' }} />
                                    </IonCardHeader>
                                    <IonCardContent class="ion-text-center">
                                        {item.name}
                                        <IonButton expand="full">+</IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </>
                    ))}

                </IonRow>
            </IonGrid>

        </>
    );
};

export default Items;
