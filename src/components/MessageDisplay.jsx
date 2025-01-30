function MessageDisplay(props) {

    const message = props.isDarkMode ? 'Dark Mode' : 'Light Mode'

    return <div>{message}</div>
}

export default MessageDisplay;