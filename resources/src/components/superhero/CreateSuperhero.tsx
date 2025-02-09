import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

export const CreateSuperhero: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values)
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
            autoComplete='off'
            labelCol={{ span: 8 }}
            labelAlign='left'
            >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                { required: true, message: 'Please enter the name!' },
                ]}
            >
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
                label="Superpower"
                name="superpower"
                rules={[
                { required: true, message: 'Please enter the superpower!' },
                ]}
            >
                <Input placeholder="Superpower" />
            </Form.Item>
            <Form.Item
                label="Humility Score"
                name="humilityScore"
                rules={[
                { required: true, message: 'Please enter the humility score!' },
                ]}
            >
                <InputNumber min='1' max='10' />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                Create
                </Button>
            </Form.Item>
        </Form>
    );
}
