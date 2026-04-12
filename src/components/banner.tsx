import LightRays from "./LightRays";

export default function Banner() {
  return (
    <div className="relative w-full h-36  overflow-hidden shadow-2xl">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={1}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays absolute inset-0"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />

      {/* Center text using Flexbox instead of absolute offset math */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h2 className="font-geist italic tracking-widest text-zinc-400 text-sm">
          "Code Karo"
        </h2>
        <h2 className="font-geist italic tracking-wider text-zinc-600 text-xs mt-1">
          "Sab Chutiye hai"
        </h2>
      </div>
    </div>
  );
}
