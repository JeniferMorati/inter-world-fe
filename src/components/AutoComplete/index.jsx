import { useEffect, useState, memo } from "react";
import { Input, AutoComplete } from "antd";

const Complete = ({ items }) => {
  const [optionsList, setOptionsList] = useState([]);

  const renderTitle = (title) => <span>{title}</span>;

  const renderItem = (title, img) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 10,
        }}
      >
        <img src={img} width="40px" />
        {title}
      </div>
    ),
  });

  const onSearch = (value) => {
    if (items?.length > 0) {
      mountOptionsList(
        items.filter((country) => country?.name?.common?.toLowerCase().includes(value.toLowerCase()))
      );
      if (value === "") mountOptionsList();
    }
  };

  const mountOptionsList = (filter) => {
    if (filter) {
      return setOptionsList([
        {
          label: renderTitle("Destinos"),
          options: filter.map((item) =>
            renderItem(item?.name?.common, item?.flags?.svg)
          ),
        },
      ]);
    }
    setOptionsList([
      {
        label: renderTitle("Destinos"),
        options: items.map((item) =>
          renderItem(item?.name?.common, item?.flags?.svg)
        ),
      },
    ]);
  };

  useEffect(() => {
    if (items?.length > 0) {
      mountOptionsList();
    }
  }, [items]);

  return (
    <AutoComplete
      className="w-100 mb-4"
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth="100%"
      style={{ maxWidth: "100%" }}
      options={optionsList}
      onSearch={onSearch}
    >
      <Input.Search size="large" placeholder="Qual o seu destino?" className="w-100" />
    </AutoComplete>
  );
};

export default memo(Complete);
