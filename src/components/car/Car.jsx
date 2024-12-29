import React, { Component } from "react";
import { NumericFormat } from "react-number-format";

export default class Car extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      desc: "",
      data: JSON.parse(localStorage.getItem("carData")) || [],
      editId: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, desc, editId, data } = this.state;

    if (editId) {
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, name, price, desc } : item
      );
      this.setState({
        data: updatedData,
        name: "",
        price: "",
        desc: "",
        editId: null,
      });
      localStorage.setItem("carData", JSON.stringify(updatedData));
    } else {
      const newCar = {
        id: Date.now(),
        name,
        price,
        desc,
      };
      const newData = [...data, newCar];
      this.setState({ data: newData, name: "", price: "", desc: "" });
      localStorage.setItem("carData", JSON.stringify(newData));
    }
  };

  handleDelete = (id) => {
    const filteredData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: filteredData });
    localStorage.setItem("carData", JSON.stringify(filteredData));
  };

  handleEdit = (id) => {
    const carToEdit = this.state.data.find((item) => item.id === id);
    this.setState({
      name: carToEdit.name,
      price: carToEdit.price,
      desc: carToEdit.desc,
      editId: id,
    });
  };

  render() {
    const { name, price, desc, data, editId } = this.state;

    return (
      <div className="flex">
        <div className="w-80 h-screen bg-slate-200 p-5">
          <form onSubmit={this.handleSubmit} action="#">
            <input
              autoFocus
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="w-full h-10 mb-3 indent-3 rounded-md outline-none"
              placeholder="Car Name"
              type="text"
            />
            <NumericFormat
              value={price}
              onValueChange={(values) => this.setState({ price: values.value })}
              thousandSeparator={true}
              prefix="$"
              className="w-full h-10 mb-3 indent-3 rounded-md outline-none"
              placeholder="Price"
              type="text"
            />
            <input
              value={desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
              className="w-full h-10 mb-3 indent-3 rounded-md outline-none"
              placeholder="Car Description"
              type="text"
            />
            <button className="w-full h-10 bg-slate-400 text-white rounded-md hover:bg-slate-800 duration-300">
              {editId ? "Update Car" : "Add Car"}
            </button>
          </form>
        </div>
        <div className="p-5 flex flex-wrap gap-3 flex-1 items-start content-start">
          {data?.map((car) => (
            <div key={car.id} className="w-72 shadow-md rounded-b-lg">
              <div className="w-full h-52 bg-slate-200 rounded-t-lg"></div>
              <div className="p-4">
                <h3 className="text-xl font-medium">{car.name}</h3>
                <p className="line-clamp-1">{car.desc}</p>
                <p className="font-medium">
                  <NumericFormat
                    value={car.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix="$"
                  />
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => this.handleDelete(car.id)}
                    className="bg-slate-800 text-white px-4 py-1 rounded-lg border border-slate-800 hover:bg-white hover:text-slate-800 duration-300"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => this.handleEdit(car.id)}
                    className="ml-2 bg-emerald-800 text-white px-4 py-1 rounded-lg border border-emerald-800 hover:bg-white hover:text-emerald-800 duration-300"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
