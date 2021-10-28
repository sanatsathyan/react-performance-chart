import { ChangePercentage } from "../ChangePercentage/ChangePercentage";

import "./PerformanceHeader.scss";

type Props = {
  value: string;
  changePercentage?: number;
  title: string;
};

const PerformanceHeader = ({ value, title, changePercentage }: Props) => {
  return (
    <div className="performance-header-container">
      <div className="performance-value-section">
        <span className="performance-header-value">{value}</span>
        {changePercentage && <ChangePercentage value={changePercentage} />}
      </div>
      <span className="performance-header-title">{title}</span>
    </div>
  );
};

export { PerformanceHeader };
