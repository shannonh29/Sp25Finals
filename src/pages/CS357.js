import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CS357 = () => {

    // data table containing general information for grades
    const data = [
        {name: "Bi-Weekly Quizzes", contribution: 35, amt_earned: null, status: "Completed"},
        {name: "Homework", contribution: 25, amt_earned: null, status: "Completed"},
        {name: "MPs", contribution: 10, amt_earned: null, status: "Completed"},
        {name: "Group Activities", contribution: 11, amt_earned: null, status: "Completed"},
        {name: "Pre-Lecture Activities", contribution: 4, amt_earned: null, status: "Completed"},
        {name: "Final Exam", contribution: 15, amt_earned: null, status: "Completed"},
        {name: "Total", contribution: null, amt_earned: null, status: "Completed"}
    ];

    // average grade for each topic
    const avg = [
        {name: "Bi-Weekly Quizzes", avg: 0.9188114800000001},
        {name: "Homework", avg: 1.00},
        {name: "MPs", avg: 0.992},
        {name: "Group Activities", avg: 1.0194047616666666},
        {name: "Pre-Lecture Activities", avg: 1.00},
        {name: "Final Exam", avg: .8674}
    ];

    // calculating and inputting the amount earned based on contribution and average
    data.forEach(item => {
        const avg_item = avg.find(a => a.name === item.name);
        if(avg_item) {
            item.amt_earned = (avg_item != null ? avg_item.avg * item.contribution : 0);
        }
    });

    // calculating the total contribution and amount earned
    const total_item = data.find(a => a.name === "Total");
    total_item.contribution = data.reduce((sum, item) => 
        item.name !== "Total" ? sum + (item.contribution || 0) : sum, 0);
    total_item.amt_earned = data.reduce((sum, item) =>
        item.name !== "Total" ? sum + (item.amt_earned || 0) : sum, 0);

    // creating the table
    return (
        <div className="container mt-3"> 
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Contribution (%)</th>
                        <th>Amount Earned (%)</th>
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

export default CS357;