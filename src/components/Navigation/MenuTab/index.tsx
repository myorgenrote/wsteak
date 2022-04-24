import { IonButton } from '@ionic/react';

interface ContainerProps {
    active?: string
}

const MenuTab: React.FC<ContainerProps> = ({ active }) => {
    return (
        <>
            <IonButton href="/foods" color={active === "foods" ? "warning" : "dark"}>Makanan</IonButton>
            <IonButton href="/drinks" color={active === "drinks" ? "warning" : "dark"}>Minuman</IonButton>
            <IonButton href="/orders" color={active === "orders" ? "warning" : "dark"}>Pesanan Saya</IonButton>
        </>
    );
};

export default MenuTab;
