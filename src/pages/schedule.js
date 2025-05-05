import React from 'react';
import './schedule.css';

const Schedule = () => {
    const week1 = ['Monday 5/5', 'Tuesday 5/6', 'Wednesday 5/7', 'Thursday 5/8', 'Friday 5/9', 'Saturday 5/10', 'Sunday 5/11'];

    return (
        <div class="page">
            <h1 class="title">Schedule</h1>
            <div class="boxes_container">
                <div class="box">Monday 5/5</div>
                <div class="box">Tuesday 5/6</div>
                <div class="box">Wednesday 5/7</div>
                <div class="box">Thursday 5/8</div>
                <div class="box">Friday 5/9</div>
                <div class="box">Saturday 5/10</div>
                <div class="box">Sunday 5/11</div>
            </div>
        </div>

    );
} 


export default Schedule;