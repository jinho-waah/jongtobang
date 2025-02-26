import { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    placeholder: {
      control: "text",
      description: "검색창에 표시될 플레이스홀더 텍스트",
      defaultValue: "검색어를 입력하세요...",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: "검색어를 입력하세요...",
  },
};
