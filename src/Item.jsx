import React from 'react'

function Item(props) {
    const datas= ["AQI","Temp","Humd","Pm25","Pm10",
     "CO","NO2", "SO2",
      "O3"]

    return (
        <div className="d-flex flex-column datas">
            <div className="d-flex justify-content-between title">
                <div className="title-1"> AQI <br />
                    ĐHCN Hà Nội <br /> Cơ sở {props.index + 1}
                </div>
                <div className="title-2">
                    {props.AQI}
                </div>
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Tiêu chí</th>
                        <th>Hiện tại</th>
                        <th>Min</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((data, index) => (
                            <tr key={index} className="item-row">
                                { data === "Temp" ? 
                                <td> Nhiệt độ (℃)</td> :
                                data === "Humd" ?
                                <td> Độ ẩm (%)</td> :
                                data === "Pm25" ?
                                <td> PM 2.5 (µg/ m³)</td> :
                                data === "Pm10" ?
                                <td> PM 1.0 (µg/ m³)</td> :
                                data === "AQI" ?
                                <td> {data} </td> :
                                <td> {data} (µg/ m³)</td>
                                }
                                <td>{props[data]}</td>
                                <td>{Math.floor(Math.random() * (100 - 10) ) + 20}</td>
                                <td style= {{ color: 'red' }}>
                                    {Math.floor(Math.random() * (10000 - 8000) )
                                     + 8000}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Item