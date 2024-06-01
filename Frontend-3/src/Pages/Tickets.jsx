import {
  Button,
  Flex,
  Container,
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Text,
  Box,
} from "@chakra-ui/react";



function TicketCard() {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <Text pt="2" fontSize="sm">
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}



const Tickets = () => {
  return (
    <Container maxW="container.xl" marginTop="20px" paddingRight="50px">
      <Flex direction="row-reverse">
        <Button variant="outline" colorScheme="red">
          Create Tickets
        </Button>
      </Flex>
    </Container>
  );
};

export default Tickets;
