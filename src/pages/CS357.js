import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CS357 = () => {
    const data = [
        {name: "Bi-Weekly Quizzes", contribution: 35, status: "Completed"},
        {name: "Homework", contribution: 25, status: "Completed"},
        {name: "MPs", contribution: 10, status: "Completed"},
        {name: "Group Activities", contribution: 11, status: "Completed"},
        {name: "Pre-Lecture Activities", contribution: 4, status: "Completed"},
        {name: "Final Exam", contribution: 15, status: "Not Completed"}
    ];

    return (
        <div className="container mt-3"> 
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Contribution</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data_pt) => (
                        <tr key={data_pt.name}>
                            <td>{data_pt.name}</td>
                            <td>{data_pt.contribution}</td>
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