import React, { useEffect, useState } from 'react';
import { useTelegram } from "../../hooks/useTelegram"; // Убедитесь, что путь к хуку правильный

const Form = () => {
    const { tg } = useTelegram();
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');

    useEffect(() => {
        // Проверяем, что tg и tg.MainButton доступны
        if (tg && tg.MainButton) {
            // Скрываем кнопку, если поля пусты
            if (!country ||!street) {
                tg.MainButton.hide();
            } else {
                // Показываем кнопку, если поля заполнены
                tg.MainButton.show();
            }
        }
    }, [country, street, tg]); // Зависимости useEffect

    return (
        <div className="form">
            <h3>Введите ваши данные</h3>
            <input 
                className="input" 
                type="text" 
                placeholder="Страна"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
            <input 
                className="input" 
                type="text" 
                placeholder="Улица"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
            />
            {/* Другие элементы формы */}
        </div>
    );
};

export default Form;