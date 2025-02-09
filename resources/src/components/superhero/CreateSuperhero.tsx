import React, { useEffect } from 'react';
import { Button, Form, Input, InputNumber, notification } from 'antd';
import { CreateSuperheroRequestType } from '../../types/SuperheroType';
import { useIDispatch, useISelector } from '../../hooks';
import { createSuperheroRequest } from '../../slices/SuperheroSlice';

export const CreateSuperhero: React.FC = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const { create: { pending, superhero, error } } = useISelector(({superhero}) => superhero)

    useEffect(() => {
        if (!pending) {
            if (superhero) {
                api.success({
                    message: 'Your Superhero Created Successfully!',
                    duration: 1,
                });
            }
            else if (error) api.error({ message: error });
        }
    }, [pending])
    
    const dispatch = useIDispatch();
    const onFinish = (values: CreateSuperheroRequestType) => {
        dispatch(createSuperheroRequest(values));
    };
    return (
        <>
            {contextHolder}
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
        </>
    );
}
