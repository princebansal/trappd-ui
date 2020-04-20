import { EnvironmentOutlined } from "@ant-design/icons";
import { Select, Spin } from "antd";
import React from "react";

const { Option, OptGroup } = Select;

class SelectCityContainer extends React.Component {
  onCityChanged = (value, option) => {
    this.props.onCityChanged(value, option.type);
  };
  onGeoChanged = (value, option) => {
    this.props.onGeoChanged(
      option.type === "city" ? value + option.state : value,
      option.type
    );
  };

  render() {
    const { geo } = this.props;
    return (
      <div className="SelectCityContainer">
        <Select
          style={{ width: 200 }}
          suffixIcon={<EnvironmentOutlined />}
          menuItemSelectedIcon={<EnvironmentOutlined />}
          showSearch
          optionFilterProp="children"
          placeholder="Select region"
          onChange={this.onGeoChanged}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
        >
          <Option disabled>Select region</Option>
          <OptGroup label="Countries">
            {geo.items.countries &&
              geo.items.countries.map((country) => (
                <Option value={country.code} key={country.code} type="country">
                  {country.name}
                </Option>
              ))}
          </OptGroup>
          <OptGroup label="States">
            {geo.items.states &&
              geo.items.states.map((state) => (
                <Option value={state.code} key={state.code} type="state">
                  {state.name}
                </Option>
              ))}
          </OptGroup>
          <OptGroup label="Cities">
            {geo.items.cities &&
              geo.items.cities.map((city) => (
                <Option
                  value={city.code}
                  key={city.code}
                  type="city"
                  state={city.stateCode}
                >
                  {city.name}
                </Option>
              ))}
          </OptGroup>
        </Select>
        <Spin style={{ marginLeft: "10px" }} spinning={geo.loading} />
      </div>
    );
  }
}

export default SelectCityContainer;
