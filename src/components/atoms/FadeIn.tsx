import React from 'react';
import './FadeIn.scss';

interface FadeInProps {
    children: React.ReactNode;
    open: boolean;
}

const AnimatedComponent: React.FC<FadeInProps> = ({ children, open }) => {
    return (
        <div className={`expanding-component ${open ? 'expanded' : ''}`}>
            {children}
        </div>
    );
};

export default AnimatedComponent;