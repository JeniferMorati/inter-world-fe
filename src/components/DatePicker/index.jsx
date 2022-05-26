import { DatePicker, Space } from "antd";
import { useDictionary } from "../../hooks/useDictionary";

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}

export default () => {
  const dictionary = useDictionary().budgets;

  return (
    <Space direction="vertical" className="w-100">
      <RangePicker
        className="w-100"
        format="MM-DD-YYYY"
        onChange={onChange}
        placeholder={[dictionary.startDate, dictionary.endDate]}
        locale="pt_BR"
        onOk={onOk}
      />
    </Space>
  );
};
