import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.substring(1);

    }


    return (
        <div style={{ height: "40px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} `} role="alert">
                {capitalize(props.alert.type)} ! <strong>{props.alert.message}</strong>
            </div>}
        </div>
    )
}
