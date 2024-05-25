export const  LogMeIn=(user)=>{
    return (dispatch)=>{
         dispatch({
            type:"Login",
            payload:user,
         })
    }
}


export const  LogMeOut=(user)=>{
    return (dispatch)=>{
        dispatch({
           type:"Logout",
           payload:user,
        })
   }
}
