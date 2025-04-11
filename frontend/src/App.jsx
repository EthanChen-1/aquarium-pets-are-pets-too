import AquariumForm from "./components/aquarium-form/aquarium-form";
import Hero from "./components/hero/hero";
import Splash from "./components/splash/splash";
import { useState } from "react";
import AquariumList from "./components/aquarium-list/aquarium-list";

function App() {
  const [amount, setAmount] = useState(1);
  return (
    <div>
      <Splash />
      <main>
        <Hero />
        <AquariumForm setAmount={setAmount} />
        <AquariumList numOfAquariums={amount} />
      </main>
    </div>
  );
}

export default App;
