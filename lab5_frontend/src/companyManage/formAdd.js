import { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

/*Components*/
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  message,
  Modal,
} from "antd";
import axios from "axios";

function FormAdd({visible, setVisible, company}) {
  const [form] = Form.useForm();
  let location = useLocation();
  const { Option } = Select;
  const [visibleModal, setVisibleModal] = useState(false);
  const [skills, setSkills] = useState([]); 

  useEffect(() => {
    setVisibleModal(visible);
  }, [visible]);

  useEffect(() => {
    let getApiSkill = async () => {
      let datas = await axios.get("http://localhost:8080/company/get-all-skill");
      setSkills(datas.data);
    };
    getApiSkill();
  },[JSON.stringify(location.state)])

  const handleCancel = () => {
    form.resetFields();
    setVisibleModal(false);
    if (typeof setVisible === "function") {
      setVisible(false);
    }
  };
  

  const onFinish = async (values) => {
    try {
      const res = await axios.post("http://localhost:8080/company/create-job",{
        name: values.fullName,
        description: values.desc,
        company: company
      });
      // const addSkill = await axios.post("http://localhost:8080/company/create-skill",{
      //   // type: values.skill_type,
      //   skillName: values.skill_name,
      //   skillDescription: values.skill_desc        
      // });
      if (res) {
        message.success("Thêm thành công!");
        console.log(values);
        setVisible(false);
      }
    } catch (e) {
      console.log("Error", e);
      message.error(e.message);
    }
  };


  return (
    <Modal
    title="Add New"
    open={visibleModal}
    onOk={() => handleCancel()}
    onCancel={() => handleCancel()}
    width="50%"
    footer={null}
>
          <Form
            form={form}
            onFinish={onFinish}
            name="form_add_account"
            className="ant-advanced-search-form"
          >
            <Row gutter={15}>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Job name"
                  name="fullName"
                  rules={[
                    { required: true, message: "Please job name!" },
                  ]}
                >
                  <Input maxLength={100}/>
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Description"
                  name="desc"
                  rules={[
                    { required: true, message: "Please description!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>              
            </Row>
            <Row>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Skill Name"
                  name="skill_name"
                  rules={[
                    { required: true, message: "Please skill name!" },
                  ]}
                >
                  <Input/>
                </Form.Item>
              </Col>   
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Skill Description"
                  name="skill_desc"
                  rules={[
                    { required: true, message: "Please skill description!" },
                  ]}
                >
                  <Input/>
                </Form.Item>
              </Col>              
            </Row>
            <Row>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Skill Type"
                  name="skill_type"
                >
                  <Select>
                    <Option value="0">SOFT_SKILL</Option>
                    <Option value="1">UNSPECIFIC</Option>
                    <Option value="2">TECHNICAL_SKILL</Option>
                  </Select>
                </Form.Item>
              </Col>   
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Skill Level"
                  name="skill_level"
                >
                  <Select>
                    <Option value="0">MASTER</Option>
                    <Option value="1">BEGINER</Option>
                    <Option value="2">ADVANCED</Option>
                    <Option value="3">PROFESSIONAL</Option>
                    <Option value="4">IMTERMEDIATE</Option>
                  </Select>
                </Form.Item>
              </Col>              
            </Row>
            <div>
              <Button
                className="btn-signin"
                type="light"
                size="large"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                className="btn-signin"
                htmlType="submit"
                type="primary"
                size="large"
              >
                Save
              </Button>
            </div>
          </Form>
    </Modal>
  );
}

export default FormAdd;
