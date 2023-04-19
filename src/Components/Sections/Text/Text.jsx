import React from 'react';
import Girl from '../../../images/image.jpg';

function Text() {
    

    return (
        <div className='body'>
            <div className='wrapper'>
                <img className='imageText' src={Girl} alt='girl' />
                <svg height='100%' width='100%'>
                    <clipPath id='clipID' width='100%' height='100%'>
                        <text id='title' x='0' y='0' dy='2em'>
                            <tspan x='0' dy='226px'>
                                CR
                            </tspan>
                            <tspan x='10' dy='228px'>
                                EA
                            </tspan>
                            <tspan x='29' dy='228px'>
                                TE
                            </tspan>
                        </text>
                    </clipPath>
                </svg>
            </div>
            <style jsx='true'>{`
                @font-face {
                    font-family: 'Free Fat Font';
                    src: url('/src/fonts/free-fat-font/FREEFATFONT-Regular.woff2')
                            format('woff2'),
                        url('/src/fonts/free-fat-font/FREEFATFONT-Regular.woff')
                            format('woff');
                }

                .imageText {
                    -webkit-clip-path: url(#clipID);
                    clip-path: url(#clipID);
                }

                #clipID text {
                    display: inline-block;
                    font-family: 'Free Fat Font';
                    line-height:
                    font-weight: bold;
                    font-size: 350px;
                }

                .body {
                    height: 100%;
                    position: relative;
                    
                }

                .wrapper {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            `}</style>
        </div>
    );
}

export default Text;
