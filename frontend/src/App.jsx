import Cta from "./components/cta/cta";
import Featured from "./components/featured/featured";
import Hero from "./components/hero/hero";
import Splash from "./components/splash/splash";
import Footer from "./components/footer/footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Splash />
      <main>
        <Hero />
        <Featured />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
