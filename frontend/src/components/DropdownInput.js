import { Box, FormLabel, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function DropdownInput(props) {
  return (
    <Box>
      <FormLabel htmlFor={props.id}>{props.title}</FormLabel>
      <Select
        id={props.id}
        defaultValue={props.defaultOption}
        onChange={props.onChange}
      >
        {props.options.map((optionName) => (
          <option value={optionName}>{optionName}</option>
        ))}
      </Select>
    </Box>
  );
}

DropdownInput.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func,
};
