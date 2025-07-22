import { StarBackground } from "./components/StarBackground";
import QRCodeGenerator from "./QRCodeGenerator";
import { Footer } from "./components/Footer";
import LightRays from "./components/LightRays/LightRays";
import TargetCursor from "./components/TargetCursor/TargetCursor";

function App() {
  return (
    <div className="w-full">
      <TargetCursor />
      <div className="flex absolute h-full w-full z-[-999]">
        <LightRays
          raysOrigin="top-center"
          raysColor="##f4f4f4"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      <div className="flex flex-col">
        <main>
          <QRCodeGenerator />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
