import React, { useEffect, useState } from 'react';
import { Button, Select, Form, Input, Flex } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate, useParams } from 'react-router-dom';


const EditTicket = () => {
    const {id} = useParams()
    const [ticket, setTicket] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:3000/tickets/"+id)
        .then(res => res.json())
        .then(data => {
            setTicket(data)
        })
        .catch(err => console.error(err));
    },[])

    const onFinish = (values) => {
        console.log(values)
        
        fetch('http://localhost:3000/tickets/'+id, {
            method: 'PUT',
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
            {ticket && <Form
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
            >
                <Form.Item
                    label="Title"
                    name="title"
                    initialValue={ticket.title}
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
                    initialValue={ticket.description}
                    rules={[
                        {
                        required: true,
                        message: 'Please enter the description!',
                        },
                    ]}
                    >
                    <TextArea rows={3}/>
                </Form.Item>

                <Form.Item 
                    label="Select"
                    name="type"
                    initialValue={ticket.type}
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
            </Form>}
        </Flex>
)};

export default EditTicket;