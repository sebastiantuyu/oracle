import React from 'react'
import "./LoaderWrapper.scss"

interface IProps {
    loading: boolean;
    width: number;
    height: number;
}

function LoaderWrapper(props: any, { width, height }: IProps) {
    console.log(props.loading, props.width, props.height )
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