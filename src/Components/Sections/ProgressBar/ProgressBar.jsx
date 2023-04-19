import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import classes from './ProgressBar.module.css';

const ProgressBar = () => {
    const progressBarRef = useRef(null);

    useEffect(() => {
        const progressBar = progressBarRef.current;
        const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
        gsap.set(progressBar, { width: 0 });

        const updateProgressBar = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            const progress = (scrollTop / maxScrollHeight) * 100;
            gsap.to(progressBar, { width: `${progress}%`, duration: 0.3 });
        };

        window.addEventListener('scroll', updateProgressBar);

        return () => {
            window.removeEventListener('scroll', updateProgressBar);
        };
    }, []);

    return (
        <div className={classes.progressBarContainer}>
            <div className={classes.progressBar} ref={progressBarRef} />
        </div>
    );
};

export default ProgressBar;
