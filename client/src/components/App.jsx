import React from 'react';
import Student from './Student';
import * as data from '../../../data/students.json';
import '../css/app-styles.css';

class App extends React.Component {
  // Set threshold to 0 and data as empty array
  // Array format provides access to JS methods such as sort
  constructor(props) {
    super(props);
    this.state = {
      threshold: '0',
      data: []
    };
  }

  // Data needs to be available as soon as app renders
  // Data is sorted in ascending order
  // Threshold starts at 0 to show all students
  componentDidMount() {
    data.default.sort((a, b) => b.attendancePercentage - a.attendancePercentage);
    this.setState({
      data: data.default
    })
  }

  // Set up range input to adjust threshold from lowest absenteeism to highest
  // Set number field for user to enter threshold value or dispaly from range input
  // Initially render table a list of all students in ascending order
  // Student list modified based on user input for threshold with order preserved
  render() {
    return (
      <div className="container mt-5">
        <h1>Student Absenteeism</h1>
        <p>This dashboard is intended for principals and guidance-counselors
          to provide a dataset that assists in identifying students who are
          chronically absent (missing X% or more of school days) for targeted
          interventions by guidance counselors.</p>
        <h3 className="mt-3">Adjust the slider to filter the list of students
          based on how often they have been absent.</h3>
        <div className="d-flex justify-content-start mt-3">
          <input
            onChange={(evt) => this.setState({ threshold: evt.target.value })}
            type="range"
            min="0.00"
            max="40.00"
            step="0.01"
            value={this.state.threshold} />
          <input
          className="ml-5"
          onChange={(evt) => this.setState({ threshold: evt.target.value })}
          type="number"
          min="0.00"
          max="40.00"
          step="0.01"
          value={this.state.threshold} />
          <span className="ml-2">(%)</span>
        </div>
        <table className="table table-responsive-sm table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Absent (%)</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Id</th>
              <th scope="col">Student Email</th>
              <th scope="col">Guidance Counselor</th>
              <th scope="col">Guidance Counselor Email</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((student, i) => {
            if (Number((100 - student.attendancePercentage).toFixed(2)) >= this.state.threshold) {
              return <Student student={student} key={i} />
            }
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
