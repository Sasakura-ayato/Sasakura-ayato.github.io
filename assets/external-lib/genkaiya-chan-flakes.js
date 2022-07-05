/*
Genkaiya Flakes by puhitaku

Licensed under CC0 1.0.
License text: https://creativecommons.org/publicdomain/zero/1.0/legalcode
*/

/*
Keys:
  density: density of genkaiya-chan per 100x100 px
  n: fixed number of genkaiya-chan
  dy(Min|Max): range of falling speed
  r(Min|Max): range of horizontal swing
  size(Min|Max): range of size
  theta(Min|Max): range of theta (phase of the swing)
  omega(Min|Max): range of omega (frequency of the swing)
  profiling: enable measuring FPS

Note:
  `n` and `density` are exclusive; `n` has higher precedence than `density`.
*/

const config = {
	density: 3,
  n: 20,

  dyMin: 10,
  dyMax: 40,
  rMin: 20,
  rMax: 50,
  sizeMin: 10,
  sizeMax: 50,
  thetaMin: 0,
  thetaMax: 2 * Math.PI,
  omegaMin: 0,
  omegaMax: Math.PI / 4,

  profiling: false,
}


const genkaiyaWebp = `data:image/webp;base64,
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`;

const g = new Image();
g.src = genkaiyaWebp;

const body = document.querySelector("body");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let width = body.offsetWidth;
let height = body.offsetHeight;
let ratio = window.devicePixelRatio;
let last = performance.now();
let lastProf = last;
let frames = 0;
let flakes = [];

function randRange(min, max) {
  return Math.random() * (max - min) + min;
}

function init() {
  width = body.offsetWidth;
  height = body.offsetHeight;
  ratio = window.devicePixelRatio;
  
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  ctx.scale(ratio, ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const n = config.n || width * height / 100**2 * config.density;
  flakes = [];

  for (let i = 0; i < n; i++) {
    flakes.push({
      x: Math.random() * (width + 40) - 20,
      y: Math.random() * (height + 40) - 40, 
      dy: randRange(config.dyMin, config.dyMax),
      r: randRange(config.rMin, config.rMax),
      size: randRange(config.sizeMin, config.sizeMax),
      theta: randRange(config.thetaMin, config.thetaMax),
      omega: randRange(config.omegaMin, config.omegaMax),
    });
  }
}

init();
new ResizeObserver(init).observe(body);

function draw() {
  const now = performance.now();
  let elapsed = (now - last) / 1000;
  let elapsedProf = (now - lastProf) / 1000;
  if (elapsed > 0.1) {
    elapsed = 0.1;
  }
  last = now;
  
  if (elapsedProf > 1 && config.profiling) {
    console.log(`FPS: ${frames / elapsedProf}`);
    frames = 0;
    lastProf = now;
  }
  
  ctx.clearRect(0, 0, width, height);
  flakes.forEach(f => {
    ctx.drawImage(g, f.x + f.r * Math.sin(f.theta), f.y, f.size, f.size);
    Object.assign(f, {
        y: f.y > height ? -f.size : f.y + f.dy * elapsed,
        theta: f.theta + f.omega * elapsed,
    });
  });
  
  frames++;
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

