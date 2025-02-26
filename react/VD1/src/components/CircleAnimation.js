import { useEffect, useRef, useState } from "react";

export default function CircleAnimation() {
    const canvasRef = useRef(null);
    const [radius, setRadius] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [growing, setGrowing] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let animationFrameId;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();

            if (growing) {
                setRadius((prev) => prev + 1);
                setOpacity((prev) => Math.min(prev + 0.02, 1));
                
                if (radius >= 200) {
                    setGrowing(false);
                    setOpacity(0);
                    setTimeout(() => {
                        setRadius(0);
                        setOpacity(0);
                        setGrowing(true);
                    }, 500);
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        }

        draw();

        return () => cancelAnimationFrame(animationFrameId);
    }, [radius, opacity, growing]);

    return (
        <canvas ref={canvasRef} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black"
        }} />
    );
}   