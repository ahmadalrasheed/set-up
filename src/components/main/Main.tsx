import { VerticalNav } from "../../sharedComponents";
import { MainContainer } from "./Theme";
export const Main = () => {
  return (
    <MainContainer>
      <VerticalNav isMobileDrawer={false} />
    </MainContainer>
  );
};
