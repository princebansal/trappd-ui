import { EnvironmentOutlined } from "@ant-design/icons";
import { Select, Spin } from "antd";
import React from "react";

const { Option } = Select;

class SelectCityContainer extends React.Component {
  onCityChanged = (value) => {
    console.log(`selected ${value}`);
    this.props.onCityChanged(value);
  };

  onBlur = () => {
    console.log("blur");
  };

  onFocus = () => {
    console.log("focus");
  };

  onSearch = (val) => {
    console.log("search:", val);
  };
  render() {
    const { cities } = this.props;
    return (
      <div className="SelectCityContainer">
        <Select
          style={{ width: 200 }}
          suffixIcon={<EnvironmentOutlined />}
          menuItemSelectedIcon={<EnvironmentOutlined />}
          showSearch
          placeholder="Select region"
          optionFilterProp="children"
          onChange={this.onCityChanged}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option disabled>Select city</Option>
          {cities.items &&
            cities.items.map((city) => (
              <Option value={city.code} key={city.code}>
                {city.name}
              </Option>
            ))}
        </Select>
        <Spin style={{ marginLeft: "10px" }} spinning={cities.loading} />
      </div>
    );
  }
}

export default SelectCityContainer;
