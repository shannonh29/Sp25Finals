import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CS427 = () => {
    const data = [
        {name: "Quizzes", contribution: 15, amt_earned: null, status: "Completed"},
        {name: "Programming Assignments", contribution: 25, amt_earned: 83.5, status: "Completed"},
        {name: "Project", contribution: 40, amt_earned: null, status: "Completed"},
        {name: "Final", contribution: 20, amt_earned: null, status: "Completed"},
        {name: "Total", contribution: null, amt_earned: null, status: "Completed"}
    ];

    const avg = [
        {name: "Quizzes", avg: 1},
        {name: "Programming Assignments", avg: 1},
        {name: "Project", avg: .9666},
        {name: "Final", avg: .8076}
    ];

    data.forEach(item => {
        const avg_item = avg.find(a => a.name === item.name);
        if(avg_item) {
            item.amt_earned = (avg_item != null ? avg_item.avg * item.contribution : 0);
        }
    })



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
                        <th>Contribution</th>
                        <th>Amount Earned</th>
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

export default CS427;