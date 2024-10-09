import React from 'react';
import { Button, Select, Form, Input, Flex } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';


const NewTicket = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(values)
        
        fetch('http://localhost:3000/tickets/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          }).then(() => {
            navigate('/tickets')
          })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Flex
        justify="center"
        align="center"
        style={{ height: '100vh' }}
        >
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                        required: true,
                        message: 'Please enter the title!',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                        required: true,
                        message: 'Please enter the description!',
                        },
                    ]}
                    >
                    <TextArea rows={3} />
                </Form.Item>

                <Form.Item 
                    label="Select"
                    name="type"
                    rules={[
                        {
                        required: true,
                        message: 'Please Select Ticket type!',
                        },
                    ]}
                >
                    <Select>
                    <Select.Option value="bug">Bug</Select.Option>
                    <Select.Option value="feature">Feature</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
)};

export default NewTicket;