import { Form, useForm, SubmitHandler } from "react-hook-form";
import {
  Checkbox,
  Textarea,
  TextInput,
  Radio,
  DatePickerInput
} from "react-hook-form-mantine";
import { Button, Group, Paper, Container, Stack } from "@mantine/core";
import { DevTool } from "@hookform/devtools";

type Inputs = {
    checkbox: boolean
    textarea: string
    textInput: string
    radio: string
    datepicker: Date | null
}

export default function App() {
  const { 
    control,
    getValues,
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      checkbox: false,
      textarea: "",
      textInput: "",
      radio: "",
      datepicker: null
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset()
  }

  // const onSubmit = async () => {
  //   const values = getValues();
  //   console.log(values);
  //   reset()
  // };

  return (
    <div className="App" style={{marginRight: "300px"}}>
      <Container fluid>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Form
            control={control}
            onSubmit={handleSubmit(onSubmit)}
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
                rules={{ required: "Field is required" }}
                control={control}
              />
              <TextInput
                name="textInput"
                placeholder="Your name"
                label="Full name"
                required
                rules={{ required: "Field is required" }}
                control={control}
              />
              <Radio.Group
                name="radio"
                control={control}
                label="Select one"
                description="This is selectable"
              >
                <Group mt="xs">
                  <Radio.Item value="1" label="1" />
                  <Radio.Item value="2" label="2" />
                  <Radio.Item value="3" label="3" />
                  <Radio.Item value="4" label="4" />
                </Group>
              </Radio.Group>
              <DatePickerInput
                name="datepicker" 
                label="Pick date"
                placeholder="Pick date"
                control={control}
              />
              <Group mt="md">
                <Button type="submit">Submit</Button>
              </Group>
              <Button onClick={handleSubmit(onSubmit)}>Отправить</Button>
            </Stack>
          </Form>
        </Paper>
      </Container>
      <DevTool control={control} />
    </div>
  );
}