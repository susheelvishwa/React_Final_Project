import { Button, Flex, Container, Box, HStack, Select } from "@chakra-ui/react";
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
  const [sortOrderValue, setSortOrderValue] = useState("");

  async function fetchAndUpdateData(sortOrderValue) {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/tickets?_sort=priority&_order={sortOrderValue}`
      );
      const data = res?.data;
      // console.log(data);
      setTickets(data);
      setLoading(false);
    } catch (error) {
      console.error("Something went Wrong", error);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(sortOrderValue);
  }, [sortOrderValue]);

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

      <HStack spacing={8} my={8}>
        <Select
          placeholder="Sort by Priority"
          value={sortOrderValue}
          onChange={(e) => {
            setSortOrderValue(e.target.value);
          }}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select placeholder="Filter by Status">
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed</option>
        </Select>
      </HStack>

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
