import React from "react";


export default function useInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleChange];
}
