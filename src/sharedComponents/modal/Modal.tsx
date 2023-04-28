import Modal from "@mui/material/Modal";
import { ModalBox } from "./Theme";
interface ModalInfo {
  children: any;
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
}
export default function BasicModal({ children, open, handleClose }: ModalInfo) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>{children}</ModalBox>
      </Modal>
    </div>
  );
}
