import { Button, Card, Dialog, Form, Input, Space } from 'antd-mobile';
import React from 'react';

const About = () => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };

  return (
    <div>
      <h1 className="tc my20">About Page</h1>
      <Space direction="vertical" block>
        <Card title="注册">
          <Form
            name="form"
            onFinish={onFinish}
            footer={
              <Button block type="submit" color="primary" size="middle">
                Create Account
              </Button>
            }
          >
            <Form.Header>Create Account</Form.Header>
            <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
              <Input placeholder="请输入邮箱" />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入密码" />
            </Form.Item>
          </Form>
        </Card>

        <Card title="登录">
          <Form
            name="form"
            onFinish={onFinish}
            footer={
              <Button block type="submit" color="success" size="middle">
                登录
              </Button>
            }
          >
            <Form.Header>Sign up</Form.Header>
            <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
              <Input placeholder="请输入邮箱" />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入密码" />
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};

export default About;
