import classes from "../Categories/Categories.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const navigate = useNavigate(); // Инициализируем useNavigate

  useEffect(() => {
    // Функция для получения данных из API
    const fetchCategories = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data); // Установка полученных данных в состояние
      } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
      }
    };

    fetchCategories(); // Вызов функции получения данных
  }, []);

  return (
    <div className={classes.conteiner}>
      <ul className={classes.categories}>
        {categories.map((obj) => (
          <li
            onClick={() => navigate(`/${obj.Category}`)}
            key={obj.id} // Используйте уникальный идентификатор для ключа
          >
            {obj.name} {/* Здесь выводим название категории */}
          </li>
        ))}
      </ul>
    </div>
  );
}
