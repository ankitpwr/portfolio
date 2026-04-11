import LightRays from "./LightRays";

export default function Banner() {
  return (
    <div className="relative w-full h-46 ">
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
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
      <div className="absolute left-1/2 -translate-1/2 top-16 ">
        <h1>"Code Karo"</h1>
        <h1>"Sab Chutiye hai"</h1>
      </div>
    </div>
  );
}
