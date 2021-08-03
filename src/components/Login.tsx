import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getToken, setToken, setUser } from '../utils/localStorage';
import { useHistory } from 'react-router-dom';

// const { Content }: any = Layout;
type TValues = {
  username: string;
};
const Login = () => {
  const [submited, setSubmited] = useState(false);
  const token = getToken();
  const history = useHistory();

  const onFinish = (values: TValues) => {
    console.log(values);
    setUser(values.username);

    setToken();

    setSubmited(!submited);
  };
  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [submited]);

  return (
    <Row style={{ height: '100vh' }}>
      <Col xs={20} md={10} lg={6} className="center">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
