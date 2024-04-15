import React from 'react';
import {useParams} from "react-router-dom";

const MetricDetail = ( ) => {
    const params = useParams()
    return (
        <div>
            <h2>Детальная информация: {params.metricName}</h2>
            <p>Здесь будет подробное описание метрики {params.metricName}.</p>
            {/* Дополнительные данные и графики */}
        </div>
    );
};

export default MetricDetail;