import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  const isVideo = src.endsWith(".mp4");

  return (
    <div className="relative size-full">
      {isVideo ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      ) : (
        <img
          src={src}
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-100">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 rounded-full bg-white px-5 py-2 text-[10px] uppercase text-black"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.15), transparent 80%)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">View</p>
          </div>
        )}
      </div>
    </div>
  );
};

import AnimatedTitle from "./AnimatedTitle";

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-100">
          WE ARE VALORANT
        </p>
        <AnimatedTitle
          title="DEFY THE <br /> LIMITS OF GAMING"
          containerClass="mt-5 !text-blue-100"
        />
        <p className="max-w-md font-circular-web text-lg text-blue-100 opacity-50">
          Compete in intense 5v5 battles with precise gunplay and tactical abilities.
Outsmart opponents across 13 rounds in Competitive, Unranked, Deathmatch, and Spike Rush.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              ENTER THE BATTLEFIE<b>L</b>D
            </>
          }
          description="Step into high-stakes tactical combat where every decision can lead your team to victory."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Age<b>n</b>t<b>s</b>
              </>
            }
            description="Choose from unique agents, each bringing their own skills and playstyle to the battlefield."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                A<b>b</b>ilities
              </>
            }
            description="Master powerful abilities that can shift the momentum of every round."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                M<b>a</b>ps
              </>
            }
            description="Battle across dynamic maps designed for strategy, teamwork, and intense fights."
            isComingSoon
          />
        </BentoTilt>
        
        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-5.mp4"
            title={
              <>
                pl<b>a</b>y <b>m</b>odes
              </>
            }
            description="Experience multiple game modes ranging from competitive matches to fast-paced casual action."
            isComingSoon
          />
        </BentoTilt>
        
        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-6.mp4"
            title={
              <>
                p<b>r</b>e<b>m</b>ium We<b>a</b>pons Skin<b>s</b>
              </>
            }
            description="Customize your arsenal with stunning weapon skins featuring stylish designs and effects.

"
            isComingSoon
          />
        </BentoTilt>

      </div>
    </div>
  </section>
);

export default Features;
