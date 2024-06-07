import {
  Button,
  Flex,
  Container,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorIndicator from "../Components/ErrorIndicator";
import LoadingIndicator from "../Components/LoadingIndicator";
import TicketCard from "../Components/TicketCard";


const Tickets = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tickets, setTickets] = useState([]);

  async function fetchAndUpdateData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets`,
      });

      let data = res?.data;
      setLoading(false);
      setTickets(data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container maxW="container.xl" marginTop="20px" paddingRight="50px">
      <Flex direction="row-reverse">
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => {
            navigate(`/ticket/create`);
          }}
        >
          Create New Tickets
        </Button>
      </Flex>

      <Flex wrap="wrap" spacing="4">
        {tickets?.map((ticket) => (
          <Box key={ticket.id} flexBasis={["100%", "50%", "33.33%"]} p="2">
            <TicketCard
              title={ticket.title}
              status={ticket.status}
              priority={ticket.priority}
              description={ticket.description}
              name={ticket.name}
            />
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Tickets;
