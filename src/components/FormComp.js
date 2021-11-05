import React from "react";
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
} from "./StyleFormComp";

const FormComp = () => {
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
              type="text"
              autocomplete="off"
              name="tel"
              size="12"
            />
          </P>
          <P>
            <InputTypeSubmit type="submit" value=" Відправити " />
          </P>
        </Form>
      </Logo>
    </Content>
  );
};

export default FormComp;
