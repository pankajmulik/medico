export const addAppointment = (appointment) => {
    
    return (dispatch) => {
        
        dispatch({
            type: 'schedule',
            payload:appointment
})

    }

}

export const cancelAppointment = (appointment) => {

    return () => {
        dispatch({
            type: 'cancel',
            payload:appointment
    })


}


}