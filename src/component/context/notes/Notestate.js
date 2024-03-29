import React from "react";

import NoteContext from "./noteContext";

const NoteState = (props) => {


    const costate = {
        "name": 'john doe',
        "Head": 'Director'
    }

    return (

        <NoteContext.Provider value={costate}>
            {props.children}
        </NoteContext.Provider>
    )


}

export default NoteState