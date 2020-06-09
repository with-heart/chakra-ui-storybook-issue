import React from "react";
// import { Button } from "@storybook/react/demo";
import { Button } from "@chakra-ui/core";

export default { title: "Button" };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
