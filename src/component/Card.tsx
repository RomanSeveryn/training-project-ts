import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined='outlined',
    primary='primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         children,
         variant,
         onClick
    }) => {
    const [state, setState] = useState(1)
    return(
        <div style={{width:'100px', height:'100px',
            border: variant === CardVariant.outlined ? '2px solid red' : 'none',
            background: variant === CardVariant.primary ? 'orange' : ''
        }}
        onClick={() => onClick(state)}>
            {children}
        </div>
    )
}

export default Card;