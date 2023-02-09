import * as S from './style'

type Props={
    w:string,
    color?:string,
    h:string,
    radius?:string,
    bgColor:string,
    m?:string,
    p?:string
    d: string,
    justifyContent:string,
    alignItems:string,
    text:string,
    onClick:()=>void,
    bd?:string,
    outline?:string,
    bgHover?:string,
    outlineHover?:string,
    transition?:string,
}

export const Botao=({alignItems,bgColor,d,h,justifyContent,w,color,m,p,radius,text,onClick,bd,outline,bgHover,outlineHover,transition}:Props)=>{

    return <S.Box
           bgHover={bgHover}
          onClick={onClick}
          outline={outline}
           alignCenter={alignItems}
           bgColor={bgColor}
           display={d}
           height={h}
           width={w}
           radius={radius}
           color={color}
           justifyContent={justifyContent}
           margin={m}
           padding={p}
           border={bd}
           outlineHover={outlineHover}
           transition={transition}
         >
        {text}

    </S.Box>




}