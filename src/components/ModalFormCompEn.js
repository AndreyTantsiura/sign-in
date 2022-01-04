import { React } from "react";
import { Modal } from "./StyleFormComp";

export default function ModalFormCompEn(props) {
  return (
    <div>
      <Modal>
        Your IP address {props.postRequest} has been whitelisted - you now have
        it the ability to connect to network resources. Fruitful work!
      </Modal>
    </div>
  );
}
