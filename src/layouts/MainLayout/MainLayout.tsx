import { isVisited } from "@/utils/localStorage";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (!isVisited) router.push("/welcome");
  }, [router]);

  return <>{children}</>;
};

export default MainLayout;
