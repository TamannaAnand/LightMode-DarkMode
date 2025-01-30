import { useState } from "react"

function ThemeToggler() {

    const [darkMode, setDarkMode] = useState(true)

    const styles = {
        backgroundColor: darkMode ? '#000' : '#fff',
        height: '100vh',
        width: '100%',
        color: darkMode ? '#fff' : '#000',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'arial'
    }

    const handleClick = () => {
        return setDarkMode(!darkMode);
        
    }



    return (
        <div style={styles}>
            <button onClick={handleClick}>
                Switch to Light Mode
            </button>
            Some Text
        </div>
    )

};

export default ThemeToggler;