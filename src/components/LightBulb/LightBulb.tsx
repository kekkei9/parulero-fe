type Props = {
  isLighted: boolean;
  onClick: () => void;
};

const LightBulb = ({ isLighted, onClick }: Props) => {
  return (
    <>
      <div onClick={onClick}>ehe</div>
    </>
  );
};

export default LightBulb;
