const canvasContainer = document.getElementById('wrapper-canvas');

const dimensions = {
  width: window.innerWidth,
  height: window.innerHeight,
};

Matter.use('matter-attractors');
Matter.use('matter-wrap');

function runMatter() {
  const {
    Engine,
    Events,
    Runner,
    Render,
    World,
    Body,
    Mouse,
    Common,
    Composite,
    Bodies
  } = Matter;

  const engine = Engine.create();
  engine.world.gravity.y = 0;
  engine.world.gravity.x = 0;
  engine.world.gravity.scale = 0.1;

  const render = Render.create({
    element: canvasContainer,
    engine: engine,
    options: {
      width: dimensions.width,
      height: dimensions.height,
      wireframes: false,
      background: 'transparent',
    },
  });

  const runner = Runner.create();
  const world = engine.world;
  world.gravity.scale = 0;

  let attractorRadius = Math.max(dimensions.width / 25, dimensions.height / 25) / 2;

  const attractiveBody = Bodies.circle(
    render.options.width / 2,
    render.options.height / 2,
    attractorRadius,
    {
      isStatic: true,
      render: {
        fillStyle: '#0a0a0a',
        strokeStyle: '#333',
        lineWidth: 1,
      },
      plugin: {
        attractors: [
          (bodyA, bodyB) => ({
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          }),
        ],
      },
    }
  );

  World.add(world, attractiveBody);

  for (let i = 0; i < 60; i++) {
    const x = Common.random(0, render.options.width);
    const y = Common.random(0, render.options.height);
    const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
    const polygonNumber = Common.random(3, 6);

    const body = Bodies.polygon(x, y, polygonNumber, s, {
      mass: s / 20,
      friction: 0,
      frictionAir: 0.02,
      angle: Math.round(Math.random() * 360),
      render: {
        fillStyle: '#1a1a1a',
        strokeStyle: '#2c2c2c',
        lineWidth: 2,
      },
    });

    World.add(world, body);

    const r = Common.random(0, 1);

    const miniShapes = [
      Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        render: {
          fillStyle: r > 0.3 ? '#111' : '#222',
          strokeStyle: '#333',
          lineWidth: 1,
        },
      }),
      Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        render: {
          fillStyle: '#1c1c1c',
          strokeStyle: '#333',
          lineWidth: 4,
        },
      }),
      Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: '#0f0f0f',
          strokeStyle: '#191919',
          lineWidth: 2,
        },
      }),
    ];

    miniShapes.forEach(shape => World.add(world, shape));
  }

  // Mouse-based attraction
  const mouse = Mouse.create(render.canvas);

  Events.on(engine, 'afterUpdate', () => {
    if (!mouse.position.x) return;
    Body.translate(attractiveBody, {
      x: (mouse.position.x - attractiveBody.position.x) * 0.12,
      y: (mouse.position.y - attractiveBody.position.y) * 0.12,
    });
  });

  // Click-based micro animation: particles attract to click location
  render.canvas.addEventListener('click', (e) => {
    const bounds = render.canvas.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    Body.setPosition(attractiveBody, { x, y });
  });

  // Micro animation: pulsing effect
  setInterval(() => {
    const scale = 1 + Math.sin(Date.now() / 500) * 0.03;
    Body.scale(attractiveBody, scale, scale);
  }, 300);

  Runner.run(runner, engine);
  Render.run(render);

  return { engine, runner, render, canvas: render.canvas };
}

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function setWindowSize(render) {
  render.canvas.width = window.innerWidth;
  render.canvas.height = window.innerHeight;
}

let m = runMatter();
window.addEventListener('resize', debounce(() => setWindowSize(m.render), 250));
