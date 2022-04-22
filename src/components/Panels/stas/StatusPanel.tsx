import React from 'react';


const StatusPanel = () => {
    return (
        <>
            <div>
                <h3>Статус</h3>
            </div>

            <div>
                <h3 style={{border: "1px solid black", padding: 5}}>Готов</h3>
            </div>

            <div>
                <h3>Последнее действие</h3>
            </div>

            <div>
                <h3 style={{border: "1px solid black", padding: 5}}>Неизвестно</h3>
            </div>
        </>
    );
};

export default StatusPanel;