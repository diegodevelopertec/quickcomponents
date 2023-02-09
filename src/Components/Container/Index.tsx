import { Children, ReactNode } from 'react'
import * as S from './style'


type Props={
    children:ReactNode,
    bg:string,
    d:string,
    h:string ,
    m?:string,
    p?:string ,
    color?:string
    radius?:string
    w:string,
    justifyContent:string,
    alignItem:string
}
export const Container=({bg,children,color,d,h,m,w,radius,p,alignItem,justifyContent}:Props)=>{
    return <S.Box 
            bgColor={bg} 
            display={d}
            height={h}
            margin={m}
            padding={p}
            radius={radius}
            width={w}
            color={color}
            alignCenter={alignItem}
            justifyContent={justifyContent}
           >
    
        {children}
    </S.Box>
}