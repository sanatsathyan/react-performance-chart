import { createContext } from "react";
import { IGasPerformance } from "../data/iMock";

const PerformanceContext = createContext<IGasPerformance>(
  {} as IGasPerformance
);

const PerformanceContextProvider = PerformanceContext.Provider;
const PerformanceContextConsumer = PerformanceContext.Consumer;

export {
  PerformanceContext,
  PerformanceContextProvider,
  PerformanceContextConsumer,
};
