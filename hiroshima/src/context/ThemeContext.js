import { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        foreground: "#242526",
         background: "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(176,176,176,1) 50%, rgba(59,59,59,1) 100%)",
        button: " #11814d",
    },
    dark: {
        foreground: "#fff",
        background: "#242526",
        button: "#ba8fff",
    }
}

export const ThemeContext = createContext({
    theme: {},
    toggleTheme: () => { },
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        document.body.style.background = theme.background;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevValue) => {
            const newTheme = prevValue === themes.dark ? themes.light : themes.dark;
            return newTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
};