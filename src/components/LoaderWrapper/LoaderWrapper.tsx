import React from 'react'
import "./LoaderWrapper.scss"

function LoaderWrapper(props: any) {
    if (props.loading) {
        return (
            <div
                className="empty-div"
                style={props.style}
            ></div>
        )
    } else {
        return props.children;
    }
}


export default LoaderWrapper;