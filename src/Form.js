import React from "react";
import App from "./App";

class Form extends React.Component {

    constructor() {

    super();

    this.state = {

      input: {},

      errors: {}

    };

     

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

     

  handleChange(event) {

    let input = this.state.input;

    input[event.target.name] = event.target.value;

  

    this.setState({

      input

    });

  }

    

  handleSubmit(event) {

    event.preventDefault();

  

    if(this.validate()){

        console.log(this.state);

  

        let input = {};

        input["name"] = "";

        input["lastName"] = "";

        input["email"] = "";


        this.setState({input:input});

  

        alert('Form is submited');

    }

  }

  

  validate(){

      let input = this.state.input;

      let errors = {};

      let isValid = true;

  

      if (!input["name"]) {

        isValid = false;

        errors["name"] = "Enter name.";

      }

  

      if (!input["email"]) {

        isValid = false;

        errors["email"] = "Enter email";

      }

  

      if (typeof input["email"] !== "undefined") {

          

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(input["email"])) {

          isValid = false;

          errors["email"] = "Email not valid";

        }

      }

  

      if (!input["lastName"]) {

        isValid = false;

        errors["lastName"] = "Enter lastName.";

      }

  

      this.setState({

        errors: errors

      });

  

      return isValid;

  }

     

  render() {

    return (

      <div>

        <h1>Form</h1>

        <form onSubmit={this.handleSubmit}>

  

          <div class="form-group">

            <label for="name">Name:</label>

            <input 

              type="text" 

              name="name" 

              value={this.state.input.name}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="Enter name" 

              id="name" />

  

              <div className="text-danger">{this.state.errors.name}</div>

          </div>


  

          <div class="form-group">

            <label for="lastName">lastName:</label>

            <input 

              name="lastName"

              value={this.state.input.lastName} 

              onChange={this.handleChange}

              placeholder="Enter lastName"

              class="form-control" />

  

              <div className="text-danger">{this.state.errors.lastName}</div>

          </div>


          <div class="form-group">

            <label for="email">Email:</label>

            <input 

              type="text" 

              name="email" 

              value={this.state.input.email}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="Enter email" 

              id="email" />

   

              <div className="text-danger">{this.state.errors.email}</div>

          </div>

             

          <input type="submit" value="Submit" class="btn btn-success" />

        </form>

      </div>

    );

  }

}

  

export default Form;