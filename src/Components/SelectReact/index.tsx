import React from "react";
import chroma from "chroma-js";

import { ColourOption, colourOptions } from "./docs/data";
import Select, { StylesConfig } from "react-select";

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    borderColor: "#E0E6ED",
    borderRadius: "4px",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",
      fontSize: "14px",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: "transparent",
      borderRadius: "20px",
      padding: "0 2px 0 5px",
      marginTop: "0",
      marginBottom: "0",
      border: "1px solid #007AFF",
      height: "25px",
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

const DropDownFilter = () => (
  <Select
    closeMenuOnSelect={false}
    defaultValue={[colourOptions[0], colourOptions[1]]}
    isMulti
    options={colourOptions}
    styles={colourStyles}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary: "#007AFF",
      },
    })}
    placeholder="Tìm kiếm"
  />
);
export default DropDownFilter;
