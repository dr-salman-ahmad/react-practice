import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Flex, FloatButton, Popconfirm, Typography} from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const {Title, Text} = Typography;

const TicketDetail = () => {
    const {id} = useParams();
    const [ticket, setTicket] = useState()
    const [isPending, setIsPending] = useState(true)
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch("http://localhost:3000/tickets/"+id, {
            method: 'Delete'
        }).then(()=> {
            navigate('/tickets')
        })
    }

    const handleEdit = () => {
        navigate("/tickets/" + id + "/edit")
    }

    useEffect(()=>{
        fetch("http://localhost:3000/tickets/"+id)
        .then(res => res.json())
        .then(data => {
            setTicket(data)
            setIsPending(false)
        })
        .catch(err => console.error(err));
    },[])
    return (
        <>
            {!isPending && <Card hoverable style={{width: 800}}>
                <Title level={4}>{ticket.title}</Title>
                <Text>{ticket.description}</Text>
                <Flex justify="flex-end">
                    <Text type="danger">{ticket.type}</Text>
                </Flex>
            </Card>}
            <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                okText="Yes"
                cancelText="No"
                onConfirm={handleDelete}
            >
            <FloatButton
            icon={<DeleteOutlined />}
            style={{
                insetInlineEnd: 24,
              }}
            >
                Delete
            </FloatButton>
            </Popconfirm>
            <FloatButton
            icon={<EditOutlined />}
            style={{
                insetInlineEnd: 74,
              }}
            onClick={handleEdit}
            >
                Edit
            </FloatButton>
        </>
    )
}

export default TicketDetail;