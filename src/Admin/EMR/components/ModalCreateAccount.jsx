import { Button, Form, Input, message, Modal, Select } from "antd";
import { uniqueId } from "lodash";
import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "../../../App/api/axios";
import { LOGIN_URL } from "../../../App/api/urlApi";
import {
  validateEmail,
  validateMaxLengthStr,
  validatePassword,
  validateRequireInput,
} from "../../../App/validator";

const { Item } = Form;
const ModalCreateAccount = ({
  createAccount,
  setCreateAccount,
  form,
  dataTable,
  setDataTable,
  refetch,
}) => {
  const [isDirty, setIsDirty] = useState(false);
  const account = useMutation(
    async (data) => {
      const response = await axios.post(LOGIN_URL, data);
      console.log(response);
    },
    {
      onSuccess: () => {
        message.success("Tạo tài khoản thành công");
        refetch();
      },
      onError: (err) => {
        message.error("Tạo tài khoản thất bại");
      },
    }
  );
  return (
    <Modal
      visible={createAccount}
      okButtonProps={{ disabled: !isDirty }}
      onCancel={() => setCreateAccount(false)}
      onOk={() => setCreateAccount(false)}
      centered
      closable={false}
      footer={null}
      okText="Xác nhận"
      cancelText="Huỷ"
      maskClosable
      width="60rem"
      bodyStyle={{
        padding: "2rem 1.9rem",
        maxHeight: "calc(100vh - 3rem)",
        overflow: "auto",
      }}
      destroyOnClose
    >
      <div className="mb-6">
        <div className="font-bold text-base justify-center flex mb-4 uppercase">
          Tạo tài khoản
        </div>
      </div>

      <Form
        onFinish={(value) => {
          account.mutate({
            name: value.name,
            userName: value.email,
            passWord: value.password,
            role: value.permissions,
          });
          setCreateAccount(false);
        }}
        onValuesChange={() => !isDirty && setIsDirty(true)}
        className="text-base grid gap-4"
        layout="vertical"
      >
        <div className="mx-4">
          <div className="flex gap-4 ">
            <Item
              className="w-1/2"
              name="name"
              required
              style={{ marginBottom: "8px" }}
              label="Tên Đầy Đủ"
              rules={[
                validateRequireInput(
                  "Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Nguyễn Văn Trường. Vui lòng nhập thông tin"
                ),
                validateMaxLengthStr(
                  50,
                  "Vui lòng nhập thông tin đúng qui tắc: Độ dài không quá 50 ký tự"
                ),
              ]}
            >
              <Input type="text" placeholder="Nhập họ và tên" />
            </Item>
            <Item
              className="w-1/2"
              name="email"
              required
              style={{ marginBottom: "8px" }}
              label="Địa chỉ email"
              rules={[
                validateRequireInput("Vui lòng nhập email"),
                validateEmail("Vui lòng nhập đúng định dạng email"),
              ]}
            >
              <Input type="text" placeholder="Nhập email" />
            </Item>
          </div>
          <div className="flex gap-4 mt-4">
            <Item
              className="w-1/2 "
              name="password"
              required
              style={{ marginBottom: "4px" }}
              label="Mật khẩu"
              rules={[
                validateRequireInput("Vui lòng nhập mật khẩu"),
                validatePassword(
                  "Vui lòng nhập đúng định dạng: bao gồm chữ, số và các ký tự đặc biệt"
                ),
              ]}
            >
              <Input placeholder="Nhập mật khẩu" />
            </Item>
            <Item
              className="w-1/2 "
              name="enterPassword"
              required
              style={{ marginBottom: "4px" }}
              label="Nhập Lại Mật Khẩu"
              rules={[
                validateRequireInput("Vui lòng nhập mật khẩu"),
                validatePassword(
                  "Vui lòng nhập đúng định dạng: bao gồm chữ, số và các ký tự đặc biệt"
                ),
              ]}
            >
              <Input placeholder="Nhập lại mật khẩu" />
            </Item>
          </div>

          <div className="flex gap-4 mt-4">
            <Item
              className="w-full "
              name="permissions"
              required
              style={{ marginBottom: "4px" }}
              rules={
                [
                  // validateRequireInput(tValidation('opt_isRequired', { field: 'cardDescription' })),
                  // validateMaxLengthStr(
                  // 	300,
                  // 	'Vui lòng nhập thông tin đúng qui tắc: Độ dài không quá 300 ký tự',
                  // ),
                ]
              }
            >
              <Select
                allowClear
                showArrow
                showSearch
                mode="multiple"
                className="w-full flex-1"
                placeholder="Chọn Nhóm Quyền"
                // onChange={onChangeSelect}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    label: "Supper Admin",
                    value: 1,
                  },
                  {
                    label: "Admin",
                    value: 2,
                  },
                  {
                    label: "Nurse",
                    value: 3,
                  },
                  {
                    label: "Doctor",
                    value: 4,
                  },
                  {
                    label: "Technicians",
                    value: 5,
                  },
                  {
                    label: "Receptionist",
                    value: 6,
                  },
                ]}
                autoFocus
              />
            </Item>
          </div>
        </div>

        {/* Save */}
        <div className="text-center my-4">
          <Button
            size="large"
            onClick={() => setCreateAccount(false)}
            style={{
              width: "170px",
              marginRight: "10px",
              textAlign: "center",
            }}
          >
            Huỷ
          </Button>
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
            Xác nhận
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalCreateAccount;
