import React from 'react';

const DetailPage = ({ metricName }) => {
    return (
        <div>
            <h2>Подробная информация о {metricName}</h2>
            {/* Здесь должна быть более детальная информация, возможно запросы к API */}
            <p>Информация находится в процессе разработки...</p>
        </div>
    );
};

export default DetailPage;
