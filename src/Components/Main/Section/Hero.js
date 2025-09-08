import modelBoy from '../../../assets/image/model/model_boy.png';
import '../../../assets/css/main.css';
import '../../../assets/css/snow_fall.css';
import { useEffect } from 'react';
import LazyImage from '../../../assets/js/LazyImage';
import "../../../assets/css/main.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
<>
      <section className="hero text-white d-flex align-items-start">
        <div className="snow-container"></div>
        <div className="bg-hero d-flex align-items-start">
            <div className="container d-flex align-items-end justify-content-between">
                <div className="w-full px-0 px-lg-4 py-2 py-lg-5">
                    <div className="d-flex flex-column align-items-start gap-2">
                        <h1 className="fw-bold mb-4 fs-1">Apki Digital Duniya</h1>
                        <ul className="list-unstyled d-flex flex-column gap-3 gap-lg-4">
                            <li><span className="bg-success px-2 py-1 rounded-circle"><i className="fa fa-check" aria-hidden="true"></i></span> <span className="fs-6">Recharge & Utility Bill Payment</span></li>
                            <li><span className="bg-success px-2 py-1 rounded-circle"><i className="fa fa-check" aria-hidden="true"></i></span> <span className="fs-6">Bus Booking In Just Few Clicks</span></li>
                            <li><span className="bg-success px-2 py-1 rounded-circle"><i className="fa fa-check" aria-hidden="true"></i></span> <span className="fs-6">Shop Smart With TradGo</span></li>
                        </ul>
                        <p className="d-none d-sm-block" style={{maxWidth:"750px"}}>TradGo is a versatile online service provider offering a wide range of services to simplify your life. From mobile recharges to bill payments like electricity, insurance, FASTag recharge, water bills, and much more, TradGo has you covered. <br/>Experience quick, secure, and hassle-free transactions all in one app—designed to make your everyday payments effortless.</p>
                        <div className="d-flex align-items-center justify-content-center bg-white rounded py-2 py-lg-3 px-3 px-lg-4 gap-3 gap-lg-4">
                            <div className="text-center">
                                <p className="text-secondary display-4 fs-3 fw-bold mb-0"> 5M<span>+</span> </p>
                                <p className="fs-5 text-black mb-0">Users</p>
                            </div>
                            <div style={{height:"60px",width:"3px",backgroundImage:"linear-gradient(0deg, #20a6db00, #20a7db, #20a7db00)"}}/>
                           
                            <div className="text-center">
                                <p className="text-secondary display-4 fs-3 fw-bold mb-0">4.7<span
                                        className="text-warning">★</span></p>
                                <p className="fs-5 text-nowrap text-black mb-0">Play Store</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block">
                <LazyImage src={modelBoy} alt="Boy" className="model_img"/>
                    {/* <img data-src={modelBoy} alt="Boy" className="model_img" /> */}
                </div>
            </div>
        </div>
    </section>
     
</>

 
  );
}

export default Hero;
