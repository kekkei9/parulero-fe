import clsx from "clsx";
import LightIcon from "@mui/icons-material/Light";

type Props = {
  isLighted: boolean;
  onClick: () => void;
};

const LightBulb = ({ isLighted, onClick }: Props) => {
  return (
    <div className="relative w-fit">
      <div className={clsx("light-spread", isLighted && "scale-100")} />
      <LightIcon
        className={clsx(
          "cursor-pointer w-12 h-12 rounded-full z-[2] mix-blend-difference"
        )}
        onClick={onClick}
      />
    </div>
  );
};

export default LightBulb;
