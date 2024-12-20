import { Form, useForm, SubmitHandler } from "react-hook-form";
import {
  Checkbox,
  Textarea,
  TextInput,
} from "react-hook-form-mantine";
import { Button, Group, Paper, Container, Stack } from "@mantine/core";
import { DevTool } from "@hookform/devtools";

type Inputs = {
    checkbox: boolean
    textarea: string
    textInput: string
}

export default function App() {
  const { 
    control,
    handleSubmit
  } = useForm<Inputs>({
    defaultValues: {
      checkbox: false,
      textarea: "",
      textInput: ""
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="App">
      <Container size={1000}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Form
            control={control}
            onSubmit={handleSubmit(onSubmit)}
            // onSubmit={(e) => console.log(e.data)}
            onError={(e) => console.log(`ОШИБКА ${e}`)}
          >
            <Stack>
              <Checkbox
                name="checkbox"
                value="Test"
                label="Select this or else >:("
                control={control}
              />
              <Textarea
                name="textarea"
                placeholder="Your comment"
                label="Your comment"
                required
                rules={{ required: "Обязательное поле" }}
                control={control}
              />
              <TextInput
                name="textInput"
                placeholder="Your name"
                label="Full name"
                required
                rules={{ required: "Обязательное поле" }}
                control={control}
              />

              <Group mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </Stack>
          </Form>
        </Paper>
      </Container>
      <DevTool control={control} />
    </div>
  );
}