import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

class TextInputGroup extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    type: "text"
  };

  render() {
    const {
      label,
      name,
      value,
      placeholder,
      type,
      onChange,
      error
    } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className={classnames("form-control form-control-lg", {
            "is-invalid": error
          })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

export default TextInputGroup;
