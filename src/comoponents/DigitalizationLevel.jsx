import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Пример данных
const percentage = 76;

const DigitalizationLevel = () => {
    return (
        <div style={{ width: '100px', height: '100px' }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    rotation: 0.5 + (1 - percentage / 100) / 2, // Начать снизу
                    strokeLinecap: 'butt', // Прямые концы линий
                    trailColor: '#d6d6d6',
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#000',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                })}
            />
            <div style={{ fontSize: '12px', marginTop: '5px', textAlign: 'center' }}>
                Высокий уровень цифровизации
            </div>
        </div>
    );
};

export default DigitalizationLevel;