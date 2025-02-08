import classes from "../Categories/CategoriesBlocks.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate(); // Инициализируем useNavigate

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data); 
            } catch (error) {
                console.error('Ошибка при загрузке категорий:', error);
            }
        };

        fetchCategories(); 
    }, []);

    return (
        <div className={classes.container}>
            {categories.map((obj) => (
                <div
                    onClick={() => navigate(`/${obj.Category}`)} // Используем navigate для перехода
                    className={classes.categoryBlock} 
                    key={obj.id}
                >
                    <img src={obj.image} alt={obj.Category} className={classes.image} />
                    <div className={classes.categoryName}>{obj.Category}</div>
                </div>
            ))}
        </div>
    );
}
