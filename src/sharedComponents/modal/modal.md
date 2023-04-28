# call

`export const Main = () => {
  const [open, handleOpen, handleClose] = useModal();
  return (
    <MainContainer>
      <InputParent>
        <button onClick={handleOpen}>hehehhe</button>
        <BasicModal
          open={open}
          handleClose={handleClose}
        >
          <>
            {" "}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </>
        </BasicModal>
      </InputParent>
    </MainContainer>
  );
};`
