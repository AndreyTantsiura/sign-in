import { React, useState } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import {
  Content,
  Logo,
  Img,
  H1,
  P,
  Form,
  Label,
  InputTypeText,
  InputTypeSubmit,
  Modal,
} from "./StyleFormComp";

const FormComp = () => {
  const [getIp, setGetIp] = useState("");
  const [getPhone, setGetPhone] = useState("");

  const postRequest = () => {
    axios
      .get(`http://ip-api.com/json?callback`)
      .then((res) => setGetIp(res.data.query));

    const response = axios.patch("https://193.200.173.188:9876/?getsomething");
    return response;
  };

  const phonelHandler = (e) => {
    const passCheck = new RegExp(/^\+?3?8?(0\d{9})$/);
    setGetPhone(e.target.value);

    if (e.target.value.match(passCheck)) {
      e.target.style.borderColor = "green";
    } else {
      e.target.style.borderColor = "red";
    }
  };

  return (
    <Content>
      <Logo>
        <Img src="http://informatika.in.ua/system/img/logo_dark.png" alt="" />
        <H1> Відкриття доступу до мережі</H1>
        <P>
          Дорогі клієнти! Для забезпечення безпеки віддалений доступ до
          мережевих ресурсів обмежується певним списком IP адрес. Щоб тимчасово
          відкрити доступ з вашого інтернет-каналу, будь ласка, заповніть форму
          нижче, натисніть "Відправити". Вашу поточну IP адресу буде додано до
          списку дозволених на 48 годин.
        </P>
        <Form>
          <P>
            <Label>Ваш ID клиента:</Label>
            <InputTypeText type="text" name="id" size="4" autocomplete="off" />
          </P>
          <P>
            <Label>Ваш мобильный телефон:</Label>
            <InputTypeText
              type="tel"
              autocomplete="off"
              name="tel"
              size="12"
              onChange={(e) => phonelHandler(e)}
            />
          </P>
          <P>
            <Link to="/ip_added">
              <InputTypeSubmit
                type="submit"
                value=" Відправити "
                onClick={postRequest}
              />
            </Link>
            <Switch>
              <Route path="/ip_added">
                <Modal>
                  Вашу IP-адресу {getIp} додано до списку дозволених - тепер у
                  вас є можливість підключатися до мережевих ресурсів. Плідної
                  роботи!
                </Modal>
              </Route>
            </Switch>
          </P>
        </Form>
      </Logo>
    </Content>
  );
};

export default FormComp;
