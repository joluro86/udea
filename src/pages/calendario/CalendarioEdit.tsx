import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { searchCalendarios } from './CalendarioApi';
import { saveOutline } from 'ionicons/icons';
import Page from '../Page';

const CalendarioEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string }>();

    const [calendarios, setCalendarios] = useState<any>([]);

    useEffect(() => {
        search();
    }, []);

    const search = () => {
        let result = searchCalendarios();
        setCalendarios(result);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Actualizar Calendario Academico</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent className='content_calendario_edit'>
                        <IonList>
                            <div className="mbsc-form-group">
                            <IonLabel position='stacked'>Fecha Inicio Matricula</IonLabel>
                            <IonInput type='date' required/>
                            <IonLabel position='stacked'>Fecha Final Matricula</IonLabel>
                            <IonInput type='date'/>
                            <IonLabel position='stacked'>Fecha Inicio Ajustes</IonLabel>
                            <IonInput type='date'/>
                            <IonLabel position='stacked'>Fecha Final Ajustes</IonLabel>
                            <IonInput type='date'/>
                            </div>
                        </IonList>
                        <IonButton color="primary" fill='clear'><IonIcon slot='icon-only' icon={saveOutline} />Guardar</IonButton>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default CalendarioEdit;