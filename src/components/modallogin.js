import React from "react";
import FormLogin from "./formLogin";
import FormRegister from "./formRegister";

export default function ModalLogin(props){
    const [modalState, setModalState] = React.useState(null);
    
    React.useEffect(() => {
        setModalState(props.active)
        
    },[props.active]);

    return ( 
        <div id="modal-login" className={`modal ${modalState}`}>
            <div className="modal-background"></div>
                <FormRegister />
        </div>
    )
}