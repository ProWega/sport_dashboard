import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProgressCircle = ({ value, textBelow, metricName  }) => {
    const [showModal, setShowModal] = useState(false);

    let navigate = useNavigate(); // Хук для навигации
    const getColor = (percentage) => {
        if (percentage >= 75) return 'green'; // Зеленый для высоких значений
        if (percentage >= 50) return 'orange'; // Оранжевый для средних значений
        return 'red'; // Красный для низких значений
    };

    const handleOpenModal = () => setShowModal(true);

    const handleCloseModal = () => setShowModal(false);
    const handleNavigateToDetail = () => {
        navigate(`/metric-detail/${metricName}`);
        setShowModal(false); // Закрываем модальное окно при переходе
    };

    return (
        <div>
            <div style={{ width: '80px', height: '80px', padding: '10px' }} onClick={handleOpenModal}>
                <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    styles={buildStyles({
                        rotation: 0.75,
                        strokeLinecap: 'butt',
                        trailColor: '#d6d6d6',
                        pathColor: getColor(value),
                        textColor: getColor(value),
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                    })}
                />
                <div style={{ fontSize: '12px', marginTop: '5px', textAlign: 'center' }}>{textBelow}</div>
            </div>

            {/* Модальное окно с информацией */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Информация: {metricName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Подробная информация по показателю {metricName}.
                    {/* Обновленная кнопка для перехода на страницу с деталями */}
                    <Button onClick={handleNavigateToDetail}>Подробнее</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseModal}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProgressCircle;
