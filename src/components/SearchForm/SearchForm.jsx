import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = { query: this.props.value || '' };

  static defaultProps = {
    value: '',
  };

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  handlseSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    this.setState({ query: '' });
    this.props.onChange(query);
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handlseSubmit}>
        <input type="text" value={query} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
