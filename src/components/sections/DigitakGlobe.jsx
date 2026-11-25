
// // import { useEffect, useRef } from "react";

// // export default function DigitalGlobe() {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx = canvas?.getContext("2d");

// //     if (!canvas || !ctx) return;

// //     const TAU = Math.PI * 2;
// //     const DEG = Math.PI / 180;
// //     const tilt = 0.38;

// //     let width = 0;
// //     let radius = 0;
// //     let scale = 1;
// //     let rotation = -1.2;
// //     let animationFrame;
// //     let visible = true;

// //     const resize = () => {
// //       const dpr = Math.min(2, window.devicePixelRatio || 1);

// //       width = canvas.clientWidth;
// //       if (!width) return;

// //       canvas.width = width * dpr;
// //       canvas.height = width * dpr;

// //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

// //       radius = width * 0.4;
// //       scale = width / 600;
// //     };

// //     const vector = (lat, lon) => [
// //       Math.cos(lat) * Math.sin(lon),
// //       Math.sin(lat),
// //       Math.cos(lat) * Math.cos(lon),
// //     ];

// //     const project = (v) => {
// //       const X =
// //         v[0] * Math.cos(rotation) +
// //         v[2] * Math.sin(rotation);

// //       const Z0 =
// //         -v[0] * Math.sin(rotation) +
// //         v[2] * Math.cos(rotation);

// //       const Y =
// //         v[1] * Math.cos(tilt) -
// //         Z0 * Math.sin(tilt);

// //       const Z =
// //         v[1] * Math.sin(tilt) +
// //         Z0 * Math.cos(tilt);

// //       return [
// //         width / 2 + X * radius,
// //         width / 2 - Y * radius,
// //         Z,
// //       ];
// //     };

// //     // Globe surface dots
// //     const dots = [];

// //     const DOT_COUNT = 2200;

// //     for (let i = 0; i < DOT_COUNT; i++) {
// //       const lat = Math.asin(1 - (2 * (i + 0.5)) / DOT_COUNT);
// //       const lon = (i * 2.399963) % TAU;

// //       const a = lat / DEG;
// //       const o = lon / DEG;

// //       const highlighted =
// //         Math.sin(a * 0.06 + o * 0.035) +
// //           Math.sin(o * 0.08 - a * 0.03) +
// //           Math.cos(a * 0.05 + o * 0.06) >
// //         0.85;

// //       dots.push({
// //         position: vector(lat, lon),
// //         highlighted,
// //       });
// //     }

// //     // Illustrative global connection points
// //     const locations = [
// //       [10, 78],
// //       [51.5, -0.1],
// //       [40.7, -74],
// //       [37.8, -122.4],
// //       [25.2, 55.3],
// //       [1.35, 103.8],
// //       [-33.9, 151.2],
// //       [35.7, 139.7],
// //       [-23.5, -46.6],
// //       [30, 31],
// //     ].map(([lat, lon]) => vector(lat * DEG, lon * DEG));

// //     const connections = [
// //       [0, 1],
// //       [0, 2],
// //       [0, 3],
// //       [0, 4],
// //       [0, 5],
// //       [0, 6],
// //       [0, 7],
// //       [0, 8],
// //       [0, 9],
// //       [1, 2],
// //       [5, 7],
// //     ];

// //     const arcPoint = (a, b, t) => {
// //       const point = [
// //         a[0] + (b[0] - a[0]) * t,
// //         a[1] + (b[1] - a[1]) * t,
// //         a[2] + (b[2] - a[2]) * t,
// //       ];

// //       const length = Math.hypot(...point);

// //       const height =
// //         1 +
// //         0.3 *
// //           Math.sin(Math.PI * t) *
// //           Math.min(
// //             1,
// //             1 - (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) + 0.3
// //           );

// //       return point.map((v) => (v / length) * height);
// //     };

// //     const draw = (time) => {
// //       animationFrame = requestAnimationFrame(draw);

// //       if (!visible || !width) return;

// //       rotation += 0.0035;

// //       ctx.clearRect(0, 0, width, width);

// //       // Globe atmosphere
// //       const gradient = ctx.createRadialGradient(
// //         width / 2 - radius * 0.3,
// //         width / 2 - radius * 0.3,
// //         radius * 0.1,
// //         width / 2,
// //         width / 2,
// //         radius
// //       );

// //       gradient.addColorStop(0, "#ffffff");
// //       gradient.addColorStop(1, "#d8f0ff");

// //       ctx.save();
// //       ctx.shadowColor = "#2fb1ff66";
// //       ctx.shadowBlur = 60 * scale;
// //       ctx.fillStyle = gradient;
// //       ctx.beginPath();
// //       ctx.arc(width / 2, width / 2, radius, 0, TAU);
// //       ctx.fill();
// //       ctx.restore();

// //       // Surface particles
// //       dots.forEach(({ position, highlighted }) => {
// //         const point = project(position);

// //         if (point[2] > 0) {
// //           const r = (highlighted ? 2.6 : 1.5) * scale;

// //           ctx.fillStyle = highlighted
// //             ? "rgba(47,177,255,0.9)"
// //             : "rgba(47,177,255,0.22)";

// //           ctx.fillRect(
// //             point[0] - r / 2,
// //             point[1] - r / 2,
// //             r,
// //             r
// //           );
// //         }
// //       });

// //       // Animated connection routes
// //       connections.forEach(([from, to], i) => {
// //         const progress = ((time / 3600) + i * 0.29) % 1;
// //         const tail = Math.max(0, progress - 0.5);

// //         const alpha =
// //           progress > 0.85 ? (1 - progress) / 0.15 : 1;

// //         ctx.beginPath();

// //         let drawing = false;

// //         for (let k = 0; k <= 24; k++) {
// //           const t = tail + ((progress - tail) * k) / 24;

// //           const point = project(
// //             arcPoint(locations[from], locations[to], t)
// //           );

// //           if (point[2] > -0.05) {
// //             if (drawing) {
// //               ctx.lineTo(point[0], point[1]);
// //             } else {
// //               ctx.moveTo(point[0], point[1]);
// //               drawing = true;
// //             }
// //           } else {
// //             drawing = false;
// //           }
// //         }

// //         ctx.strokeStyle = `rgba(255,138,31,${0.85 * alpha})`;
// //         ctx.lineWidth = 2 * scale;
// //         ctx.stroke();

// //         // Moving connection particle
// //         const movingPoint = project(
// //           arcPoint(locations[from], locations[to], progress)
// //         );

// //         if (movingPoint[2] > 0) {
// //           ctx.fillStyle = "#ff8a1f";
// //           ctx.beginPath();
// //           ctx.arc(
// //             movingPoint[0],
// //             movingPoint[1],
// //             3.2 * scale,
// //             0,
// //             TAU
// //           );
// //           ctx.fill();
// //         }
// //       });

// //       // Location nodes and pulse rings
// //       locations.forEach((location, i) => {
// //         const point = project(location);

// //         if (point[2] <= 0) return;

// //         const phase = ((time / 1800) + i * 0.2) % 1;

// //         ctx.strokeStyle = i === 0
// //           ? `rgba(255,138,31,${0.6 * (1 - phase)})`
// //           : `rgba(47,177,255,${0.6 * (1 - phase)})`;

// //         ctx.lineWidth = 2 * scale;

// //         ctx.beginPath();
// //         ctx.arc(
// //           point[0],
// //           point[1],
// //           (i === 0 ? 6 : 4) * scale + phase * 18 * scale,
// //           0,
// //           TAU
// //         );
// //         ctx.stroke();

// //         ctx.fillStyle = i === 0 ? "#ff8a1f" : "#2fb1ff";

// //         ctx.beginPath();
// //         ctx.arc(
// //           point[0],
// //           point[1],
// //           (i === 0 ? 7 : 4) * scale,
// //           0,
// //           TAU
// //         );
// //         ctx.fill();

// //         if (i === 0) {
// //           ctx.fillStyle = "#17324d";
// //           ctx.font = `700 ${13 * scale}px sans-serif`;
// //           ctx.fillText(
// //             "Your business",
// //             point[0] + 12 * scale,
// //             point[1] - 12 * scale
// //           );
// //         }
// //       });
// //     };

// //     const observer = new IntersectionObserver(([entry]) => {
// //       visible = entry.isIntersecting;
// //     });

// //     observer.observe(canvas);

// //     const resizeObserver = new ResizeObserver(resize);
// //     resizeObserver.observe(canvas);

// //     resize();

// //     animationFrame = requestAnimationFrame(draw);

// //     return () => {
// //       cancelAnimationFrame(animationFrame);
// //       observer.disconnect();
// //       resizeObserver.disconnect();
// //     };
// //   }, []);

// //   return (
// //     <div className="relative mx-auto aspect-square w-full max-w-[600px]">
// //       {/* Outer glow */}
// //       <div className="absolute inset-[5%] rounded-full bg-blue-300/30 blur-[70px]" />

// //       {/* Outer orbit rings */}
// //       <div className="absolute inset-[4%] rounded-full border border-blue-300/30" />
// //       <div className="absolute inset-[10%] rounded-full border border-dashed border-blue-300/20" />

// //       {/* Actual 3D globe canvas */}
// //       <canvas
// //         ref={canvasRef}
// //         role="img"
// //         aria-label="Animated digital globe showing illustrative global network connections"
// //         className="relative z-10 h-full w-full"
// //       />

// //       {/* Floating indicators */}
// //       <div className="absolute right-0 top-[22%] z-20 rounded-xl border border-white/70 bg-white/90 px-4 py-3 text-xs font-bold text-slate-700 shadow-xl backdrop-blur-lg">
// //         <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-400" />
// //         Digital Network
// //       </div>

// //       <div className="absolute bottom-[18%] left-0 z-20 rounded-xl border border-white/70 bg-white/90 px-4 py-3 text-xs font-bold text-slate-700 shadow-xl backdrop-blur-lg">
// //         <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-400" />
// //         Global Connections
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useRef, useState } from "react";
// import {
//   MapPin,
//   TrendingUp,
//   Users,
//   Globe2,
//   Search,
//   ArrowUpRight,
// } from "lucide-react";

// // Animated number counter
// function useCountUp(target, duration = 1600) {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     let frame;
//     const start = performance.now();

//     const animate = (now) => {
//       const progress = Math.min((now - start) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 4);

//       setValue(Math.floor(target * eased));

//       if (progress < 1) {
//         frame = requestAnimationFrame(animate);
//       }
//     };

//     frame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(frame);
//   }, [target, duration]);

//   return value;
// }

// // Mini growth chart
// function MiniChart({ color = "#2fb1ff" }) {
//   return (
//     <svg
//       viewBox="0 0 110 34"
//       className="h-8 w-full overflow-visible"
//       fill="none"
//     >
//       <path
//         d="M1 29 L15 25 L28 27 L42 16 L55 20 L69 12 L83 15 L97 5 L109 2"
//         stroke={color}
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="chart-line"
//       />
//     </svg>
//   );
// }

// // Analytics floating card
// function MetricCard({
//   icon: Icon,
//   title,
//   target,
//   suffix = "",
//   prefix = "",
//   color = "#2fb1ff",
//   position,
//   delay = "0s",
//   chart = true,
// }) {
//   const count = useCountUp(target);

//   const formatted =
//     target >= 1000
//       ? (count / 1000).toFixed(1) + "K"
//       : count.toLocaleString("en-IN");

//   return (
//     <div
//       className={`metric-card absolute z-20 ${position}`}
//       style={{
//         animationDelay: delay,
//         "--metric-color": color,
//       }}
//     >
//       <div className="rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_12px_40px_rgba(30,100,160,0.13)] backdrop-blur-xl sm:p-4">
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2">
//             <div
//               className="flex h-8 w-8 items-center justify-center rounded-xl"
//               style={{ backgroundColor: `${color}18`, color }}
//             >
//               <Icon size={17} />
//             </div>

//             <span className="text-[10px] font-bold tracking-wide text-slate-500 sm:text-xs">
//               {title}
//             </span>
//           </div>

//           <ArrowUpRight
//             size={14}
//             className="text-emerald-500"
//           />
//         </div>

//         <div className="mt-3 flex items-end justify-between gap-2">
//           <div>
//             <div className="text-xl font-extrabold tracking-tight text-slate-800 sm:text-2xl">
//               {prefix}
//               {formatted}
//               {suffix}
//             </div>

//             <div className="mt-1 flex items-center gap-1 text-[9px] font-semibold text-emerald-600 sm:text-[10px]">
//               <TrendingUp size={11} />
//               Growing performance
//             </div>
//           </div>

//           {chart && (
//             <div className="w-[65px] sm:w-[85px]">
//               <MiniChart color={color} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function DigitalGlobe() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas?.getContext("2d");

//     if (!canvas || !ctx) return;

//     const TAU = Math.PI * 2;
//     const DEG = Math.PI / 180;
//     const tilt = 0.38;

//     let width = 0;
//     let height = 0;
//     let radius = 0;
//     let scale = 1;
//     let rotation = -1.2;
//     let animationFrame;
//     let visible = true;

//     const resize = () => {
//       const dpr = Math.min(2, window.devicePixelRatio || 1);

//       width = canvas.clientWidth;
//       height = canvas.clientHeight;

//       if (!width || !height) return;

//       canvas.width = Math.round(width * dpr);
//       canvas.height = Math.round(height * dpr);

//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       radius = Math.min(width, height) * 0.34;
//       scale = width / 600;
//     };

//     const vector = (lat, lon) => [
//       Math.cos(lat) * Math.sin(lon),
//       Math.sin(lat),
//       Math.cos(lat) * Math.cos(lon),
//     ];

//     const project = (v) => {
//       const X =
//         v[0] * Math.cos(rotation) +
//         v[2] * Math.sin(rotation);

//       const Z0 =
//         -v[0] * Math.sin(rotation) +
//         v[2] * Math.cos(rotation);

//       const Y =
//         v[1] * Math.cos(tilt) -
//         Z0 * Math.sin(tilt);

//       const Z =
//         v[1] * Math.sin(tilt) +
//         Z0 * Math.cos(tilt);

//       return [
//         width / 2 + X * radius,
//         height / 2 - Y * radius,
//         Z,
//       ];
//     };

//     // Globe surface dots
//     const dots = [];
//     const DOT_COUNT = 2200;

//     for (let i = 0; i < DOT_COUNT; i++) {
//       const lat = Math.asin(1 - (2 * (i + 0.5)) / DOT_COUNT);
//       const lon = (i * 2.399963) % TAU;

//       const a = lat / DEG;
//       const o = lon / DEG;

//       const highlighted =
//         Math.sin(a * 0.06 + o * 0.035) +
//           Math.sin(o * 0.08 - a * 0.03) +
//           Math.cos(a * 0.05 + o * 0.06) >
//         0.85;

//       dots.push({
//         position: vector(lat, lon),
//         highlighted,
//       });
//     }

//     // Global connection locations
//     const locations = [
//       [10, 78],
//       [51.5, -0.1],
//       [40.7, -74],
//       [37.8, -122.4],
//       [25.2, 55.3],
//       [1.35, 103.8],
//       [-33.9, 151.2],
//       [35.7, 139.7],
//       [-23.5, -46.6],
//       [30, 31],
//     ].map(([lat, lon]) => vector(lat * DEG, lon * DEG));

//     const connections = [
//       [0, 1],
//       [0, 2],
//       [0, 3],
//       [0, 4],
//       [0, 5],
//       [0, 6],
//       [0, 7],
//       [0, 8],
//       [0, 9],
//       [1, 2],
//       [5, 7],
//     ];

//     const arcPoint = (a, b, t) => {
//       const point = [
//         a[0] + (b[0] - a[0]) * t,
//         a[1] + (b[1] - a[1]) * t,
//         a[2] + (b[2] - a[2]) * t,
//       ];

//       const length = Math.hypot(...point);

//       const height =
//         1 +
//         0.3 *
//           Math.sin(Math.PI * t) *
//           Math.min(
//             1,
//             1 -
//               (a[0] * b[0] +
//                 a[1] * b[1] +
//                 a[2] * b[2]) +
//               0.3
//           );

//       return point.map((v) => (v / length) * height);
//     };

//     const draw = (time) => {
//       animationFrame = requestAnimationFrame(draw);

//       if (!visible || !width || !height) return;

//       rotation += 0.002;

//       ctx.clearRect(0, 0, width, height);

//       // Globe atmosphere
//       const gradient = ctx.createRadialGradient(
//         width / 2 - radius * 0.3,
//         height / 2 - radius * 0.3,
//         radius * 0.1,
//         width / 2,
//         height / 2,
//         radius
//       );

//       gradient.addColorStop(0, "#ffffff");
//       gradient.addColorStop(1, "#d8f0ff");

//       ctx.save();
//       ctx.shadowColor = "#2fb1ff66";
//       ctx.shadowBlur = 45 * scale;
//       ctx.fillStyle = gradient;
//       ctx.beginPath();
//       ctx.arc(width / 2, height / 2, radius, 0, TAU);
//       ctx.fill();
//       ctx.restore();

//       // Surface particles
//       dots.forEach(({ position, highlighted }) => {
//         const point = project(position);

//         if (point[2] > 0) {
//           const r = (highlighted ? 2.6 : 1.5) * scale;

//           ctx.fillStyle = highlighted
//             ? "rgba(47,177,255,0.9)"
//             : "rgba(47,177,255,0.22)";

//           ctx.fillRect(
//             point[0] - r / 2,
//             point[1] - r / 2,
//             r,
//             r
//           );
//         }
//       });

//       // Animated connection routes
//       connections.forEach(([from, to], i) => {
//         const progress = ((time / 3600) + i * 0.29) % 1;
//         const tail = Math.max(0, progress - 0.5);

//         const alpha =
//           progress > 0.85 ? (1 - progress) / 0.15 : 1;

//         ctx.beginPath();

//         let drawing = false;

//         for (let k = 0; k <= 24; k++) {
//           const t = tail + ((progress - tail) * k) / 24;
//           const point = project(
//             arcPoint(locations[from], locations[to], t)
//           );

//           if (point[2] > -0.05) {
//             if (drawing) {
//               ctx.lineTo(point[0], point[1]);
//             } else {
//               ctx.moveTo(point[0], point[1]);
//               drawing = true;
//             }
//           } else {
//             drawing = false;
//           }
//         }

//         ctx.strokeStyle = `rgba(255,138,31,${0.85 * alpha})`;
//         ctx.lineWidth = 2 * scale;
//         ctx.stroke();

//         // Moving particle
//         const movingPoint = project(
//           arcPoint(locations[from], locations[to], progress)
//         );

//         if (movingPoint[2] > 0) {
//           ctx.fillStyle = "#ff8a1f";
//           ctx.beginPath();
//           ctx.arc(
//             movingPoint[0],
//             movingPoint[1],
//             3.2 * scale,
//             0,
//             TAU
//           );
//           ctx.fill();
//         }
//       });

//       // Location nodes
//       locations.forEach((location, i) => {
//         const point = project(location);

//         if (point[2] <= 0) return;

//         const phase = ((time / 1800) + i * 0.2) % 1;

//         ctx.strokeStyle =
//           i === 0
//             ? `rgba(255,138,31,${0.6 * (1 - phase)})`
//             : `rgba(47,177,255,${0.6 * (1 - phase)})`;

//         ctx.lineWidth = 2 * scale;

//         ctx.beginPath();
//         ctx.arc(
//           point[0],
//           point[1],
//           (i === 0 ? 6 : 4) * scale +
//             phase * 18 * scale,
//           0,
//           TAU
//         );
//         ctx.stroke();

//         ctx.fillStyle = i === 0 ? "#ff8a1f" : "#2fb1ff";

//         ctx.beginPath();
//         ctx.arc(
//           point[0],
//           point[1],
//           (i === 0 ? 7 : 4) * scale,
//           0,
//           TAU
//         );
//         ctx.fill();

//         if (i === 0) {
//           ctx.fillStyle = "#17324d";
//           ctx.font = `700 ${13 * scale}px sans-serif`;
//           ctx.fillText(
//             "Your business",
//             point[0] + 12 * scale,
//             point[1] - 12 * scale
//           );
//         }
//       });
//     };

//     // Pause animation when globe is outside viewport
//     const observer = new IntersectionObserver(([entry]) => {
//       visible = entry.isIntersecting;
//     });

//     observer.observe(canvas);

//     const resizeObserver = new ResizeObserver(resize);
//     resizeObserver.observe(canvas);

//     resize();

//     animationFrame = requestAnimationFrame(draw);

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       observer.disconnect();
//       resizeObserver.disconnect();
//     };
//   }, []);

//   return (
//     <div className="globe-stage relative mx-auto aspect-square w-full max-w-[760px]">

//       {/* Background glow */}
//       <div className="absolute inset-[12%] rounded-full bg-blue-300/20 blur-[80px]" />

//       {/* Orbit rings */}
//       <div className="absolute inset-[7%] rounded-full border border-blue-300/30" />

//       <div className="absolute inset-[13%] rounded-full border border-dashed border-blue-300/30 globe-orbit" />

//       <div className="absolute inset-[19%] rounded-full border border-blue-200/20" />

//       {/* Globe canvas */}
//       <canvas
//         ref={canvasRef}
//         role="img"
//         aria-label="Animated global digital marketing network"
//         className="absolute inset-0 z-10 h-full w-full"
//       />

//       {/* Center indicator */}
//       <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/60 bg-white/80 px-3 py-1.5 text-[9px] font-bold tracking-widest text-blue-600 shadow-lg backdrop-blur-md">
//         GLOBAL REACH
//       </div>

//       {/* GMB */}
//       <MetricCard
//         icon={MapPin}
//         title="GMB RANKING"
//         target={24}
//         suffix="%"
//         prefix="+"
//         color="#2fb1ff"
//         position="metric-top"
//         delay="0s"
//       />

//       {/* SEO */}
//       <MetricCard
//         icon={TrendingUp}
//         title="SEO RANKING"
//         target={3}
//         prefix="#"
//         color="#ff8a1f"
//         position="metric-left"
//         delay="0.5s"
//       />

//       {/* SMO */}
//       <MetricCard
//         icon={Users}
//         title="SMO REACH"
//         target={12800}
//         color="#8b5cf6"
//         position="metric-right"
//         delay="1s"
//       />

//       {/* Website traffic */}
//       <MetricCard
//         icon={Globe2}
//         title="WEBSITE TRAFFIC"
//         target={8500}
//         color="#0dba91"
//         position="metric-bottom-left"
//         delay="1.5s"
//       />

//       {/* Keywords */}
//       <MetricCard
//         icon={Search}
//         title="KEYWORDS"
//         target={142}
//         color="#f59e0b"
//         position="metric-bottom-right"
//         delay="2s"
//       />

//       {/* Digital network label */}
//       <div className="absolute bottom-[4%] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-[9px] font-bold tracking-[0.2em] text-slate-500 shadow-lg backdrop-blur-lg">
//         DIGITAL GROWTH ECOSYSTEM
//       </div>

//       <style>{`
//         .metric-card {
//           width: 195px;
//           animation: metricFloat 5s ease-in-out infinite;
//           will-change: transform;
//         }

//         .metric-top {
//           top: 2%;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         .metric-left {
//           top: 38%;
//           left: -1%;
//         }

//         .metric-right {
//           top: 38%;
//           right: -1%;
//         }

//         .metric-bottom-left {
//           bottom: 5%;
//           left: 8%;
//         }

//         .metric-bottom-right {
//           bottom: 5%;
//           right: 8%;
//         }

//         @keyframes metricFloat {
//           0%, 100% {
//             translate: 0 0;
//           }
//           50% {
//             translate: 0 -12px;
//           }
//         }

//         .globe-orbit {
//           animation: orbitSpin 35s linear infinite;
//         }

//         @keyframes orbitSpin {
//           to {
//             rotate: 360deg;
//           }
//         }

//         .chart-line {
//           stroke-dasharray: 180;
//           stroke-dashoffset: 180;
//           animation: chartDraw 2s ease forwards;
//         }

//         @keyframes chartDraw {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }

//         @media (max-width: 640px) {
//           .metric-card {
//             width: 145px;
//           }

//           .metric-top {
//             top: 1%;
//           }

//           .metric-left {
//             top: 34%;
//             left: -1%;
//           }

//           .metric-right {
//             top: 34%;
//             right: -1%;
//           }

//           .metric-bottom-left {
//             bottom: 7%;
//             left: 0;
//           }

//           .metric-bottom-right {
//             bottom: 7%;
//             right: 0;
//           }
//         }

//         @media (max-width: 380px) {
//           .metric-card {
//             width: 132px;
//           }

//           .metric-card .rounded-2xl {
//             padding: 9px;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .metric-card,
//           .globe-orbit {
//             animation: none;
//           }

//           .chart-line {
//             animation: none;
//             stroke-dashoffset: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  TrendingUp,
  Users,
  Globe2,
  Search,
  ArrowUpRight,
  Activity,
} from "lucide-react";
import "./Digitalglobe.css";
// ==========================================
// ANIMATED COUNTER
// ==========================================

function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setValue(Math.floor(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

// ==========================================
// MINI ANALYTICS GRAPH
// ==========================================

function MiniChart({ color = "#24baff" }) {
  return (
    <svg
      viewBox="0 0 100 34"
      className="h-8 w-full overflow-visible"
      fill="none"
    >
      <path
        d="M1 29 L13 25 L25 27 L38 17 L50 20 L62 11 L74 15 L87 5 L99 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="holo-chart"
      />
      <circle cx="99" cy="2" r="2.5" fill={color} />
    </svg>
  );
}

// ==========================================
// HOLOGRAPHIC METRIC PANEL
// ==========================================

function HoloMetric({
  icon: Icon,
  title,
  target,
  suffix = "",
  prefix = "",
  color = "#24baff",
  position,
  delay = "0s",
}) {
  const count = useCountUp(target);

  const formatted =
    target >= 1000
      ? `${(count / 1000).toFixed(1)}K`
      : count.toLocaleString("en-IN");

  return (
    <div
      className={`holo-panel absolute z-30 ${position}`}
      style={{
        animationDelay: delay,
        "--accent": color,
      }}
    >
      <div className="holo-panel-inner">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="holo-icon">
              <Icon size={16} />
            </div>

            <span className="truncate text-[9px] font-bold tracking-[0.15em] text-slate-300 sm:text-[10px]">
              {title}
            </span>
          </div>

          <ArrowUpRight
            size={13}
            className="shrink-0 text-emerald-400"
          />
        </div>

        {/* Metric */}
        <div className="mt-3 flex items-end justify-between gap-2">
          <div>
            <div className="whitespace-nowrap text-[23px] font-extrabold tracking-tight text-white sm:text-[26px]">
              {prefix}
              {formatted}
              {suffix}
            </div>

            <div className="mt-1 flex items-center gap-1 text-[9px] font-medium text-emerald-400">
              <TrendingUp size={10} />
              Growth indicator
            </div>
          </div>

          <div className="w-[65px] shrink-0 sm:w-[75px]">
            <MiniChart color={color} />
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="mt-2 flex items-center justify-between">
          <span className="text-[8px] tracking-wider text-slate-500">
            PERFORMANCE
          </span>

          <span
            className="text-[8px] font-bold tracking-widest"
            style={{ color }}
          >
            LIVE DEMO
          </span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// DIGITAL GLOBE
// ==========================================

export default function DigitalGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const TAU = Math.PI * 2;
    const DEG = Math.PI / 180;
    const tilt = 0.38;

    let width = 0;
    let height = 0;
    let radius = 0;
    let scale = 1;
    let rotation = -1.2;
    let animationFrame;
    let visible = true;

    // ======================================
    // CANVAS RESIZE
    // ======================================

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);

      width = canvas.clientWidth;
      height = canvas.clientHeight;

      if (!width || !height) return;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      radius = Math.min(width, height) * 0.34;
      scale = width / 600;
    };

    // ======================================
    // 3D VECTOR
    // ======================================

    const vector = (lat, lon) => [
      Math.cos(lat) * Math.sin(lon),
      Math.sin(lat),
      Math.cos(lat) * Math.cos(lon),
    ];

    const project = (v) => {
      const X =
        v[0] * Math.cos(rotation) +
        v[2] * Math.sin(rotation);

      const Z0 =
        -v[0] * Math.sin(rotation) +
        v[2] * Math.cos(rotation);

      const Y =
        v[1] * Math.cos(tilt) -
        Z0 * Math.sin(tilt);

      const Z =
        v[1] * Math.sin(tilt) +
        Z0 * Math.cos(tilt);

      return [
        width / 2 + X * radius,
        height / 2 - Y * radius,
        Z,
      ];
    };

    // ======================================
    // GLOBE SURFACE PARTICLES
    // ======================================

    const dots = [];
    const DOT_COUNT = 2200;

    for (let i = 0; i < DOT_COUNT; i++) {
      const lat = Math.asin(
        1 - (2 * (i + 0.5)) / DOT_COUNT
      );

      const lon = (i * 2.399963) % TAU;

      const a = lat / DEG;
      const o = lon / DEG;

      const highlighted =
        Math.sin(a * 0.06 + o * 0.035) +
          Math.sin(o * 0.08 - a * 0.03) +
          Math.cos(a * 0.05 + o * 0.06) >
        0.85;

      dots.push({
        position: vector(lat, lon),
        highlighted,
      });
    }

    // ======================================
    // GLOBAL LOCATIONS
    // ======================================

    const locations = [
      [10, 78],
      [51.5, -0.1],
      [40.7, -74],
      [37.8, -122.4],
      [25.2, 55.3],
      [1.35, 103.8],
      [-33.9, 151.2],
      [35.7, 139.7],
      [-23.5, -46.6],
      [30, 31],
    ].map(([lat, lon]) =>
      vector(lat * DEG, lon * DEG)
    );

    const connections = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [0, 8],
      [0, 9],
      [1, 2],
      [5, 7],
    ];

    // ======================================
    // CURVED CONNECTION ROUTES
    // ======================================

    const arcPoint = (a, b, t) => {
      const point = [
        a[0] + (b[0] - a[0]) * t,
        a[1] + (b[1] - a[1]) * t,
        a[2] + (b[2] - a[2]) * t,
      ];

      const length = Math.hypot(...point);

      const height =
        1 +
        0.3 *
          Math.sin(Math.PI * t) *
          Math.min(
            1,
            1 -
              (a[0] * b[0] +
                a[1] * b[1] +
                a[2] * b[2]) +
              0.3
          );

      return point.map((v) => (v / length) * height);
    };

    // ======================================
    // DRAW GLOBE
    // ======================================

    const draw = (time) => {
      animationFrame = requestAnimationFrame(draw);

      if (!visible || !width || !height) return;

      rotation += 0.002;

      ctx.clearRect(0, 0, width, height);

      // Outer atmosphere
      const atmosphere = ctx.createRadialGradient(
        width / 2 - radius * 0.3,
        height / 2 - radius * 0.3,
        radius * 0.05,
        width / 2,
        height / 2,
        radius * 1.3
      );

      atmosphere.addColorStop(0, "rgba(24,110,190,0.19)");
      atmosphere.addColorStop(0.55, "rgba(13,65,130,0.10)");
      atmosphere.addColorStop(1, "rgba(0,10,35,0)");

      ctx.fillStyle = atmosphere;
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height / 2,
        radius * 1.3,
        0,
        TAU
      );
      ctx.fill();

      // Globe body
      const globeGradient = ctx.createRadialGradient(
        width / 2 - radius * 0.35,
        height / 2 - radius * 0.35,
        radius * 0.05,
        width / 2,
        height / 2,
        radius
      );

      globeGradient.addColorStop(0, "#123b67");
      globeGradient.addColorStop(0.65, "#071d3c");
      globeGradient.addColorStop(1, "#020b20");

      ctx.save();
      ctx.shadowColor = "#168dff";
      ctx.shadowBlur = 45 * scale;
      ctx.fillStyle = globeGradient;
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height / 2,
        radius,
        0,
        TAU
      );
      ctx.fill();
      ctx.restore();

      // Surface particles
      dots.forEach(({ position, highlighted }) => {
        const point = project(position);

        if (point[2] > 0) {
          const r =
            (highlighted ? 2.6 : 1.5) * scale;

          ctx.fillStyle = highlighted
            ? "rgba(55,190,255,0.95)"
            : "rgba(47,177,255,0.38)";

          ctx.fillRect(
            point[0] - r / 2,
            point[1] - r / 2,
            r,
            r
          );
        }
      });

      // Connection routes
      connections.forEach(([from, to], i) => {
        const progress =
          (time / 3600 + i * 0.29) % 1;

        const tail = Math.max(0, progress - 0.5);

        const alpha =
          progress > 0.85
            ? (1 - progress) / 0.15
            : 1;

        ctx.beginPath();

        let drawing = false;

        for (let k = 0; k <= 24; k++) {
          const t =
            tail + ((progress - tail) * k) / 24;

          const point = project(
            arcPoint(
              locations[from],
              locations[to],
              t
            )
          );

          if (point[2] > -0.05) {
            if (drawing) {
              ctx.lineTo(point[0], point[1]);
            } else {
              ctx.moveTo(point[0], point[1]);
              drawing = true;
            }
          } else {
            drawing = false;
          }
        }

        ctx.strokeStyle =
          `rgba(255,138,31,${0.9 * alpha})`;

        ctx.lineWidth = 1.8 * scale;
        ctx.shadowColor = "#ff8a1f";
        ctx.shadowBlur = 8 * scale;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Moving particle
        const movingPoint = project(
          arcPoint(
            locations[from],
            locations[to],
            progress
          )
        );

        if (movingPoint[2] > 0) {
          ctx.fillStyle = "#ff982f";
          ctx.shadowColor = "#ff8a1f";
          ctx.shadowBlur = 12 * scale;

          ctx.beginPath();
          ctx.arc(
            movingPoint[0],
            movingPoint[1],
            3 * scale,
            0,
            TAU
          );
          ctx.fill();

          ctx.shadowBlur = 0;
        }
      });

      // Location nodes
      locations.forEach((location, i) => {
        const point = project(location);

        if (point[2] <= 0) return;

        const phase =
          (time / 1800 + i * 0.2) % 1;

        const orange = i === 0;

        ctx.strokeStyle = orange
          ? `rgba(255,138,31,${0.65 * (1 - phase)})`
          : `rgba(47,177,255,${0.65 * (1 - phase)})`;

        ctx.lineWidth = 1.8 * scale;

        ctx.beginPath();
        ctx.arc(
          point[0],
          point[1],
          (orange ? 6 : 4) * scale +
            phase * 17 * scale,
          0,
          TAU
        );
        ctx.stroke();

        ctx.fillStyle = orange ? "#ff982f" : "#2fbaff";

        ctx.beginPath();
        ctx.arc(
          point[0],
          point[1],
          (orange ? 6 : 3.5) * scale,
          0,
          TAU
        );
        ctx.fill();

        if (orange) {
          ctx.fillStyle = "#ffffff";
          ctx.font = `600 ${12 * scale}px sans-serif`;

          ctx.fillText(
            "Your business",
            point[0] + 11 * scale,
            point[1] - 12 * scale
          );
        }
      });

      // Globe outline
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height / 2,
        radius,
        0,
        TAU
      );

      ctx.strokeStyle = "rgba(67,175,255,0.35)";
      ctx.lineWidth = 1 * scale;
      ctx.stroke();
    };

    // ======================================
    // VISIBILITY + RESIZE OBSERVERS
    // ======================================

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });

    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    resize();

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  // ========================================
  // UI
  // ========================================

  return (
    <div className="cosmic-stage relative mx-auto aspect-square w-full max-w-[760px]">

      {/* Cosmic ambient lighting */}
      <div className="cosmic-glow absolute inset-[5%]" />

      <div className="cosmic-glow-secondary absolute inset-[20%]" />

      {/* Orbital rings */}
      <div className="cosmic-orbit cosmic-orbit-one" />
      <div className="cosmic-orbit cosmic-orbit-two" />
      <div className="cosmic-orbit cosmic-orbit-three" />

      {/* Orbit node decorations */}
      <div className="orbit-node orbit-node-one" />
      <div className="orbit-node orbit-node-two" />
      <div className="orbit-node orbit-node-three" />

      {/* Canvas globe */}
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Animated digital globe with global network connections"
        className="absolute inset-0 z-10 h-full w-full"
      />

      {/* Center holographic indicator */}
      <div className="cosmic-center-label absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <Activity size={13} />
        <span>GLOBAL NETWORK</span>
      </div>

      {/* Holographic analytics panels */}

      <HoloMetric
        icon={MapPin}
        title="GMB RANKING"
        target={24}
        prefix="+"
        suffix="%"
        color="#28baff"
        position="holo-top"
        delay="0s"
      />

      <HoloMetric
        icon={TrendingUp}
        title="SEO RANKING"
        target={3}
        prefix="#"
        color="#ff932f"
        position="holo-left"
        delay="0.5s"
      />

      <HoloMetric
        icon={Users}
        title="SMO REACH"
        target={12800}
        color="#a78bfa"
        position="holo-right"
        delay="1s"
      />

      <HoloMetric
        icon={Globe2}
        title="WEBSITE TRAFFIC"
        target={8500}
        color="#20d9b0"
        position="holo-bottom-left"
        delay="1.5s"
      />

      <HoloMetric
        icon={Search}
        title="KEYWORDS"
        target={142}
        color="#ffb34f"
        position="holo-bottom-right"
        delay="2s"
      />

      {/* Bottom status */}
      <div className="cosmic-status absolute bottom-[1%] left-1/2 z-30 -translate-x-1/2">
        <span className="cosmic-status-dot" />
        DIGITAL GROWTH ECOSYSTEM
      </div>
    </div>
  );
}
