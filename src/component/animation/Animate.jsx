import React, { useEffect } from 'react'

import { useSpring, useSpringRef, animated, useTransition, } from '@react-spring/web'

const Animate = () => {

    const api = useSpringRef()
    const springs = useSpring({
        ref: api,
        from: { x: 0 }

    })

    const handleClick = () => {
        api.start({
            from: {

            },

            to: {

                x: springs.x.get() === -100 ? 0 : -100,
            },
        })
    }

    useEffect(() => {
        handleClick();
    })
    return (
        <div>


            <animated.div
                onClick={handleClick}
                style={{
                    width: 'auto',
                    height: 80,
                    borderRadius: 8,
                    ...springs,
                }}
            >
                <h1 id='onetextheading'>Quality Medical treatment</h1>

            </animated.div>



        </div>
    )
}

export default Animate