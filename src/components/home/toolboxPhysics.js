// src/components/home/toolboxPhysics.js
// A tiny physics pit for the toolbox chips, built on matter-js (https://brm.io/matter-js/).
// The chips stay real DOM elements; each frame we copy their body position into a CSS transform.
// The loop stops when every chip is at rest, so an idle pit costs nothing.

const WALL = 200;

export function createPit(Matter, container, chips) {
  const { Bodies, Body, Composite, Constraint, Engine, Sleeping } = Matter;
  const engine = Engine.create({ enableSleeping: true, gravity: { y: 1.1 } });
  let width = container.clientWidth;
  let height = container.clientHeight;
  let frame = 0;
  let running = false;
  let visible = false;
  let drag = null;

  const floor = Bodies.rectangle(width / 2, height + WALL / 2, width * 3, WALL, { isStatic: true });
  const left = Bodies.rectangle(-WALL / 2, -height, WALL, height * 6, { isStatic: true });
  const right = Bodies.rectangle(width + WALL / 2, -height, WALL, height * 6, { isStatic: true });
  const ceiling = Bodies.rectangle(width / 2, -height * 2 - WALL / 2, width * 3, WALL, { isStatic: true });

  const bodies = chips.map((el) => {
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    return Bodies.rectangle(0, 0, w, h, {
      chamfer: { radius: Math.min(8, h / 2 - 1) },
      restitution: 0.35,
      friction: 0.4,
      frictionAir: 0.012,
      density: 0.002,
      sleepThreshold: 40,
    });
  });
  Composite.add(engine.world, [floor, left, right, ceiling, ...bodies]);

  // Drop every chip from above the pit, a little apart, with a small random spin.
  function drop() {
    bodies.forEach((body, i) => {
      Sleeping.set(body, false);
      Body.setPosition(body, {
        x: Math.min(width - 40, Math.max(40, width * (0.15 + Math.random() * 0.7))),
        y: -40 - i * 46,
      });
      Body.setAngle(body, (Math.random() - 0.5) * 0.6);
      Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: 0 });
      Body.setAngularVelocity(body, 0);
    });
    wake();
  }

  function paint() {
    bodies.forEach((body, i) => {
      const el = chips[i];
      const x = body.position.x - el.offsetWidth / 2;
      const y = body.position.y - el.offsetHeight / 2;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${body.angle.toFixed(3)}rad)`;
    });
  }

  let last = 0;
  function tick(now) {
    const delta = Math.min(1000 / 60, now - (last || now - 16));
    last = now;
    Engine.update(engine, delta);
    paint();
    const resting = !drag && bodies.every((b) => b.isSleeping);
    if (resting || !visible) {
      running = false;
      last = 0;
      return;
    }
    frame = requestAnimationFrame(tick);
  }

  function wake() {
    if (running || !visible) return;
    running = true;
    frame = requestAnimationFrame(tick);
  }

  // Dragging: a spring between the pointer and the grabbed chip. Letting go throws it.
  function point(e) {
    const rect = container.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function onDown(e) {
    const index = chips.indexOf(e.currentTarget);
    if (index < 0) return;
    const body = bodies[index];
    const p = point(e);
    e.preventDefault(); // no text selection while dragging
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.classList.add('is-grabbed');
    Sleeping.set(body, false);
    const constraint = Constraint.create({
      pointA: p,
      bodyB: body,
      pointB: { x: p.x - body.position.x, y: p.y - body.position.y },
      angleB: body.angle,
      stiffness: 0.2,
      damping: 0.1,
      length: 0,
    });
    Composite.add(engine.world, constraint);
    drag = { constraint, el: e.currentTarget };
    wake();
  }

  function onMove(e) {
    if (!drag || e.currentTarget !== drag.el) return;
    drag.constraint.pointA = point(e);
  }

  function onUp(e) {
    if (!drag || e.currentTarget !== drag.el) return;
    Composite.remove(engine.world, drag.constraint);
    drag.el.classList.remove('is-grabbed');
    drag = null;
    wake();
  }

  chips.forEach((el) => {
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
  });

  // Keep the walls on the pit's edges when the page is resized.
  const observer = new ResizeObserver(() => {
    width = container.clientWidth;
    height = container.clientHeight;
    Body.setPosition(floor, { x: width / 2, y: height + WALL / 2 });
    Body.setPosition(right, { x: width + WALL / 2, y: -height });
    bodies.forEach((b) => {
      if (b.position.x > width) Body.setPosition(b, { x: width - 30, y: b.position.y });
      Sleeping.set(b, false);
    });
    wake();
  });
  observer.observe(container);

  return {
    drop,
    setVisible(v) {
      visible = v;
      if (v) {
        bodies.forEach((b) => Sleeping.set(b, false));
        wake();
      }
    },
    destroy() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      chips.forEach((el) => {
        el.removeEventListener('pointerdown', onDown);
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerup', onUp);
        el.removeEventListener('pointercancel', onUp);
        el.style.transform = '';
      });
      Engine.clear(engine);
    },
  };
}
