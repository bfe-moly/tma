import { Button, Card, Dialog, Form, Input, Space, Tabs } from 'antd-mobile';
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
      <Tabs>
        <Tabs.Tab title="注册" key="register">
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
        </Tabs.Tab>
        <Tabs.Tab title="登录" key="login">
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
        </Tabs.Tab>
      </Tabs>

      <Space direction="vertical" block></Space>
    </div>
  );
};

export default About;
