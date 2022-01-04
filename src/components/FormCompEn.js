import { React, useState } from "react";
import axios from "axios";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {
  Content,
  Logo,
  H1,
  P,
  Form,
  Label,
  InputTypeText,
  InputTypeSubmit,
  Lang,
} from "./StyleFormComp";
import UA from "../img/ukraine.png";
import ModalFormCompEn from "./ModalFormCompEn";

const FormCompEn = () => {
  const [getIp, setGetIp] = useState("");
  const [getPhone, setGetPhone] = useState("");
  const [getId, setGetId] = useState("");
  console.log(getIp);

  const match = useRouteMatch();

  const postRequest = () => {
    axios
      .get("http://ip-api.com/json?callback")
      .then((res) => setGetIp(res.data.query));

    const response = axios.patch("https://193.200.173.188:9876/?getsomething");
    return response;
  };

  const idlHandler = (e) => {
    const idCheck = new RegExp(/^[0-9]+$/);
    setGetId(e.target.value);

    if (e.target.value.match(idCheck)) {
      e.target.style.border = "2px solid green";
    } else {
      e.target.style.border = "2px solid red";
    }
  };

  const phonelHandler = (e) => {
    const telNumberCheck = new RegExp(/^\+?(\d{12})$/);
    setGetPhone(e.target.value);

    if (e.target.value.match(telNumberCheck)) {
      e.target.style.border = "2px solid green";
    } else {
      e.target.style.border = "2px solid red";
    }
  };

  return (
    <Content>
      <Lang>
        <Link to="/">
          <img src={UA} alt="UA" />
        </Link>
      </Lang>
      <Logo>
        <H1>Opening network access</H1>
        <P>
          Dear customers! For security, remote access to network resources are
          limited to a specific list of IP addresses. Temporarily fill in the
          form to access your internet channel click "Submit" below. Your
          current IP address will be added to list of permitted for 48 hours.
        </P>
        <Form>
          <P>
            <Label>Your customer ID:</Label>
            <InputTypeText
              type="text"
              name="id"
              size="4"
              autocomplete="off"
              onChange={(e) => idlHandler(e)}
            />
          </P>
          <P>
            <Label>Your mobile phone:</Label>
            <InputTypeText
              type="tel"
              autocomplete="off"
              name="tel"
              size="12"
              onChange={(e) => phonelHandler(e)}
            />
          </P>
          <P>
            <Link to={`${match.path}/ip_added`}>
              <InputTypeSubmit
                type="submit"
                value=" Submit "
                onClick={postRequest}
              />
            </Link>
            <Switch>
              <Route path={`${match.path}/ip_added`}>
                <ModalFormCompEn postRequest={getIp} />
              </Route>
            </Switch>
          </P>
        </Form>
      </Logo>
    </Content>
  );
};

export default FormCompEn;
