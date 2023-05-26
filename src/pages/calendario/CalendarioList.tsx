import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCalendario, saveCalendario, searchCalendarios } from './CalendarioApi';

const CalendarioList: React.FC = () => {
    const history = useHistory();

    const { name } = useParams<{ name: string; }>();

    const [calendarios, setCalendarios] = useState<any>([]);

    useEffect(() => {
        search();
    },[]);

    const search = () => {
        let result = searchCalendarios();
        setCalendarios(result);
    }

    const pruebalocalstorage = () =>{
        const ejemplo = {
            id:1,
            facultad : "Medicina",
            fechaInicioMatricula : "01-01-2023",
            fechaFinalMatricula : "15-01-2023",
            fechaInicioAjustes : "16-01-2023",
            fechaFinalAjustes : "23-01-2023"
        }
        saveCalendario(ejemplo);
    }

    const remove = (id:string) =>{

        removeCalendario(id);
        searchCalendarios();
    }

    const addCalendario = ()=>{
        history.push('/page/calendario/new')
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
                        <IonCardTitle>Calendarios Academicos</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonItem>
                            <IonButton onClick={addCalendario} color="success" slot='end' size='default'><IonIcon icon={add} /> Crear Calendario</IonButton>
                        </IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonCol>Facultad</IonCol>
                                <IonCol>Fecha Inicio Matricula</IonCol>
                                <IonCol>Fecha Final Matricula</IonCol>
                                <IonCol>Fecha Inicio Ajustes</IonCol>
                                <IonCol>Fecha Final Ajustes</IonCol>
                                <IonCol>Acciones</IonCol>
                            </IonRow>
                            {
                                calendarios.map((calendario:any) =>
                                    <IonRow>
                                        <IonCol>{calendario.facultad}</IonCol>
                                        <IonCol>{calendario.fechaInicioMatricula}</IonCol>
                                        <IonCol>{calendario.fechaFinalMatricula}</IonCol>
                                        <IonCol>{calendario.fechaInicioAjustes}</IonCol>
                                        <IonCol>{calendario.fechaFinalAjustes}</IonCol>
                                        <IonCol>
                                            <IonButton color="primary" fill='clear'><IonIcon slot='icon-only' icon={pencil} /></IonButton>
                                            <IonButton color="danger" fill='clear' onClick={()=>remove(calendario.id)}><IonIcon slot='icon-only' icon={close} /></IonButton>
                                        </IonCol>
                                    </IonRow>
                                )
                            }

<IonButton color="danger" fill='clear' onClick={pruebalocalstorage}>EJEMPLO GUARDAR STOTAGRE</IonButton>

                        </IonGrid>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default CalendarioList;
