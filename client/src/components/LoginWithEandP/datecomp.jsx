// class Datechooser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startDate: new Date(),
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//     const [selectedDate, setSelectedDate] = useState(null);
//   }
//   handleChange(date) {
//     this.setState({
//       startDate: date,
//     });
//   }
//   onFormSubmit(e) {
//     e.preventDefault();
//     if (selectedDate) {
//       props.onSelectedDate(selectedDate);
//     }
//     console.log(this.state.startDate);
//   }

//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <div className="form-group">
//           <DatePicker
//             selected={this.state.startDate}
//             onChange={this.handleChange}
//             name="startDate"
//             dateFormat="MM/dd/yyyy"
//           />
//           {/* <button className="btn btn-primary">Show Date</button> */}
//         </div>
//       </form>
//     );
//   }
// }
// export default Datechooser;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DateChooser = ({ setSelectedDate }) => {
  const [selectedDate, setLocalSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setLocalSelectedDate(date);
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      placeholderText="Select a date"
    />
  );
};

export default DateChooser;
