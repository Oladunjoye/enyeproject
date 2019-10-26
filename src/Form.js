import React, { Fragment } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Modal
} from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import addUser from "./redux/actions/userActions";

const NormalLoginForm = props => {
  const [loading, setLoading] = useState(false);
  const [iconLoading, setIconLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        enterIconLoading();
        enterLoading();
        setTimeout(clearForm, 2500);
      }

      //dispatch action here
      dispatch(addUser(values));
      // this.props.addUser(values);
    });
  };

  const enterLoading = () => {
    setLoading(true);
  };

  const enterIconLoading = () => {
    setIconLoading(true);
  };

  const clearForm = () => {
    setLoading(false);
    setIconLoading(false);
    setShowSuccess(true);
    props.form.resetFields();
  };

  const handleOk = () => {
    props.displayTable();
  };

  const handleCancel = () => {
    setShowSuccess(false);
  };

  return (
    <Fragment>
      <article className="max-width center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 ">
        <div className="tc">
          <img
            src="/Images/user.svg"
            className="br-100 h3 w3 dib"
            title="user"
            alt="user"
          />
          <h1 className="f4">User Profile </h1>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>

        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("firstname", {
              rules: [
                { required: true, message: "Please input your firstname!" }
              ]
            })(
              <Input
                suffix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Firstname"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("lastname", {
              rules: [
                { required: true, message: "Please input your last name!" }
              ]
            })(
              <Input
                suffix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Lastname"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("Birthday", {
              rules: [
                { required: true, message: "Please input your last name!" }
              ]
            })(<DatePicker size={"default"} placeholder="Birthday" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("hobby", {
              rules: [{ required: true, message: "Please input your hobby!" }]
            })(
              <Input
                suffix={
                  <Icon type="smile" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Hobby"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("age", {
              rules: [{ required: true, message: "Please input your age" }]
            })(
              <InputNumber
                min={1}
                suffix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Age"
              />
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
            <Button htmlType="submit" type="primary" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </article>

      <Modal visible={showSuccess} onOk={handleOk} onCancel={handleCancel}>
        <div className="success-modal">
          <Icon
            type="check-circle"
            theme="twoTone"
            twoToneColor="#52c41a"
            style={{ fontSize: "50px" }}
          />
          <p id="success-text">Youve successfuly submitted your form</p>
          <p>
            Click <span>OK</span> to view Table
          </p>
        </div>
      </Modal>
    </Fragment>
  );
};

class NormalLoginForms extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
    showSuccess: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.enterIconLoading();
        this.enterLoading();
        setTimeout(this.clearForm, 2500);
      }

      this.props.addUser(values);
    });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  clearForm = () => {
    this.setState({ loading: false, iconLoading: false, showSuccess: true });
    this.props.form.resetFields();
  };

  handleOk = () => {
    this.props.displayTable();
  };

  handleCancel = () => {
    this.setState({ showSuccess: false });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <article className="max-width center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 ">
          <div className="tc">
            <img
              src="/Images/user.svg"
              className="br-100 h3 w3 dib"
              title="user"
              alt="user"
            />
            <h1 className="f4">User Profile </h1>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("firstname", {
                rules: [
                  { required: true, message: "Please input your firstname!" }
                ]
              })(
                <Input
                  suffix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Firstname"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("lastname", {
                rules: [
                  { required: true, message: "Please input your last name!" }
                ]
              })(
                <Input
                  suffix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Lastname"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("Birthday", {
                rules: [
                  { required: true, message: "Please input your last name!" }
                ]
              })(<DatePicker size={"default"} placeholder="Birthday" />)}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator("hobby", {
                rules: [{ required: true, message: "Please input your hobby!" }]
              })(
                <Input
                  suffix={
                    <Icon type="smile" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Hobby"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("age", {
                rules: [{ required: true, message: "Please input your age" }]
              })(
                <InputNumber
                  min={1}
                  suffix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Age"
                />
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button
                htmlType="submit"
                type="primary"
                loading={this.state.loading}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </article>

        <Modal
          visible={this.state.showSuccess}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="success-modal">
            <Icon
              type="check-circle"
              theme="twoTone"
              twoToneColor="#52c41a"
              style={{ fontSize: "50px" }}
            />
            <p id="success-text">Youve successfuly submitted your form</p>
            <p>
              Click <span>OK</span> to view Table
            </p>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

const UserForm = Form.create({ name: "normal_login" })(NormalLoginForm);
export default UserForm;
