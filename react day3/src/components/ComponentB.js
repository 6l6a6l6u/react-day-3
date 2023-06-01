class ComponentB extends React.Component {
    render() {
      return (
        <div>
          <h1>Component B</h1>
          <p>Value from Component A: {this.props.value}</p>
        </div>
      );
    }
  }
  