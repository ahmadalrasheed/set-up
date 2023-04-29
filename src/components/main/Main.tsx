import { VerticalNav } from "../../sharedComponents";
import { MainContainer, InputParent, FormController } from "./Theme";
export const Main = () => {
  return (
    <MainContainer>
      <InputParent>
        <VerticalNav isMobileDrawer={false} />
      </InputParent>
    </MainContainer>
  );
};
