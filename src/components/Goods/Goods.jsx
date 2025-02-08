import classes from "../Goods/Goods.module.css"; // Импорт стилей
import { useState, useEffect } from "react"; // Импорт хуков React
import Button from '../ui/Button/Button'; // Импорт вашей кнопки

export default function Categories() {
    const [categories, setCategories] = useState([]); // Состояние для хранения категорий
    const [categoryId, setCategoryId] = useState(null); // Состояние для хранения текущей категории

    const [ product, setProduct] = useState({info:[]})
    const {id} = useParams()

    useEffect(() => {
        // Функция для получения данных из API
        const fetchCategories = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json(); // Преобразуем ответ в JSON
                
                // Если данные находятся в массиве внутри объекта, доступ нужно будет изменить:
                setCategories(data); // Установка полученных данных в состояние
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error);
            }
        };

        fetchCategories(); // Вызов функции для получения данных
    }, []);

    

    return (
        <div className={classes.container}>
            {categories.map((obj, index) => (
                <div
                    onClick={ null }
                    className={categoryId === index ? "active" : ""}
                    key={obj.id} // Используйте уникальный идентификатор для ключа
                >
                    <img  className={classes.image} src={process.env.REACT_APP_API_URL + product.image}/> {/* Показываем изображение товара */}
                    <div>
                        <h1>{obj.name}</h1> {/* Название товара */}
                        <h3>{obj.description}</h3> {/* Описание товара */}
                        <div>
                            <h1>{obj.price} $</h1> {/* Цена товара */}
                            <Button>Добавить +</Button> {/* Кнопка для добавления товара */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
