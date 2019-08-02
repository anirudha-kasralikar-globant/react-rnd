// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired,
};

class TemperatureInput extends Component<*> {
  constructor(props) {
    super(props);
    (this: any).handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { props } = this;
    props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature } = this.props;
    const { scale } = this.props;
    return (
      <fieldset>
        <legend>
          {'Enter temperature in'}
          {scaleNames[scale]}
          {':'}
        </legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

TemperatureInput.propTypes = {
  scale: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  onTemperatureChange: PropTypes.func.isRequired,
};

class Calculator extends Component<*> {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const { scale } = this.state;
    const { temperature } = this.state;

    let celsius = temperature;
    if (scale === 'f') {
      celsius = tryConvert(temperature, toCelsius);
    }

    let fahrenheit = temperature;

    if (scale === 'c') {
      fahrenheit = tryConvert(temperature, toFahrenheit);
    }

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
