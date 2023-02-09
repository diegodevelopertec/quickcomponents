import styled from "styled-components"


type Props={
    width:string,
    color?:string,
    height:string,
    radius?:string,
    bgColor:string,
    margin?:string,
    padding?:string
    display: string,
    justifyContent:string,
    alignCenter:string
}
export const Box=styled.div<Props>`
    width:${props=>props.width};
    height:${props=>props.height};
    border-radius:${props=>props.radius};
    background-color: ${props=>props.bgColor};
    color: ${props=>props.color};
    margin: ${props=>props.margin};
    padding: ${props=>props.padding};
    display:${props=>props.display};
    display:${props=>props.display};
    justify-content:${props=>props.justifyContent};
    align-items:${props=>props.alignCenter};



`