import React, { Component } from "react";
import { connect } from "react-redux";
import "./Order.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import {
  deleteDataItems,
  updateDataItems,
} from "../../Component/Redux/Actions";

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false,
      items: {
        id: null,
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
        sleve_details: "",
        nack_requirement: "",
        other_details: "",
      },

      // name: "",
      // mobileNo: "",
      // date: "",
      // price: "",
      // mesurment: "inch",
      // length: "",
      // chestSize: "",
      // sholder: "",
      // waist: "",
      // sleve_length: "",
      // sleve_details: "",
      // nack_requirement: "",
      // other_details: "",
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleUpdate = (e) => {
    e.preventDefault();

    const data = this.state.items;
    console.log(" updated data : ", data);
    this.props.dispatch(updateDataItems(data), this.handleClose());

    this.setState({
      // items,
      id: null,
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
      sleve_details: "",
      nack_requirement: "",
      other_details: "",
    });
  };

  handlechange = (e) => {
    const value = e.target.value;
    this.setState(
      (prevState) => ({
        items: {
          ...prevState.items,
          [e.target.name]: value,
        },
      }),
      () => console.log(this.state.items)
    );
  };

  handleClickOpen = (data, id) => {
    console.log("bla bla bla", data);
    this.setState(
      (prevState) => ({
        openDialog: true,

        items: {
          ...prevState.items,
          id: data.id,
          name: data.name,
          mobileNo: data.mobileNo,
          date: data.date,
          price: data.price,
          mesurment: data.mesurment,
          length: data.length,
          chestSize: data.chestSize,
          sholder: data.sholder,
          waist: data.waist,
          sleve_length: data.sleve_length,
          sleve_details: data.sleve_details,
          nack_requirement: data.nack_requirement,
          other_details: data.other_details,
        },
      }),
      () => console.log("open dialog state items. ", this.state.items)
    );
  };

  handleClose = () => {
    this.setState({
      openDialog: false,
      items: {},
    });
  };

  render() {
    console.log("dataaa", this.props.data);

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
      other_details,
      items,
      data,
      openDialog,
    } = this.state;
    return (
      <>
        <div className="Orders">
          <table className="order_details">
            <thead className="heading">
              <tr>
                <th rowSpan="2">Sr no.</th>
                <th rowSpan="2">Name</th>
                <th rowSpan="2">mobileNo</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">Cost</th>
                <th colSpan="6">Upper body dress details</th>
                <th rowSpan="2">delete</th>
              </tr>
              <tr>
                <th>length</th>
                <th>Chest Size</th>
                <th>Sholder</th>
                <th>Waist</th>
                <th>Sleve Length</th>
                <th>mesurment in</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.length > 0
                ? this.props.data.map((data, i) => {
                    return (
                      <tr
                        key={i}
                        onDoubleClick={() => {
                          this.handleClickOpen(data, data.id);
                        }}
                      >
                        <td>{i + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.mobileNo}</td>
                        <td>{data.date}</td>
                        <td>{data.price}</td>
                        <td>{data.length}</td>
                        <td>{data.chestSize}</td>
                        <td>{data.sholder}</td>
                        <td>{data.waist}</td>
                        <td>{data.sleve_length}</td>
                        <td>{data.mesurment} </td>
                        <td>
                          <DeleteForeverOutlinedIcon
                            className="fa fa-plus-circle"
                            style={{ color: "red" }}
                            onClick={() => {
                              this.props.dispatch(deleteDataItems(data.id));
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>

        <Dialog
          open={openDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> Poonam Tailors </DialogTitle>
          <DialogContent>
            <div className="form">
              <form>
                <div className="cdetails">
                  <div className="info">
                    <label> Name : </label>
                    <input
                      id="name"
                      className="name"
                      name="name"
                      value={items.name}
                      type="text"
                      maxLength="50"
                      required
                      readOnly
                    />
                  </div>
                  <div className="info">
                    <label> Mobile no: </label>
                    <input
                      id="mobileNo"
                      className="mobileNo"
                      onChange={(e) => this.handlechange(e)}
                      name="mobileNo"
                      value={items.mobileNo}
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
                      value={items.date}
                      onChange={(e) => this.handlechange(e)}
                      type="date"
                    />
                  </div>
                  <div className="info">
                    <label> price : </label>
                    <input
                      id="price"
                      className="price"
                      name="price"
                      value={items.price}
                      onChange={(e) => this.handlechange(e)}
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
                    value={items.mesurment}
                    onChange={(e) => this.handlechange(e)}
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
                      value={items.length}
                      onChange={(e) => this.handlechange(e)}
                    />
                  </div>

                  <div className="dress_details info">
                    <label>Chest Size : </label>
                    <input
                      className="size"
                      type="tel"
                      name="chestSize"
                      value={items.chestSize}
                      onChange={(e) => this.handlechange(e)}
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
                      value={items.sholder}
                      onChange={(e) => this.handlechange(e)}
                    />
                  </div>

                  <div className="dress_details info">
                    <label>Waist (કમર) : </label>
                    <input
                      className="waist"
                      type="tel"
                      name="waist"
                      value={items.waist}
                      onChange={(e) => this.handlechange(e)}
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
                      value={items.sleve_length}
                      onChange={(e) => this.handlechange(e)}
                    />
                  </div>

                  <div className="dress_details info">
                    <label>Sleve Details : </label>
                    <textarea
                      className="sleve_details textarea"
                      name="sleve_details"
                      value={items.sleve_details}
                      onChange={(e) => this.handlechange(e)}
                    />
                  </div>
                </div>

                <div className="cdetails">
                  <div className="dress_details info">
                    <label>Nack Requirement : </label>
                    <textarea
                      className="nack_requirement textarea"
                      name="nack_requirement"
                      value={items.nack_requirement}
                      onChange={(e) => this.handlechange(e)}
                    />
                  </div>

                  <div className="dress_details info">
                    <label>other details : </label>
                    <textarea
                      className="other_details textarea"
                      name="other_details"
                      value={items.other_details}
                      onChange={(e) => this.handlechange(e)}
                    />
                  </div>
                </div>
                <br />
                <br />
                <Button color="primary" onClick={this.handleUpdate}>
                  Submit
                </Button>
              </form>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            {/* <Button onClick={this.handleClose} color="primary">
              Submit
            </Button> */}
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("map state is dispatch");
  console.log(state.addDataToStore.data);
  return {
    data: state.addDataToStore.data,
  };
};

export default connect(mapStateToProps)(Order);
