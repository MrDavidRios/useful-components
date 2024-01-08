import { FlexibleFilePath } from "./FlexibleFilePath";

export default {
  component: FlexibleFilePath,
  title: "Flexible File Path",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component that displays a file path and allows it to wrap, allowing it to adjust to a variety of different widths. Its wrapping behaves as if slashes are spaces in normally wrapping text.",
      },
    },
  },
};

export const Default = {
  args: {
    path: "C:\\Users\\User\\Documents\\GitHub\\react-ts-storybook",
  },
};
