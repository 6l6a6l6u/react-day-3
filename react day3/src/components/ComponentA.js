class ComponentA extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
      };
    }
  
    handleChange = (e) => {
      this.setState({ value: e.target.value });
      this.props.onValueChange(e.target.value);
    }
  
    render() {
      return (
        <div>
          <h1>Component A</h1>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter a value" />
        </div>
      );
    }
  }
  