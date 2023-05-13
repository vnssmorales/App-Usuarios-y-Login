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
        case 'updateUser':
            return state.map(u => {
                if(u.id === action.payload.id) {
                    return {
                        ...action.payload,
                        password: u.password
                    };
                }
                return u;
            })

        default:
            return state;
    }
}