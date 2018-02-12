import React from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = (duration) => ({
    opacity: '0',
    transition: `opacity ${duration}ms ease-in-out`,
});

const transitionStyles = (status) => {
    const styles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
    };
    return styles[status];
};

const RTGCfade = (props) => {
    const { duration, children, opacity, show, ...rest } = props;
    return (
        <Transition in={show} timeout={duration} {...rest}>
            {(status) => (
                <div style={{
                    ...defaultStyle(duration),
                    ...transitionStyles(status)
                }}>
                    {children}
                </div>
            )}
        </Transition>
    )
}

RTGCfade.defaultProps = {
    duration: 300
};

export default RTGCfade;