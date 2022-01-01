const colors = ['#fdfe8a' ,'#adffef' ,'#facb87' , '#dcbbff', '#f7898a' , '#cdff9b' , '#fdfdfd', '#FFAEBC', '#B4F8C8', '#A0E7E5', '#FBE7C6']


export class ColorInput extends React.Component {
    state = {
        toggleMenu: false
    }

    toggleColorsMenu = () => {
        this.setState(prevState => ({
            toggleMenu: !prevState.toggleMenu
        }))
    }

    handleChangeColor = (color) => {
        this.toggleColorsMenu();
        this.props.onChangeColor(this.props.note, color)
    }

    render() {
        const { toggleMenu } = this.state

        return (
            <React.Fragment>
                <img className="action-btn color" onClick={this.toggleColorsMenu} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMjJDNi40OSAyMiAyIDE3LjUxIDIgMTJTNi40OSAyIDEyIDJzMTAgNC4wNCAxMCA5YzAgMy4zMS0yLjY5IDYtNiA2aC0xLjc3Yy0uMjggMC0uNS4yMi0uNS41IDAgLjEyLjA1LjIzLjEzLjMzLjQxLjQ3LjY0IDEuMDYuNjQgMS42N0EyLjUgMi41IDAgMCAxIDEyIDIyem0wLTE4Yy00LjQxIDAtOCAzLjU5LTggOHMzLjU5IDggOCA4Yy4yOCAwIC41LS4yMi41LS41YS41NC41NCAwIDAgMC0uMTQtLjM1Yy0uNDEtLjQ2LS42My0xLjA1LS42My0xLjY1YTIuNSAyLjUgMCAwIDEgMi41LTIuNUgxNmMyLjIxIDAgNC0xLjc5IDQtNCAwLTMuODYtMy41OS03LTgtN3oiLz48Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE0LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KPC9zdmc+Cg=="/>
                { toggleMenu && <div className="color-input-modal">
                    <h4>Pick a color:</h4>
                    {colors.map(color => {
                        return <div
                            onClick={() => this.handleChangeColor(color)}
                            style={{ backgroundColor: color }}
                            key={color}
                            className="color-value">
                        </div>
                    })}
                    </div>
                }
            </React.Fragment>
        )
    }
}