import {
  Container,
  Input,
  Textarea,
  VStack,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TicketCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState(""); // Name of Assignee
  const [status, setStatus] = useState(""); // completed, pending, progress
  const [priority, setPriority] = useState(""); // 0,1,2,3,4,5,6,7,8,9
  const navigate = useNavigate(); // Correct usage

  async function handleCreateTicket() {
    try {
      const newTicket = {
        title: title,
        description: description,
        assignee: assignee,
        status: status,
        priority: priority,
      };

      let res = await axios({
        method: "post",
        url: `https://react-final-project-rouge.vercel.app/tickets`,
        data: newTicket,
      });

      if (res.status === 201) {
        navigate(`/tickets`); // Correct usage
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container paddingTop={6}>
      <VStack spacing={8} my={4}>
        <Input
          placeholder="Enter Title"
          size="lg"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <Textarea
          placeholder="Enter Description"
          size="lg"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <Select
          placeholder="Assignee"
          size="lg"
          value={assignee}
          onChange={(e) => {
            setAssignee(e.target.value);
          }}
        >
          <option value="Shivam">Shivam</option>
          <option value="Susheel">Susheel</option>
          <option value="Ankit">Ankit</option>
          <option value="Abhay">Abhay</option>
          <option value="Shivanshu">Shivanshu</option>
          <option value="Vartika">Vartika</option>
          <option value="Tanu">Tanu</option>
          <option value="Prachi">Prachi</option>
          <option value="Shriya">Shriya</option>
          <option value="Aushi">Aushi</option>
        </Select>

        <Select
          placeholder="Status"
          size="lg"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed</option>
        </Select>

        <Select
          placeholder="Priority"
          size="lg"
          value={priority}
          onChange={(e) => {
            setPriority(Number(e.target.value));
          }}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>

        <Button
          variant="outline"
          colorScheme="red"
          onClick={handleCreateTicket}
        >
          Create Ticket
        </Button>
      </VStack>
    </Container>
  );
};

export default TicketCreate;
