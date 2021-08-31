import React, { Component } from "react";
import "./Customer.scss";
// import { useSelector, useDispatch } from "react-redux";
import { addDataItems } from "../../Component/Redux/Actions";
import { connect } from "react-redux";

class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mobileNo: "",
      date: "",
      price: "",
      mesurment: "inch",
      length: "",
      chestSize: "",
      sholder: "",
      waist: "",
      sleve_length: "",
      sleve_details :'', 
      nack_requirement: "",
      other_details: ""
      // items: [],
    };

    this.handlechange = this.handlechange.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handlechange(evt) {
    const value = evt.target.value;

    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  }

  handleClickAdd = (e) => {
    e.preventDefault();
    console.log("handle submit call", e);
    const {
      name,
      mobileNo,
      date,
      price,
      mesurment,
      length,
      chestSize,
      sholder,
      waist,
      sleve_length,
      sleve_details,
      nack_requirement,
      other_details
    } = this.state;

    const data = {
      id: new Date(),
      name,
      mobileNo,
      date,
      price,
      mesurment,
      length,
      chestSize,
      sholder,
      waist,
      sleve_length,
      sleve_details,
      nack_requirement,
      other_details
    };

    this.props.dispatch(addDataItems(data));

    this.setState({
      // items,
      name: "",
      mobileNo: "",
      date: "",
      price: "",
      mesurment: "inch",
      length: "",
      chestSize: "",
      sholder: "",
      waist: "",
      sleve_length: "",
      sleve_details :'', 
      nack_requirement: "",
      other_details: ""
    });
  };

  render() {
    const {
      name,
      mobileNo,
      date,
      price,
      mesurment,
      length,
      chestSize,
      sholder,
      waist,
      sleve_length,
      sleve_details,
      nack_requirement,
      other_details
    } = this.state;
    return (
      <div className="Customer">
        <div className="form">
          <h1>Poonam Tailors</h1>
          <br />
          <form onSubmit={this.handleClickAdd}>
            <div className="cdetails">
              <div className="info">
                <label> Name : </label>
                <input
                  id="name"
                  className="name"
                  name="name"
                  value={name}
                  onChange={this.handlechange}
                  type="text"
                  maxLength="50"
                  required
                />
              </div>
              <div className="info">
                <label> Mobile no: </label>
                <input
                  id="mobileNo"
                  className="mobileNo"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={this.handlechange}
                  type="tel"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>
            <div className="cdetails">
              <div className="info">
                <label> date : </label>
                <input
                  id="date"
                  className="date"
                  name="date"
                  value={date}
                  onChange={this.handlechange}
                  type="date"
                />
              </div>
              <div className="info">
                <label> price : </label>
                <input
                  id="price"
                  className="price"
                  name="price"
                  value={price}
                  onChange={this.handlechange}
                  type="text"
                />
              </div>
            </div>
            <br />
            <br />

            <h2>Upper body Dress </h2>

            <div className="cdetails">
              <label> mesurment in :</label>
              <select
                name="mesurment"
                value={mesurment}
                onChange={this.handlechange}
              >
                <option value="inch">Inch</option>
                <option value="cm">Cm</option>
              </select>
            </div>

            <div className="cdetails">
              <div className="dress_details info">
                <label>length : </label>
                <input
                  className="length"
                  type="tel"
                  name="length"
                  value={length}
                  onChange={this.handlechange}
                />
              </div>

              <div className="dress_details info">
                <label>Chest Size : </label>
                <input
                  className="size"
                  type="tel"
                  name="chestSize"
                  value={chestSize}
                  onChange={this.handlechange}
                />
              </div>
            </div>

            <div className="cdetails">
              <div className="dress_details info">
                <label>Sholder : </label>
                <input
                  className="sholder"
                  type="tel"
                  name="sholder"
                  value={sholder}
                  onChange={this.handlechange}
                />
              </div>

              <div className="dress_details info">
                <label>Waist (કમર) : </label>
                <input
                  className="waist"
                  type="tel"
                  name="waist"
                  value={waist}
                  onChange={this.handlechange}
                />
              </div>
            </div>

            <div className="cdetails">
              <div className="dress_details info">
                <label>Sleve Length : </label>
                <input
                  className="sleve_length"
                  type="tel"
                  name="sleve_length"
                  value={sleve_length}
                  onChange={this.handlechange}
                />
              </div>

              <div className="dress_details info">
                <label>Sleve Details : </label>
                <textarea className="sleve_details textarea" name="sleve_details"
                  value={sleve_details}
                  onChange={this.handlechange} />
              </div>
            </div>

            <div className="cdetails">
              <div className="dress_details info">
                <label>Nack Requirement : </label>
                <textarea className="nack_requirement textarea" name="nack_requirement"
                  value={nack_requirement}
                  onChange={this.handlechange} />
              </div>

              <div className="dress_details info">
                <label>other details : </label>
                <textarea className="other_details textarea" name="other_details"
                  value={other_details}
                  onChange={this.handlechange} />
              </div>
            </div>
            <br />
            <br />

            {/* <button onClick={this.handleClickAdd}>Submit </button> */}
            <button>Submit </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Customer);
