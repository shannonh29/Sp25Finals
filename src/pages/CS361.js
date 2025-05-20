import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CS361 = () => {
    const data = [
        {name: "Homework", contribution: 350, amt_earned: 343.5, status: "Completed"},
        {name: "Project", contribution: 10, amt_earned: 83.5, status: "Completed"},
        {name: "Quiz", contribution: 92, amt_earned: 82.95, status: "Completed"},
        {name: "Examlets", contribution: 350, amt_earned: 276.51, status: "Completed"},
        {name: "Final", contribution: 180, amt_earned: 137, status: "Completed"},
        {name: "Total", contribution: null, amt_earned: null, status: "Completed"}
    ];

    const total_item = data.find(a => a.name === "Total");
    total_item.contribution = data.reduce((sum, item) =>
        item.name !== "Total" ? sum + (item.contribution || 0) : sum, 0);
    total_item.amt_earned = data.reduce((sum, item) =>
        item.name !== "Total" ? sum + (item.amt_earned || 0) : sum, 0);


    return (
        <div className="container mt-3"> 
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Contribution (Points)</th>
                        <th>Amount Earned (Points)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data_pt) => (
                        <tr key={data_pt.name}>
                            <td>{data_pt.name}</td>
                            <td>{data_pt.contribution}</td>
                            <td>{data_pt.amt_earned}</td>
                            <td>
                                <span className={`badge ${
                                    data_pt.status === "Completed" ? "bg-success" :
                                    data_pt.status === "Not Completed" ? "bg-danger" :
                                    "bg-secondary"
                                }`}>
                                    {data_pt.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CS361;