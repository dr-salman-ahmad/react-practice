import React, { useEffect, useState } from "react";
import { Button, Card, Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const cardStyle = {
    width: 500,
  };

const Ticket = () => {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/tickets/new')
    }

    const showTicket = (id) => {
        navigate('/tickets/'+id)
    }

    useEffect(() => {
        fetch("http://localhost:3000/tickets")
        .then(res => res.json())
        .then(data => setTickets(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Flex justify="flex-end" style={{ margin: '25px' }}>
                <Button type="link" color="primary" variant="filled" onClick={handleNavigation}>New Ticket</Button>
            </Flex>
            <Flex justify="space-between" wrap="wrap" gap="large"> 
                { tickets.length > 0 && tickets.map((t) => (
                    <Card hoverable style={cardStyle} key={t.id} onClick={() => showTicket(t.id)}>
                        <Title level={4}>{t.title}</Title>
                        <Text>{t.description}</Text>
                        <Flex justify="flex-end">
                            <Text type="danger">{t.type}</Text>
                        </Flex>
                    </Card>
                ))
                }
            </Flex>
        </>
    );
}

export default Ticket;
