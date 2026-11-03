import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';
import './HomePage.css';

function HomePage() {
  return (
    <>
      <main id="main-content" className="home-main">
        <SlideShow />
        <section className="topic iframe-topic">
          <div className="one">
            <h2>Explore the ocean</h2>
            <p>
              Take a closer look at the ocean habitats sharks call home.
            </p>
            <iframe
              className="ocean-frame"
              title="Illustrated overview of shark ocean habitats"
              sandbox=""
              srcDoc={`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{margin:0;padding:16px;background:#d9f1fb;color:#12354a;font:16px Verdana,sans-serif}.ocean{display:grid;min-height:180px;grid-template-rows:1fr 1fr 1fr;border:2px solid #12354a;background:linear-gradient(#ccecff,#1689ad 54%,#064c75)}.zone{display:flex;align-items:center;justify-content:space-between;padding:8px 14px;border-bottom:1px solid #ffffff88}.zone:last-child{border:0}.label{font-weight:bold}.animal{font-size:1.6rem}</style><main class="ocean" aria-label="Three ocean habitat zones"><section class="zone"><span class="label">Sunlit waters</span><span class="animal" aria-hidden="true">🐟 🦈</span></section><section class="zone"><span class="label">Open ocean</span><span class="animal" aria-hidden="true">🐬 🦈</span></section><section class="zone"><span class="label">Ocean floor</span><span class="animal" aria-hidden="true">🪸 🦈</span></section></main></html>`}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
