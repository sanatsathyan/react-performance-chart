import { Meta, Story } from "@storybook/react";
import { IGasPerformance } from "../data/iMock";
import { PerformanceContextProvider } from "../helpers/Context";
import { GasPerformance } from "../pages/GasPerformance/GasPerformance";

import { data } from "../data/Mock";

type Props = {
  value: IGasPerformance;
};

export default {
  title: "Page/Gas Performance",
} as Meta;

const ChartInputs: Story<Props> = (args) => (
  <PerformanceContextProvider {...args}>
    <GasPerformance />
  </PerformanceContextProvider>
);

export const PerformanceChart = ChartInputs.bind({});
PerformanceChart.args = {
  value: data,
};
