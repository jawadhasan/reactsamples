import React, { useEffect } from "react";

const RefExample = () => {

    const myDiv = React.createRef();

    useEffect(() => {
        //this is not escaped
        myDiv.current.innerHTML += "<br /> Set on the wrapped DOM element <strong>Unsafe</strong> [not escaped]"
        console.log('i fire once');
    }, []);

    return (
        <div>
             <h5>Ref Example</h5>
            <div ref={myDiv}>
                {/* this is escaped */}
                {"Set in render <strong>Safe</strong> [escaped]"}
            </div>
        </div>
    );
}

export default RefExample;
