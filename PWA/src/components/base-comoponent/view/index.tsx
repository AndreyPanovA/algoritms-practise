import React from "react"
const Wrapper = (Component)=> {
    const styles = {}
    return Component
}
const View = (props)=> {
    return <div {...props}>{props.children}</div>
}

export default View
