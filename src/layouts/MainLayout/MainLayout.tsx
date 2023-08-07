import { setVisited } from "@/redux/config/config.slice";
import { RootState, useAppDispatch } from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const router = useRouter();
  const isVisited = useSelector((state: RootState) => state.config.isVisited);
  // useEffect(() => {
  //   if (!isVisited) router.push("/welcome");
  // }, [router, isVisited]);

  return <>{children}</>;
};

export default MainLayout;
