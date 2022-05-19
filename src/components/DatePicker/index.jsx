import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}

export default () => (
  <Space direction="vertical" className="w-100">
    <RangePicker
      className="w-100"
      format="MM-DD-YYYY"
      onChange={onChange}
      placeholder={['Data de inicio', 'Data de fim']}
      locale="pt_BR"
      onOk={onOk}
    />
  </Space>
);
