export class LongText extends React.Component {
    state = {
        isLongTxtShown: false,
        text: this.props.text,
        maxLength: this.props.maxLength || 100,
        showToggleBtn: false
    }
componentDidMount() {
    if (this.state.text.length > this.state.maxLength) {
      this.setState({...this.state,isLongTxtShown: true, showToggleBtn: true})
    }
  }
  getText() {
    return this.state.isLongTxtShown ?
      `${this.state.text.substring(0, this.state.maxLength)}...` :
      this.state.text
  }
  toggleText = () => {
    this.setState({...this.state,isLongTxtShown: !this.state.isLongTxtShown})
  }
  renderToggleBtn(){
    return (
      <span className="btn-link" onClick={this.toggleText}>
        {this.state.isLongTxtShown ? 'read more' : '...show less'}
      </span>
    )
  }
  render() {
    return (
      <div className="long-text">
        <React.Fragment>
          <span>{this.getText()}</span>
          {this.state.showToggleBtn && this.renderToggleBtn()}
        </React.Fragment>
      </div>
    );
  }
}