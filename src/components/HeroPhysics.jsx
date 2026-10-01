import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const SKILLS = ['React', 'Godot', 'Tailwind', 'Python', 'Next.js', 'Typescript', 'Node.js', 'CSS'];

export default function HeroPhysics() {
    const sceneRef = useRef(null);
    const [bodies, setBodies] = useState([]);
    
    useEffect(() => {
        const Engine = Matter.Engine,
              Runner = Matter.Runner,
              Composite = Matter.Composite,
              Bodies = Matter.Bodies,
              Events = Matter.Events,
              Body = Matter.Body,
              Mouse = Matter.Mouse,
              MouseConstraint = Matter.MouseConstraint;

        const engine = Engine.create();
        const world = engine.world;
        const container = sceneRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        // Boundaries
        const wallOpts = { isStatic: true };
        const ground = Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOpts);
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOpts);
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOpts);
        Composite.add(world, [ground, leftWall, rightWall]);

        // Create boxes for skills
        const boxes = SKILLS.map((skill, index) => {
            const x = width / 2 + (Math.random() - 0.5) * 200;
            const y = -100 - (index * 120);
            return Bodies.rectangle(x, y, 110, 44, {
                restitution: 0.6,
                friction: 0.1,
                density: 0.001,
                label: skill,
                chamfer: { radius: 8 }
            });
        });
        Composite.add(world, boxes);

        // Add mouse control
        const mouse = Mouse.create(container.parentElement);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        
        // Remove scroll blocking so the user can still scroll the page over the hero.
        // Matter.js binds these with passive: false and calls preventDefault().
        mouse.element.removeEventListener('wheel', mouse.mousewheel);
        mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
        mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);
        
        // Also remove touch listeners to ensure mobile scrolling works flawlessly.
        // (This disables touch-dragging the blocks on mobile, but preserves scrolling).
        mouse.element.removeEventListener('touchstart', mouse.mousedown);
        mouse.element.removeEventListener('touchmove', mouse.mousemove);
        mouse.element.removeEventListener('touchend', mouse.mouseup);
        
        Composite.add(world, mouseConstraint);

        // Run the engine
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Sync Matter.js bodies with React state
        const updateBodies = () => {
            const newBodies = boxes.map(box => ({
                id: box.id,
                label: box.label,
                x: box.position.x,
                y: box.position.y,
                angle: box.angle
            }));
            setBodies(newBodies);
        };
        Events.on(engine, 'afterUpdate', updateBodies);

        const handleResize = () => {
            Body.setPosition(ground, { x: container.offsetWidth / 2, y: container.offsetHeight + 50 });
            Body.setPosition(rightWall, { x: container.offsetWidth + 50, y: container.offsetHeight / 2 });
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            Runner.stop(runner);
            Engine.clear(engine);
            Events.off(engine, 'afterUpdate', updateBodies);
            window.removeEventListener('resize', handleResize);
            Mouse.clearSourceEvents(mouse);
        };
    }, []);

    return (
        <div ref={sceneRef} className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            {bodies.map((body) => (
                <div
                    key={body.id}
                    className="absolute bg-bark text-sand border-2 border-olive shadow-lg flex items-center justify-center font-mono text-sm pointer-events-auto cursor-grab active:cursor-grabbing select-none"
                    style={{
                        width: '110px',
                        height: '44px',
                        borderRadius: '8px',
                        left: body.x - 55, // offset by half width
                        top: body.y - 22,  // offset by half height
                        transform: `rotate(${body.angle}rad)`
                    }}
                >
                    {body.label}
                </div>
            ))}
        </div>
    );
}
