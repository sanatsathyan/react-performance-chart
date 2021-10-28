import { data } from "../data/Mock";
import { PerformanceContextProvider } from "../helpers/Context";
import { GasPerformance } from "./GasPerformance/GasPerformance";

export const Main = () => {
  return (
    <PerformanceContextProvider value={data}>
      <GasPerformance />
    </PerformanceContextProvider>
  );
};
