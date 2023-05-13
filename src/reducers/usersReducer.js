export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'addUser':
            
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                }
            ];
        case 'removeUser':
            //creamos un nuevo arreglo con un usuario menos, el que esta contenido en el payload
            return state.filter(user=> user.id !== action.payload); //este payload es el id
    
        default:
            return state;
    }
}