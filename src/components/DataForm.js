import React from 'react';
import Form from 'react-bootstrap/Form';

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
            </>
        );
    }
}
export default DataForm;