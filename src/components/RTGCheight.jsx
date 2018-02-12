import React from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = (duration) => ({
    overflow: 'hidden',
    height: '0px',
    transition: `height ${duration}ms ease-in-out`,
});

const transitionStyles = (status, height) => {
    const styles = {
        entering: { height: '0px' },
        entered: { height: `${height}px` },
    };
    return styles[status];
};

const RTGCheight = (props) => {
    const { duration, children, height, show, ...rest } = props;
    return (
        <Transition in={show} timeout={duration} {...rest}>
            {(status) => (
                <div style={{
                    ...defaultStyle(duration),
                    ...transitionStyles(status, height)
                }}>
                    {children}
                </div>
            )}
        </Transition>
    )
}

RTGCheight.defaultProps = {
    duration: 300,
    height: '100'
};

export default RTGCheight;