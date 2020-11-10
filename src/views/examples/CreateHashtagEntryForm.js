import React from "react";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

class CreateHashtagEntryForm extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md="12">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="hashtag entry name"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default CreateHashtagEntryForm;
