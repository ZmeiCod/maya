// import React from "react";
import { Link } from "react-router-dom";

import { ThemeProvider } from "../ChangeTheme";
import Header from "../Header/Header";
import Button from "../ui/Button/Button";
import classes from "./NotFound.module.css";

import svg from "../../images/svg.svg";
import eror404 from "../../images/Error/NotFound.svg";

const PageNotFound = () => {
  return (
    <ThemeProvider>
      <>
        <Header />
        <main className={classes.wrapper}>
          <div>
            <div>
              <div>
                <h1 className={classes.h1}>Страница не найдена</h1>
                <h3 className={classes.h3}>
                  Повторите корректность введённого адреса <br /> или повторите
                  попытку позже
                </h3>
              </div>
              <div className={classes.divButton}>
                <Link to="/">
                  <Button >
                    <img className={classes.strelka} src={svg} alt="" />
                    На главную</Button>
                </Link>
                <Button onClick={() => window.location.reload()}>Обновить</Button>
              </div>
            </div>
            <img className={classes.errorIMG} src={eror404} alt="Eror404" />
          </div>
        </main>
      </>
    </ThemeProvider>
  );
};

export default PageNotFound;
