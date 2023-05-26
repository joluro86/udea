export function searchCalendarios() {

    if (!localStorage['calendarios']){
        localStorage['calendarios'] = "[]";
    }

    let calendarios = localStorage['calendarios'];
    calendarios = JSON.parse(calendarios);

    return calendarios;
}

export function removeCalendario(id:string) {
    let calendarios = searchCalendarios();
    let indice = calendarios.findIndex((calendario:any) => calendario.id==id);
    calendarios.splice(indice, 1)
    localStorage['calendarios'] = JSON.stringify(calendarios);
        
}

export function saveCalendario(calendario:any) {

    let calendarios = searchCalendarios();
    calendarios.push(calendario);
    localStorage['calendarios'] = JSON.stringify(calendarios);

}