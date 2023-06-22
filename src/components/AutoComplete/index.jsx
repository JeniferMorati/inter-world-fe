import { useEffect, useState, memo } from "react";
import { Input, AutoComplete } from "antd";
import { useDictionary } from "../../hooks/useDictionary";

const Complete = ({ items, handleClickOption }) => {
  const dictionary = useDictionary().budgets;
  const [optionsList, setOptionsList] = useState([]);

  const renderTitle = (country, flag) => (
    <span className="d-flex justify-content-start align-items-center gap-1">
      <img src={flag} width="20px" />
      {country}
    </span>
  );

  const renderItem = ({ city, flag, country }) => ({
    value: city,
    label: (
      <div
        onClick={() => handleClickOption({ city, flag, country })}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {city}
      </div>
    ),
  });

  const onSearch = (value) => {
    if (items?.length > 0) {
      mountOptionsList(
        items.filter((item) =>
          item?.country?.toLowerCase().includes(value.toLowerCase())
        )
      );
      if (value === "") mountOptionsList();
    }
  };

  const mountOptionsList = (filter) => {
    if (filter) {
      return setOptionsList(
        filter.map((item) => ({
          label: renderTitle(item?.country, item?.flag),
          options: item?.cities?.map((item) => renderItem(item)),
        }))
      );
    }
    setOptionsList(
      items.map((destination) => ({
        label: renderTitle(destination?.country, destination?.flag),
        options: destination?.cities?.map((item) =>
          renderItem({
            city: item,
            country: destination.country,
            flag: destination.flag,
          })
        ),
      }))
    );
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
      <Input.Search
        size="large"
        placeholder={dictionary?.destinySearch}
        className="w-100"
      />
    </AutoComplete>
  );
};

export default memo(Complete);
