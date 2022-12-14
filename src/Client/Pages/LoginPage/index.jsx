import { Button, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validateRequireInput,
} from "../../../App/validator";
import { UserContext } from "../../../App";
const { Item } = Form;

const LogInClient = () => {
  // const { user, setUser } = useContext(UserContext);
  // const isLoggedIn = user.loggedIn;

  const accounts = [
    {
      account: "truong8dt@gmail.com",
      password: "Truong1234@",
      id: "736023",
      role: true,
    },
    {
      account: "truong8dt@gmail.com",
      password: "Truong123@",
      id: "736024",
      role: false,
    },
  ];
  const [isDone, setIsDone] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();
  function onFinish(values) {
    accounts?.map((item) => {
      if (
        values?.account === item?.account &&
        values?.password === item?.password
      ) {
        debugger;
        if (item?.role) {
          localStorage.setItem("token", item?.role);
          navigate(`/client-Clinic/${item?.id}`);
        } else {
          localStorage.setItem("token", item?.role);
          return false;
        }
      } else if (
        values?.account !== item?.account ||
        values?.password !== item?.password
      ) {
        setIsDone(true);
        localStorage.setItem("token", !isDone);
      }
    });
    setIsDirty(false);
  }
  return (
    <>
      <div className="overflow-y-hidden bg-[url('https://nhakhoanucuoiviet.vn/frontend/online/images/online_cover.jpg')] ">
        <div className="h-[100vh]">
          <div className="">
            <div className="max-w-[1170px] my-0 mx-auto">
              <div className="pt-10">
                <div className="flex justify-center">
                  <Link to="/">
                    <img
                      src="https://nhakhoanucuoiviet.vn/logo.png"
                      style={{ width: "60%" }}
                    />
                  </Link>
                </div>
                <div className="pt-12">
                  <h1 className="text-5xl flex text-blue-400 text-center justify-center  ">
                    Gi???i ph??p theo d??i s???c kh???e to??n di???n
                  </h1>
                </div>
                <div className="flex justify-center items-center flex-wrap z-10 relative pt-9 pb-3 ">
                  <div
                    className=" w-full max-w-[600px] p-6"
                    style={{
                      borderRadius: "1px solid #d8d8d8",
                      background: "rgba(255,255,255,0.8)",
                      boxShadow: "0 0 15px 0px rgb(27 117 188 / 50%)",
                    }}
                  >
                    <div className="text-[#585858] uppercase text-2xl font-normal text-center mb-5">
                      B???nh ??n ??i???n t???
                      {isDone && (
                        <div className="text-red-600 text-base normal-case p-5 mt-5 bg-red-200">
                          T??i kho??n ho???c m???t kh???u kh??ng ch??nh x??c
                        </div>
                      )}
                    </div>
                    <Form
                      onFinish={(value) => {
                        onFinish(value);
                      }}
                      onValuesChange={() => !isDirty && setIsDirty(true)}
                      layout="vertical"
                    >
                      <Item
                        name="account"
                        label={
                          <>
                            <span className="text-xl text-[#1875BC]">
                              T??i kho???n
                            </span>
                          </>
                        }
                        required
                        rules={[
                          validateRequireInput("Kh??ng b??? tr???ng tr?????ng n??y"),
                          validateEmail("Vui l??ng nh???p ????ng ?????nh d???ng email"),
                        ]}
                      >
                        <Input placeholder="Nh???p email" />
                      </Item>
                      <Item
                        name="password"
                        label={
                          <>
                            <span className="text-xl text-[#1875BC]">
                              M???t kh???u
                            </span>
                          </>
                        }
                        required
                        rules={[
                          validateRequireInput("Kh??ng b??? tr???ng tr?????ng n??y"),
                          validatePassword(
                            "Vui l??ng nh???p ????ng ?????nh d???ng: bao g???m ch???, s??? v?? c??c k?? t??? ?????c bi???t"
                          ),
                        ]}
                      >
                        <Input.Password placeholder="Nh???p m???t kh???u" />
                      </Item>

                      <div className="text-center my-8">
                        <Button
                          size="large"
                          type="primary"
                          disabled={!isDirty}
                          htmlType="submit"
                          style={{
                            width: "170px",
                            marginLeft: "10px",
                            textAlign: "center",
                          }}
                        >
                          ????ng nh???p
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInClient;
