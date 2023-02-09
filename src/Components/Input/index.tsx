import* as S from './style'


type Props={
   type:string,
    bg?:string,
    d?:string,
    h:string ,
    m?:string,
    p?:string ,
    color?:string
    radius?:string
    w?:string,
    justifyContent?:string,
    alignItem?:string,
    outline?:string,
    bgHover?:string,
    bdHover?:string,
    outlineHover?:string,
    transition?:string,
    bd:string
}


export const Input=({bg,type,color,d,h,m,w,radius,p,alignItem,justifyContent,bd,bgHover,outline,outlineHover,transition,bdHover}:Props)=>{
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
        type={type}>
          border={bd}
           outlineHover={outlineHover}
           transition={transition}

    </S.Box>



}