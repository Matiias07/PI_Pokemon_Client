function validateForm(input) {
    const error = {};

    const letterExpression = /^[a-zA-Z]+$/;
    const numberExpression = /^[0-9]+$/;
    const urlExpression = /^(ftp|http|https):[^ "]+$/;

    if(!input.name){
        error.name = 'Se requiere nombre'
    } else if(input.name.length < 3 || input.name.length > 20){
        error.name = 'Sólo entre 3 a 20 caracteres'
    } else if(!letterExpression.test(input.name)){
        error.name = 'Sólo letras'
    };

    if(!urlExpression.test(input.image)){
        error.image = 'Sólo es valido una URL'
    };

    if(!input.hp){
        error.hp = 'Se requiere HP'
    } else if(input.hp < 1 || input.hp > 99){
        error.hp = 'Sólo valores entre 1 a 99'
    } else if(!numberExpression.test(input.hp)){
        error.hp = 'El valor debe ser solamente números.'
    };

    if(!input.attack){
        error.attack = 'Se requiere Ataque'
    } else if(input.attack < 1 || input.attack > 150){
        error.attack = 'Sólo valores entre 1 a 150'
    } else if(!numberExpression.test(input.attack)){
        error.attack = 'El valor debe ser solamente números.'
    };

    if(!input.defense){
        error.defense = 'Se requiere Defensa'
    } else if(input.defense < 1 || input.defense > 150){
        error.defense = 'Sólo valores entre 1 a 150'
    } else if(!numberExpression.test(input.defense)){
        error.defense = 'El valor debe ser solamente números.'
    };

    if(!input.speed){
        error.speed = 'Se requiere Velocidad'
    } else if(input.speed < 1 || input.speed > 70){
        error.speed = 'Sólo valores entre 1 a 70'
    } else if(!numberExpression.test(input.speed)){
        error.speed = 'El valor debe ser solamente números.'
    };

    if(!input.height){
        error.height = 'Se requiere Altura'
    } else if(input.height < 1 || input.height > 180){
        error.height = 'Sólo valores entre 1 a 180'
    } else if(!numberExpression.test(input.height)){
        error.height = 'El valor debe ser solamente números.'
    };

    if(!input.weight){
        error.weight = 'Se requiere Peso'
    } else if(input.weight < 1 || input.weight > 200){
        error.weight = 'Sólo valores entre 1 a 200'
    } else if(!numberExpression.test(input.weight)){
        error.weight = 'El valor debe ser solamente números.'
    };

    if(!input.types[0]){
        error.types = 'Un Tipo minimo'
    };

    return error;
}

export default validateForm;