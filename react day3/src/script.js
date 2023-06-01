class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
      };
    }
  
    handleValueChange = (newValue) => {
      this.setState({ value: newValue });
    }
  
    render() {
      return (
        <div>
          <ComponentA onValueChange={this.handleValueChange} />
          <ComponentB value={this.state.value} />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  