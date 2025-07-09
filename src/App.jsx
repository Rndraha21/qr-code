import { StarBackground } from "./components/StarBackground";
import QRCodeGenerator from "./QRCodeGenerator";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <StarBackground />
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
