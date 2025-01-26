import Header from "../Header/Header";
import { ThemeProvider } from "../ChangeTheme";
import Footer from "../Footer/Footer";
import { Carousel } from 'antd';
import Arrow from "../../images/arrow.svg";
import slider_list from "../../images//Slider/slider_list.png";
import { useState, useEffect } from "react";

const contentStyle = {
  marginBottom: '20px',
  height: '345px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  // overflow: 'hidden',
};

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <>
        <Header />
        <Carousel autoplay style={{marginTop: '30px'}}>
          <div>
            <h3 style={contentStyle}>
              <img src={slider_list} alt="slider list" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <main>
          <h1>Тут будет титульный текст</h1>
          <h3>Тут будет текст для описания</h3>
          <div style={{ height: "1000px" }}></div>
          {scrollPosition > 400 && (
            <button onClick={scrollToTop} className="topbth">
              <img src={Arrow} alt="Top" />
            </button>
          )}
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Home;
