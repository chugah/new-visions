import React from 'react';

// Provide percent absent, student full name, student id, student email,
// guidance counselor name, guidance counselor email
const Student = props => (
    <tr>
      <td>{(100 - props.student.attendancePercentage).toFixed(2)}</td>
      <td>{props.student.firstName} {props.student.lastName}</td>
      <td>{props.student.studentId}</td>
      <td>{props.student.email}</td>
      <td>{props.student.guidanceCounselor}</td>
      <td>{props.student.guidanceCounselorEmail}</td>
    </tr>
);

export default Student;
