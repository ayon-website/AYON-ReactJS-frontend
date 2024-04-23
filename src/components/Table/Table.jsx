import React, { useEffect, useState } from 'react';
import './Table.css';

const Table = ({ data: rawData }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (typeof rawData === 'string') {
            setData(JSON.parse(rawData));
        } else {
            setData(rawData);
        }
    }, [rawData]);

    if (!data.length) return null;

    const headers = Object.keys(data[0]);

    const isImageUrl = (url) => {
        return typeof url === 'string' && url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null;
    };

    return (
        <table className='db-table' >
            <thead>
                <tr className='is-th'>
                    {headers.map((header, index) => (
                        <th key={index} >{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, cellIndex) => (
                            <td key={cellIndex}>
                                {isImageUrl(row[header]) ? 
                                    <img src={row[header]} alt={header} /> : 
                                    row[header]
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;