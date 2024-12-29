import { data } from "autoprefixer";
import React, { Component } from "react";

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      desc: "",
      data: JSON.parse(localStorage.getItem("data")) || [],
    };
  }
  //   componentDidUpdate() {
  //     console.log(this.state);
  //   }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, desc } = this.state;
    let newFood = {
      id: Date.now(),
      name,
      price,
      desc,
    };

    const store = [...this.state.data, newFood];
    this.setState({
      data: [...this.state.data, newFood],
      name: "",
      price: "",
      desc: "",
    });
    localStorage.setItem("data", JSON.stringify(store));
  };
  handleDelete = (id) => {
    const store = this.state.data.filter((food) => food.id !== id);
    this.setState({ data: store });
    localStorage.setItem("data", JSON.stringify(store));
  };
  render() {
    return (
      <div className="flex">
        <div className="w-80 h-screen bg-slate-200 p-5">
          <form onSubmit={this.handleSubmit} action="#">
            <input
              autoFocus
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="w-full h-10 mb-3 indent-3 rounded-md outline-none"
              placeholder="Name"
              type="text"
            />
            <input
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
              className="w-full h-10 mb-3 indent-3 rounded-md outline-none"
              placeholder="Price"
              type="text"
            />
            <input
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
              className="w-full h-10 mb-3 indent-3 rounded-md outline-none"
              placeholder="Desc"
              type="text"
            />
            <button className="w-full h-10 bg-slate-400 text-white  rounded-md hover:bg-slate-800 duration-300">
              Create
            </button>
          </form>
        </div>
        <div className="p-5 flex flex-wrap gap-3 flex-1 items-start content-start">
          {this.state.data?.map((food) => (
            <div key={food.id} className="w-72 shadow-md rounded-b-lg">
              <div className="w-full h-52 bg-slate-200 rounded-t-lg"></div>
              <div className="p-4">
                <h3 className="text-xl font-medium">{food.name}</h3>
                <p className="line-clamp-1">{food.desc}</p>
                <p className="font-medium">{food.price}</p>
                <div className="mt-2">
                  <button
                    onClick={() => this.handleDelete(food.id)}
                    className="bg-slate-800 text-white px-4 py-1 rounded-lg border border-slate-800 hover:bg-white hover:text-slate-800 duration-300"
                  >
                    Delete
                  </button>
                  <button
                    // onClick={() => this.setState({ data: data })}
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
