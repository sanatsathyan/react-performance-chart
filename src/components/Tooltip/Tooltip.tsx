import MaterialTooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type Props = {
  title: string;
  arrow?: boolean;
  fontSize?: number;
};

const defaultProps = {
  arrow: false,
  fontSize: 14,
};

export const Tooltip = ({
  title,
  arrow,
  fontSize,
}: Props & typeof defaultProps) => {
  return (
    <div className="tooltip-container">
      <MaterialTooltip title={title} arrow={arrow}>
        <InfoOutlinedIcon sx={{ fontSize }} />
      </MaterialTooltip>
    </div>
  );
};

Tooltip.defaultProps = defaultProps;
