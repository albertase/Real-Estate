import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Button,
  Select,
  Box,
  Option
} from "@chakra-ui/react";
import Link from 'next/link'
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mlevbgey");
  if (state.succeeded) {
    return (
      <Box textAlign="center" bg="gray.100" color="green" p="40">
        <p>Thanks for making a move!</p>
        <Link href="/">
        <Button colorScheme="twitter">Back</Button>
        </Link>
      </Box>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={5} w="800">
        <Input
          variant="outline"
          h="12"
          type="text"
          name="full-name"
          placeholder="Full Name"
        />
        <ValidationError
          prefix="Full-Name"
          field="text"
          errors={state.errors}
        />
        <InputGroup>
          <Input type="email" name="email" h="12" placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </InputGroup>

        <InputGroup>
          <Input placeholder="Address" type="text" name="address" h="12" />
          <ValidationError
            prefix="Address"
            field="text"
            errors={state.errors}
          />
        </InputGroup>
        <InputGroup>
          <Select name="purpose" h="12" placeholder="What is your purpose?">
            <option>Buy</option>
            <option>Rent</option>
          </Select>
          <ValidationError
            prefix="Purpose"
            field="select"
            errors={state.errors}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            ₦
          </InputLeftElement>
          <Input
            placeholder="Enter amount"
            name="amount"
            type="number"
            h="12"
          />
          <ValidationError
            prefix="Number"
            field="number"
            errors={state.errors}
          />
        </InputGroup>
        <InputGroup>
          <Textarea
            placeholder="Description of the property"
            name="description"
          />
          <ValidationError
            prefix="Description"
            field="textarea"
            errors={state.errors}
          />
        </InputGroup>
        <Button type="submit" disabled={state.submitting} colorScheme="twitter">
          Send
        </Button>
      </Stack>
    </form>
  );
}

export default Contact;
