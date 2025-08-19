import modelBoy from '../../../assets/image/model/model_boy.png';
import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/main.css';
import '../../../assets/css/snow_fall.css';
import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const snowContainer = document.querySelector(".snow-container");

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 1.25;
    const pauseWhenNotActive = true;
    const maxSnowflakes = 200;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
      const size = Math.random() * 5 + 1;
      const viewportWidth = window.innerWidth - size;
      const viewportHeight = window.innerHeight;

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * viewportWidth}px`;
      snowflake.style.top = `-${size}px`;

      const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
      snowflake.style.animationDuration = `${animationDuration}s`;
      snowflake.style.animationTimingFunction = "linear";
      snowflake.style.animationName =
        Math.random() < 0.5 ? "fall" : "diagonal-fall";

      setTimeout(() => {
        if (parseInt(snowflake.style.top, 10) < viewportHeight) {
          resetSnowflake(snowflake);
        } else {
          snowflake.remove();
        }
      }, animationDuration * 1000);
    }

    function createSnowflake() {
      if (snowflakes.length < maxSnowflakes) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflakes.push(snowflake);
        snowContainer.appendChild(snowflake);
        resetSnowflake(snowflake);
      }
    }

    function generateSnowflakes() {
      const numberOfParticles =
        Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
        particlesPerThousandPixels;
      const interval = 5000 / numberOfParticles;

      clearInterval(snowflakeInterval);
      snowflakeInterval = setInterval(() => {
        if (isTabActive && snowflakes.length < maxSnowflakes) {
          requestAnimationFrame(createSnowflake);
        }
      }, interval);
    }

    function handleVisibilityChange() {
      if (!pauseWhenNotActive) return;
      isTabActive = !document.hidden;
      if (isTabActive) {
        generateSnowflakes();
      } else {
        clearInterval(snowflakeInterval);
      }
    }

    generateSnowflakes();
    window.addEventListener("resize", () => {
      clearInterval(snowflakeInterval);
      setTimeout(generateSnowflakes, 1000);
    });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(snowflakeInterval);
      window.removeEventListener("resize", generateSnowflakes);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="hero d-flex align-items-center justify-content-center text-white">
      <div className="snow-container"></div>
      <div className="container">
        <div className="row">
          {/* Left Text Section */}
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <div className="d-flex flex-column gap-2">
              <h1 className="fw-bold mb-4 title">Apki Digital Duniya</h1>
              <p>TradGo is a versatile online service provider offering a wide range of services to
                simplify your life. From mobile recharges to bill payments like electricity,
                insurance, FASTag recharge, water bills, and much more, TradGo has you covered. <br /> Experience
                quick, secure, and hassle-free transactions all in one app—designed to make your
                everyday payments effortless.</p>
              {/* Stats Section */}
              <div
                style={{ width: 'min-content' }}
                className="d-none d-md-flex align-items-center justify-content-center bg-white rounded py-2 py-lg-3 px-4 px-lg-5 gap-5 mb-3 mb-lg-5"
              >
                <div className="text-center">
                  <h2 className="text-secondary display-4 fw-bold mb-0">
                    5M<span>+</span>
                  </h2>
                  <p className="h4 text-black mb-0">Users</p>
                </div>
                <div
                  style={{
                    height: '120px',
                    width: '4px',
                    backgroundImage:
                      'linear-gradient(0deg, #20a6db00, #20a7db, #20a7db00)'
                  }}
                ></div>
                <div className="text-center">
                  <h2 className="text-secondary display-4 fw-bold mb-0">
                    4.7<span className="text-warning">★</span>
                  </h2>
                  <p className="h4 text-black mb-0">Play Store</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-md-6 d-none d-md-block">
            <img src={modelBoy} alt="Boy" className="model_img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
