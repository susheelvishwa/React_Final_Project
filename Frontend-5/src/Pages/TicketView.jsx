import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../Components/LoadingIndicator"; 
import ErrorIndicator from "../Components/ErrorIndicator"; 
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Text,
  Box,
} from "@chakra-ui/react";

const TicketView = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ticket, setTicket] = useState({});
  const { id } = useParams();

  async function fetchAndUpdateData(id) {
    setLoading(true);
    setError(false);
    try {
      const res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets/${id}`,
      });
      const data = res?.data;
      setTicket(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  const { title, status, priority } = ticket;

  return (
    <div>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Status
              </Heading>
              <Text pt="2" fontSize="sm">
                {status}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Priority
              </Heading>
              <Text pt="2" fontSize="sm">
                {priority}
              </Text>
            </Box>
            <Box>
              <Button variant="outline" colorScheme="red">
                View Ticket
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default TicketView;
