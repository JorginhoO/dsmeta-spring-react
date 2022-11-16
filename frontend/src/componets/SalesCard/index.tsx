import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from '../NotificationButton';
import './style.css';

function SalesCard() {

    const max = new Date()
    const min = new Date(new Date().setDate(new Date().getDate() - 10));

    
    const [maxDate, setMaxDate] = useState(max);
    const [minDate, setMinDate] = useState(min);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div className="dsmeta-box-container">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="dsmeta-box"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="dsmeta-box-container">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="dsmeta-box"
                    dateFormat="dd/MM/yyyy"
                />
            </div>


            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="media992">ID</th>
                            <th className="media576">Data</th>
                            <th>Vendedor</th>
                            <th className="media992">Visitas</th>
                            <th className="media992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="media992">#341</td>
                            <td className="media576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="media992">15</td>
                            <td className="media992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="media992">#341</td>
                            <td className="media576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="media992">15</td>
                            <td className="media992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="media992">#341</td>
                            <td className="media576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="media992">15</td>
                            <td className="media992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard;
