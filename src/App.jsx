import { StarBackground } from "./components/StarBackground";
import QRCodeGenerator from "./QRCodeGenerator";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <StarBackground />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <QRCodeGenerator />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
