import { React } from "react";
import { Modal } from "./StyleFormComp";

export default function ModalFormComp(props) {
  return (
    <div>
      <Modal>
        Вашу IP-адресу {props.postRequest} додано до списку дозволених - тепер у
        вас є можливість підключатися до мережевих ресурсів. Плідної роботи!
      </Modal>
    </div>
  );
}
