import * as S from './style'

type Props={
    src:string,
    bg?:string,
    d?:string,
    h:string ,
    m?:string,
    p?:string ,
    color?:string
    radius?:string
    w:string,
    justifyContent?:string,
    alignItem?:string,
    placeholder?:string,
    focus?:()=>void
}

export const Image=({bg,src,color,d,h,m,w,radius,p,alignItem,justifyContent,placeholder,focus}:Props)=>{
    return <S.Box
        placeholder={placeholder}
        onFocus={focus}
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
        src={src}
    
    >
    
    </S.Box>
}