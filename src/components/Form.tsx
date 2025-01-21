import { useForm } from "react-hook-form";
import {
  Checkbox,
  Textarea,
  TextInput,
  Radio,
  DatePickerInput
} from "react-hook-form-mantine";
import { Button, Group, Paper, Container, Stack } from "@mantine/core";
import { DevTool } from "@hookform/devtools";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  checkbox: z.boolean(),
  textarea: z.string(),
  textinput: z.string(),
  radio: z.string(),
  datepicker: z.date()
})

type FormSchemaType = z.infer<typeof schema>;

export default function App() {
  const { control, handleSubmit } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      checkbox: false,
      textarea: "",
      textinput: "",
      radio: "",
      datepicker: undefined
    }
  })

  return (
    <div className="App" style={{marginRight: "300px"}}>
      <Container fluid>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form
            onSubmit={handleSubmit(
              (data) => console.log(data),
              (error) => console.log(error),
            )}
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
                name="textinput"
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
            </Stack>
          </form>
        </Paper>
      </Container>
      <DevTool control={control} />
    </div>
  );
}