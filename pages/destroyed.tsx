import type { NextPage } from 'next'
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const Destroyed: NextPage = () => {
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio: any, opts: any) => {
        refAnimationInstance.current &&
            // @ts-ignore
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio)
            });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        makeShot(0.2, {
            spread: 60
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    }, [makeShot]);

    useEffect(() => {
        fire()
    })

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log("hey")
        fire();
    };

    return (

        <div className="w-full items-center flex flex-col gap-5">

            <h1 className="drop-shadow-none text-black break-normal text-left ">
                CONGRATS<br />
                YOUR NODE<br />
                IS DESTROYED
            </h1>

            <ReactCanvasConfetti refConfetti={getInstance} className="fixed w-full h-full pointer-events-none top-0 left-0" />
            <form onSubmit={onSubmit}>
                <input type="submit" value="GREAT!"></input>
            </form>
        </div>

    )
}

export default Destroyed
