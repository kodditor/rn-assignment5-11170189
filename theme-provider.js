import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }){

    const [ themeContext, setThemeContext ] = useState({
        theme: "light",
        primaryColor: "black",
        secondaryColor: "white",
        neutralColor: "grey",
        neutralBgColor: "#e8e8e8"
    })
    

      function toggleTheme(){
        setThemeContext( prev => { 
            return ({
                ...prev, 
                theme: prev.theme == "light"  ? "dark" : "light",
                primaryColor: prev.theme == "light" ? "black" : 'white',
                secondaryColor: prev.theme == "light" ? "white" : 'black',
                neutralColor: prev.theme == "light" ? "grey" : '#d3d3d3',
                neutralBgColor: prev.theme == "light" ? "#d3d3d3" : 'grey',

            })
          })  
      }

      return (
        <ThemeContext.Provider value={{ themeContext, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
      )

}