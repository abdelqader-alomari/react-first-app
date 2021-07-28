import React from 'react';
import { Form, Button } from 'react-bootstrap';
// import { Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';

class DataForm extends React.Component {

    chosenHornsNum = (event) => {
        event.preventDefault();
        if (event.target.value === 'All') {
            return this.props.filterData(0)
        } else {
            const form = +event.target.value;
            return this.props.filterData(form)
        }
    }

    render() {

        return (
            <>
                <Form className="form-select" onClick={this.chosenHornsNum} style={{ width: "50%", textAlign: "center", marginLeft: "25%" }}>

                    <Form.Label className=" bg-light" style={{}} > View the beasts by the number of horns</Form.Label>
                    <Form.Control as="select" className="bg-info " name="hornsNumber">
                        <option value='All'>All</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>Wooow</option>

                    </Form.Control>
                </Form>


                {/* <DropdownButton
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                <Dropdown.Item eventKey="1">One</Dropdown.Item>
                <Dropdown.Item eventKey="2">Two</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3">Three</Dropdown.Item>
            </DropdownButton>
            <h4>You selected {value}</h4> */}

            </>
        );
    }
}
export default DataForm;
