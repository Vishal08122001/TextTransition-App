import React, { useState } from 'react'

export default function About(props) {

    const [mystyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: 'black',

    })

    // //For btn name switch
    const [btnText, setBtnText] = useState("Enable Dark Mode")




    // //For Dark Mode
    const dark = () => {
        if (mystyle.color == 'white') {
            setMyStyle({
                backgroundColor: 'white',
                color: 'black',

            })
            setBtnText("Enable Dark Mode")
        } else {
            setMyStyle({
                backgroundColor: 'black',
                color: 'white',
                border: '1px solid white',

            })
            setBtnText("Disable Dark Mode")
        }
    }


    return (
        <div className='container' style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }}>
                <div className="accordion-item" style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Contact
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Phone No. </strong><a href='tel:8076929271'>+91 8076929271</a><br />
                            <strong>Email:-      </strong>
                            <a href="mailto:vc31142@gmail.com">vc31142@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
                            These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={{ backgroundColor: props.mode === "dark" ? "#032240" : "white", color: props.mode === "dark" ? "white" : "black", cursor: "pointer" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element.
                            These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
