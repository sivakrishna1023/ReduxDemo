// export default reducers = (state=null,action)=>{
//     if(action.type==='Login'){
//         return state=action.payload;
//     }else if(action.type==='Logout'){
//         return state=null;
//     }else{
//         return; 
//     }
// }

const reducer = (state = null, action) => {
    switch (action.type) {
        case 'Login':
            return action.payload;
        case 'Logout':
            return null;
        default:
            return state;
    }
}

export default reducer;
