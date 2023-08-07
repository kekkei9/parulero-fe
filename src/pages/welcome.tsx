import LightBulb from "@/components/LightBulb";
import { useState } from "react";

const WelcomePage = () => {
  const [circleClickCount, setCircleClickCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div>
      <LightBulb
        isLighted={circleClickCount % 2 === 0}
        onClick={() => setCircleClickCount((prev) => prev + 1)}
      />
    </div>
  );
};

export default WelcomePage;
