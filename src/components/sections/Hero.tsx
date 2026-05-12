"use client";

import { useEffect, useRef, useState } from "react";

/* ─── TECH STACK LOGOS (inline SVG, monochrome) ──────────────────── */
const TECH_LOGOS = [
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <mask id="nxt" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{maskType:"alpha"}}>
          <circle cx="90" cy="90" r="90" fill="black"/>
        </mask>
        <g mask="url(#nxt)">
          <circle cx="90" cy="90" r="90" fill="currentColor" fillOpacity="0.08"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1V69.3L139.999 164.845C143.333 162.419 146.509 159.816 149.508 157.52Z" fill="currentColor"/>
          <rect x="115" y="54" width="12" height="72" fill="currentColor"/>
        </g>
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <circle cx="12" cy="12" r="2.05" fill="currentColor"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.3" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.3" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "Flutter",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.014 11.072L7.857 17.53l6.47 6.471H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
  },
  {
    name: "Firebase",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.2-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <svg viewBox="0 0 109 113" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z"/>
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874L63.708 110.284z" fillOpacity="0.5"/>
        <path d="M45.317 2.716c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.282c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.716z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M11.998 24a1.4 1.4 0 0 1-.7-.187l-2.225-1.317c-.332-.186-.17-.252-.06-.29.443-.154.532-.189 1.004-.457a.17.17 0 0 1 .164.013l1.71 1.014c.061.037.148.037.204 0l6.672-3.851c.061-.036.1-.109.1-.184V7.259c0-.077-.039-.148-.1-.187l-6.67-3.847a.188.188 0 0 0-.203 0L5.226 7.072a.216.216 0 0 0-.104.187v7.699c0 .075.04.148.104.184l1.827 1.055c.99.495 1.597-.088 1.597-.674V8.048a.191.191 0 0 1 .191-.191h.833a.19.19 0 0 1 .19.191v7.475c0 1.319-.718 2.074-1.967 2.074-.384 0-.686 0-1.529-.415L4.39 16.118a1.406 1.406 0 0 1-.7-1.216V7.203c0-.501.265-.967.7-1.217l6.672-3.853a1.457 1.457 0 0 1 1.404 0l6.671 3.853c.436.25.7.716.7 1.217v7.699c0 .501-.264.967-.7 1.216l-6.671 3.853a1.399 1.399 0 0 1-.468.029zm2.06-5.3c-2.917 0-3.525-1.34-3.525-2.463a.19.19 0 0 1 .19-.191h.85a.19.19 0 0 1 .189.165c.128.864.513 1.302 2.298 1.302 1.414 0 2.016-.32 2.016-1.07 0-.433-.17-.754-2.37-1.03-1.838-.23-2.974-.738-2.974-2.583 0-1.703 1.435-2.718 3.842-2.718 2.701 0 4.038.937 4.208 2.953a.19.19 0 0 1-.05.146.19.19 0 0 1-.14.06h-.854a.19.19 0 0 1-.186-.151c-.263-1.17-.906-1.545-2.978-1.545-2.194 0-2.449.765-2.449 1.337 0 .694.302.898 2.298 1.29 1.978.385 3.047.931 3.047 2.313 0 1.84-1.534 2.89-4.212 2.89z"/>
      </svg>
    ),
  },
  {
    name: "Go",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .058.035.035.07l-.093.28c-.023.047-.082.07-.117.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.771.105-.129.198-.269.315-.432H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.971.596-1.274a.315.315 0 0 1 .292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 0 1-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2zM17.97 14.5c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 0 1-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.951 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.632.07-.934.107zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.811-2.384-1.554-1.087.245-1.788.935-2.02 2.09-.198 1.004.327 2.033 1.25 2.455.7.304 1.415.28 2.115-.024.95-.432 1.52-1.239 1.273-2.58z"/>
      </svg>
    ),
  },
  {
    name: "Laravel",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012a.39.39 0 0 1-.056-.023L.533 18.649a.378.378 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.023.022-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001L4.951.198a.38.38 0 0 1 .378 0L9.7 2.881h.002c.015.01.027.022.04.033l.038.027c.013.014.02.03.033.045.008.011.018.021.024.033.01.02.017.038.023.058.003.013.011.021.014.033.009.032.014.065.014.098v9.652l3.76-2.164V5.527c0-.033.006-.065.014-.098.003-.012.011-.02.015-.033a.319.319 0 0 1 .022-.058c.007-.012.018-.022.025-.033.012-.015.019-.03.031-.044.012-.012.026-.02.037-.028.015-.01.028-.023.042-.032h.001l4.371-2.683a.38.38 0 0 1 .378 0l4.368 2.683c.015.01.027.021.042.031.012.01.025.018.036.028.013.014.021.03.032.044.008.012.019.021.025.033.01.02.017.038.022.058.003.012.011.021.013.033zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75V13.93l-2.145 1.231-6.125 3.516v4.326zM1.093 3.418v14.904l8.273 4.77v-4.325l-4.322-2.47-.002-.003-.002-.003c-.013-.007-.025-.016-.036-.024-.012-.009-.024-.018-.035-.027l-.001-.002c-.011-.01-.02-.021-.028-.031-.01-.013-.021-.024-.028-.037-.008-.013-.014-.027-.02-.041-.006-.013-.015-.026-.019-.04-.004-.014-.004-.029-.008-.043-.002-.014-.007-.027-.008-.042V5.578L3.272 4.32zm4.71-2.514L2.02 3.418l3.783 2.184 3.784-2.184zm4.512 4.51L6.533 7.6 3.94 9.19v4.669l2.59-1.488 3.785-2.183zm4.663-4.51L10.195 3.418l3.782 2.184 3.785-2.184zm-4.51 7.752l-2.184-1.257-1.578-.908v4.283l2.183 1.256 1.58.908zM19.3 3.418l-3.782 2.184 3.782 2.184 3.782-2.184zm-.377 4.67l-2.182-1.257-1.578-.908v4.283l2.182 1.256 1.578.908z"/>
      </svg>
    ),
  },
  {
    name: "Dart",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{height:18,width:18}}>
        <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.316 2.791 2.791 0 0 1 1.892.765l4.337 4.252L4.105 4.105zm16.747 5.766L20.2 9.2l-3.246-3.194L10.068 11.9l8.743 2.04a3.099 3.099 0 0 0 2.115-.22 3.13 3.13 0 0 0 1.353-1.353 3.108 3.108 0 0 0-.527-2.496zm-6.58 10.313L8.166 15.22l-4.017 3.978a2.81 2.81 0 0 0 .74 1.918 2.781 2.781 0 0 0 1.835.884l8.548-1.816zm-9.842-5.15L8.166 11.9 3.474 6.527A3.107 3.107 0 0 0 .316 9.684a3.079 3.079 0 0 0 .316 1.481c1.259 2.526 3.785 7.579 3.785 7.579z"/>
      </svg>
    ),
  },
];

/* ─── LOGO PILL ───────────────────────────────────────────────────── */
function LogoPill({ tech }: { tech: (typeof TECH_LOGOS)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mx-2 flex flex-shrink-0 items-center gap-2 select-none cursor-default rounded-xl px-4 py-2"
      style={{
        background: hovered ? "rgba(248,250,252,1)" : "rgba(248,250,252,0.5)",
        border: "1px solid rgba(226,232,240,0.9)",
        backdropFilter: "blur(6px)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(59,130,246,0.10), 0 2px 8px rgba(0,0,0,0.05)"
          : "none",
        transform: hovered ? "translateY(-1.5px) scale(1.04)" : "translateY(0) scale(1)",
        transition: "all 0.18s ease",
        color: hovered ? "#334155" : "#94a3b8",
      }}
    >
      <span style={{ opacity: hovered ? 1 : 0.5, transition: "opacity 0.18s ease", display: "flex" }}>
        {tech.svg}
      </span>
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          color: hovered ? "#334155" : "#94a3b8",
          transition: "color 0.18s ease",
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}

/* ─── MARQUEE TRACK ───────────────────────────────────────────────── */
function TechMarquee() {
  const items = [...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{ background: "linear-gradient(to right, rgba(255,255,255,0.98), transparent)" }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{ background: "linear-gradient(to left, rgba(255,255,255,0.98), transparent)" }}
      />
      {/* Marquee */}
      <div
        className="group flex items-center"
        style={{ width: "max-content" }}
      >
        <div
          className="flex items-center group-hover:[animation-play-state:paused]"
          style={{ animation: "marqueeSlide 35s linear infinite" }}
        >
          {items.map((tech, i) => (
            <LogoPill key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────── */
export default function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      const rect = spotlightRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const section = spotlightRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    return () => section?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={spotlightRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      style={{ fontFamily: "'Geist', 'DM Sans', system-ui, sans-serif" }}
    >
      {/* NOISE */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* GRID */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(226 232 240 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* BLOBS */}
      <div className="absolute z-0" style={{ top:"5%", left:"50%", transform:"translateX(-50%)", width:700, height:500, background:"radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 70%)", filter:"blur(40px)", animation:"floatBlob1 8s ease-in-out infinite" }} />
      <div className="absolute z-0" style={{ top:"30%", left:"15%", width:350, height:350, background:"radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 70%)", filter:"blur(60px)", animation:"floatBlob2 10s ease-in-out infinite" }} />
      <div className="absolute z-0" style={{ top:"20%", right:"10%", width:400, height:400, background:"radial-gradient(ellipse at center, rgba(14,165,233,0.05) 0%, transparent 70%)", filter:"blur(60px)", animation:"floatBlob1 12s ease-in-out infinite reverse" }} />

      {/* SPOTLIGHT */}
      <div
        className="pointer-events-none absolute z-0 transition-opacity duration-300"
        style={{ left: mousePos.x - 300, top: mousePos.y - 300, width:600, height:600, background:"radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)", borderRadius:"50%", opacity: isHovered ? 1 : 0, filter:"blur(20px)" }}
      />

      {/* CONTENT */}
      <div
        className="container relative z-20 mx-auto px-6 pt-12 pb-24 text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* BADGE */}
        <div className={`inline-flex items-center gap-2.5 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay:"100ms" }}>
          <div className="flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium" style={{ background:"linear-gradient(135deg, rgba(239,246,255,0.9), rgba(219,234,254,0.9))", border:"1px solid rgba(147,197,253,0.5)", backdropFilter:"blur(8px)", color:"#1d4ed8", boxShadow:"0 1px 2px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.8)" }}>
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" style={{ animation:"ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            20+ Project Selesai · Dipercaya UMKM &amp; Mahasiswa
          </div>
        </div>

        {/* HEADLINE */}
        <h1 className={`text-[2.8rem] sm:text-[3.75rem] md:text-[5rem] lg:text-[5.5rem] font-black leading-[1.05] tracking-[-0.03em] mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay:"200ms" }}>
          <span className="block text-gray-900" style={{ letterSpacing:"-0.04em" }}>Dari Ide Menjadi</span>
          <span className="block" style={{ background:"linear-gradient(135deg, #1d4ed8 0%, #3b82f6 40%, #0ea5e9 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", letterSpacing:"-0.04em" }}>
            Produk Digital Profesional.
          </span>
        </h1>

        {/* SUB */}
        <p className={`max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay:"350ms", fontWeight:400 }}>
          Jasa development <span className="text-gray-700 font-medium">Website Next.js</span> dan <span className="text-gray-700 font-medium">Aplikasi Flutter</span> yang rilis cepat, tampil elegan, dan siap scale bersama bisnis Anda.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center mb-14 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay:"480ms" }}>
          <a href="https://wa.me/+6288987163167?text=Halo,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20IT." target="_blank" rel="noopener noreferrer"
            className="group relative inline-flex h-[52px] items-center justify-center gap-2 rounded-xl px-8 text-[15px] font-semibold text-white overflow-hidden"
            style={{ background:"linear-gradient(135deg, #1d4ed8, #3b82f6)", boxShadow:"0 0 0 1px rgba(59,130,246,0.5), 0 4px 12px rgba(59,130,246,0.35), 0 1px 2px rgba(0,0,0,0.08)", transition:"all 0.2s ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 1px rgba(59,130,246,0.6), 0 8px 24px rgba(59,130,246,0.4), 0 2px 4px rgba(0,0,0,0.1)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 1px rgba(59,130,246,0.5), 0 4px 12px rgba(59,130,246,0.35), 0 1px 2px rgba(0,0,0,0.08)"; }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background:"linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)" }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Konsultasi Gratis via WhatsApp
          </a>
          <a href="#portfolio"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl px-8 text-[15px] font-medium text-gray-700"
            style={{ background:"rgba(255,255,255,0.9)", border:"1px solid rgba(203,213,225,0.8)", boxShadow:"0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)", backdropFilter:"blur(8px)", transition:"all 0.2s ease" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(147,197,253,0.8)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(203,213,225,0.8)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)"; }}
          >
            Lihat Portfolio
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>


        {/* ── TECH STACK MARQUEE ─────────────────────────────────────── */}
        <div
          className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "720ms" }}
        >
          {/* Divider + label */}
          <div className="flex items-center gap-4 mb-5 justify-center">
            <div className="h-px flex-1 max-w-[80px]" style={{ background:"linear-gradient(to right, transparent, rgba(203,213,225,0.6))" }} />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Tech Stack
            </span>
            <div className="h-px flex-1 max-w-[80px]" style={{ background:"linear-gradient(to left, transparent, rgba(203,213,225,0.6))" }} />
          </div>

          {/* Glass container */}
          <div
            className="relative mx-auto overflow-hidden rounded-2xl py-2.5"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(226,232,240,0.75)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.95)",
              maxWidth: "80%",
            }}
          >
            {/* Ambient inner glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ background:"radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.025) 0%, transparent 100%)" }}
            />
            <TechMarquee />
          </div>

        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10" style={{ background:"linear-gradient(to right, transparent, rgba(203,213,225,0.6), transparent)" }} />

      {/* KEYFRAMES */}
      <style>{`
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
        @keyframes floatBlob1 {
          0%, 100% { transform: translateX(-50%) translateY(0px) scale(1); }
          33% { transform: translateX(-50%) translateY(-20px) scale(1.03); }
          66% { transform: translateX(-50%) translateY(10px) scale(0.97); }
        }
        @keyframes floatBlob2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
        }
        @keyframes marqueeSlide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}