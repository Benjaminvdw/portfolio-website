import { useEffect, useRef } from 'react';

export default function DotsCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let width = 0;
        let height = 0;

        const dots = [];
        const spacing = 50; // space between dots
        const dotRadius = 3; // size of dot
        const color = '#736027'; // olive color

        const initDots = () => {
            dots.length = 0;
            for (let x = spacing / 2; x < width; x += spacing) {
                for (let y = spacing / 2; y < height; y += spacing) {
                    dots.push({
                        x,
                        y,
                        baseX: x,
                        baseY: y,
                    });
                }
            }
        };

        const handleResize = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            initDots();
        };

        handleResize();
        
        const resizeObserver = new ResizeObserver(() => {
            handleResize();
        });
        resizeObserver.observe(canvas);

        let mouse = { x: null, y: null };
        const maxDist = 200; // distance at which mouse affects dots
        
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const parent = canvas.parentElement;
        if (parent) {
            parent.addEventListener('mousemove', handleMouseMove);
            parent.addEventListener('mouseleave', handleMouseLeave);
        }

        let animationFrameId;
        const render = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = color;

            for (let i = 0; i < dots.length; i++) {
                let dot = dots[i];
                let dx = mouse.x !== null ? mouse.x - dot.baseX : 0;
                let dy = mouse.y !== null ? mouse.y - dot.baseY : 0;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (mouse.x !== null && dist < maxDist) {
                    let force = (maxDist - dist) / maxDist;
                    let targetX = dot.baseX + dx * force * 0.4;
                    let targetY = dot.baseY + dy * force * 0.4;
                    dot.x += (targetX - dot.x) * 0.15;
                    dot.y += (targetY - dot.y) * 0.15;
                } else {
                    dot.x += (dot.baseX - dot.x) * 0.1;
                    dot.y += (dot.baseY - dot.y) * 0.1;
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
                ctx.globalAlpha = 0.10;
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            if (parent) {
                parent.removeEventListener('mousemove', handleMouseMove);
                parent.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none z-[-1]" />;
}
