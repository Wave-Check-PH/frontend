import React from 'react';
import './FadeIn.scss';

interface FadeInProps {
    child: React.ReactNode;
    open: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({ child, open }) => {

    return <>
    <div style={{ marginBottom: "50px"}}>{' '}</div>
        <div className={`collapse ${open ? 'show' : ''}`}>
            {child}
        </div>
        </>;
        
};

export default FadeIn;