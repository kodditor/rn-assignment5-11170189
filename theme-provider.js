import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }){

    const [ themeContext, setThemeContext ] = useState({
        theme: "light",
        primaryColor: "#171722",
        secondaryColor: "white",
        neutralColor: "grey",
        neutralBgColor: "#e8e8e8"
    })
    
      function toggleTheme(){
        setThemeContext( prev => { 
            return ({
                ...prev, 
                theme: prev.theme == "light"  ? "dark" : "light",
                primaryColor: prev.theme == "light" ? 'white' : "#171722",
                secondaryColor: prev.theme == "light" ? '#171722' : "white",
                neutralColor: prev.theme == "light" ? "#e8e8e8" : 'grey',
                neutralBgColor: prev.theme == "light" ? "#1f1f2d" : "#e8e8e8",

            })
          })  
      }

      return (
        <ThemeContext.Provider value={{ themeContext, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
      )

}