import React, {Component} from "react"
import FormComponent from "./components/FormComponent";

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isVegetarian: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {name, value, type, checked} = e.target;
        type === "checkbox"
          ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
    }

    render() {
      return(
        <FormComponent
            handleChange={this.handleChange}
            // pass down all prop to this.state:  {...this.state}
            data={this.state}
        />
      )
    }
}

export default Forms;
