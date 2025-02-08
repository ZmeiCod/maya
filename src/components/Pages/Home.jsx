import Header from "../Header/Header";
import { ThemeProvider } from "../ChangeTheme";
import Footer from "../Footer/Footer";
import { Carousel } from "antd";
import Arrow from "../../images/arrow.svg";
import slider_list from "../../images//Slider/slider_list.png";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Categories from "../Categories/Categories";
import CategoriesBlocks from "../Categories/CategoriesBlocks";


const contentStyle = {
  marginBottom: "20px",
  height: "345px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#EDE4CA",
};

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 20px;
    height: 20px;
    opacity: 1;
    background: #ede4ca;
    border-radius: 100%;
    margin-top: 15px;
  }
  > .slick-dots li.slick-active button {
    width: 20px;
    height: 20px;
    background: #db7611;
    border-radius: 100%;
  }
`;

const CarouselList = [slider_list, slider_list, slider_list, slider_list];

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
        <CarouselWrapper autoplay>
          {CarouselList.map((data, obj) => (
            <div key={obj}>
              <img src={data} alt="slider list" style={contentStyle} />
            </div>
          ))}
        </CarouselWrapper>
        <Categories></Categories>
        <main>
          <CategoriesBlocks></CategoriesBlocks>

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
