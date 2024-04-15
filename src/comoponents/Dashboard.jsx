import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';
import DigitalizationLevel from "./DigitalizationLevel";
import ProgressCircle from './ProgressCircle';

// Заглушка данных для графиков
const mockRegionData = [
    { month: 'Январь', position: 18 },
    { month: 'Февраль', position: 17 },
    { month: 'Март', position: 26 },
    { month: 'Апрель', position: 20 },
    { month: 'Май', position: 19 },
    // Добавьте другие месяцы
];

const mockEventsData = [
    { name: 'Футбол', attendees: 2000 },
    { name: 'Баскетбол', attendees: 1800 },
    // Добавьте другие виды спорта
];

const Dashboard = () => {
    // Состояния для данных графиков (можно заменить на реальные данные)
    const [regionData, setRegionData] = useState([]);
    const [eventsData, setEventsData] = useState([]);

    // Примерные данные для каждой диаграммы
    const digitalizationLevel = 76; // Уровень цифровизации
    const citizenEngagement = 40; // Работа с гражданами
    const sportsAttendance = 65; // Посещаемость спортивных объектов

    useEffect(() => {
        // Предположим, что вы будете загружать данные из API
        setRegionData(mockRegionData);
        setEventsData(mockEventsData);
    }, []);

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <img src="/img.png" alt="Логотип" className="logo" />
                <h1>Панель управления отраслью спорта</h1>
            </header>
            <div className="metrics">
                <div className='metric'>
                    <h2>Ключевые метрики</h2>
                    <div className="progress-circles">
                        <ProgressCircle value={digitalizationLevel} textBelow="Цифровизация" metricName="digitalization" />
                        <ProgressCircle value={citizenEngagement} textBelow="Граждане" />
                        <ProgressCircle value={sportsAttendance} textBelow="Посещаемость" />
                    </div>
                </div>
                <div className="metric">
                    <h2>Позиция Нижегородской области по стране</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={regionData}>
                            <Line type="monotone" dataKey="position" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="month" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="metric">
                    <h2>Уровень загруженности спортивных объектов</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={eventsData}>
                            <Bar dataKey="attendees" fill="#82ca9d" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/* Добавьте дополнительные метрики */}
            </div>
        </div>
    );
};

export default Dashboard;