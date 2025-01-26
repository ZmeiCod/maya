import { useContext, useState } from "react";
import logo from "../../images/Header/logo.svg";
import basket from "../../images/Drawer/basket.png";
import Buttons from "../ui/Button/Button";
import honeycombs from "../../images/Header/honeycombs.svg";
import classes from "./Header.module.css";
import { ThemeContext } from "../ChangeTheme";
import { User, ShoppingCart } from "lucide-react";
import { Button, Drawer } from 'antd';

export default function Header() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const ChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className={classes.header}>
      <img className={classes.honeycombs} src={honeycombs} alt="honeycombs" />

      <div>
        <img src={logo} alt="Logo" width={220} height={80} />
      </div>

      <input
        className={classes.search}
        type="text"
        placeholder=" Найти любимое блюдо..."
      />

      <div className={classes.contact_info}>
        <h1 className={classes.tel}>+7 (978) 444 - 14 - 14</h1>

        <div className={classes.toggleContainer}>
          <input
            onClick={ChangeTheme}
            type="checkbox"
            id={classes.toggle_btn}
          />
          <label
            htmlFor={classes.toggle_btn}
            className={classes.toggle_label}
          ></label>
        </div>

        <Buttons>
          <User size={16} />
          Войти
        </Buttons>
        <Button className={classes.button_andt} type="primary" onClick={showDrawer}>
          <ShoppingCart size={16} />
        </Button>
        <Drawer title="Ваша корзина" onClose={onClose} open={open}>
          <img src={basket} alt="basket" />
          <h1>Корзина пустая</h1>
          <h3>Добавьте хотя бы один товар в корзину, чтобы совершить заказ</h3>
          <Buttons style={{background: '#DB7611', color: '#000000' }}>Вернуться назад</Buttons>
        </Drawer>
      </div>
    </header>
  );
}
