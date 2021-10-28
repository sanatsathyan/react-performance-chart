import { Tooltip } from "../Tooltip/Tooltip";

import "./Header.scss";

type Props = {
  title: string;
  tooltipContent?: string;
};

export const Header = ({ title, tooltipContent }: Props) => {
  return (
    <div className="header-container">
      <span className="header-title">{title}</span>
      {tooltipContent && <Tooltip title={tooltipContent} fontSize={16} arrow />}
    </div>
  );
};
