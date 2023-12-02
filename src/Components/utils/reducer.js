export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_DENTISTS':
            return {...state, list: action.payload}
        case 'ADD_FAV': 
            return {...state, favs: [...state.favs, action.payload]};
        case 'CHANGE_THEME':
            const newTheme = state.theme === 'light' ? 'dark' : 'light'
            return {...state, theme: newTheme}
        default: 
            return state
    }
}