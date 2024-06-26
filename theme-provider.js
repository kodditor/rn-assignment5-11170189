import { createContext, useState } from 'react';

export default function ThemeProvider({ children }){
    const ThemeContext = createContext();

    const [ themeContext, setThemeContext ] = useState({
        theme: "light",
        primaryColor: "black",
        secondaryColor: "white",
        neutralColor: "grey",
        neutralBgColor: "lightgrey"
    })
    

      function toggleTheme(){
        setThemeContext( prev => { 
            return ({
                ...prev, 
                theme: prev.theme == "light"  ? "dark" : "light",
                primaryColor: prev.theme == "light" ? "black" : 'white',
                secondaryColor: prev.theme == "light" ? "white" : 'black',
                neutralColor: prev.theme == "light" ? "grey" : 'lightgrey',
                neutralBgColor: prev.theme == "light" ? "lightgrey" : 'grey',

            })
          })  
      }

      return (
        <ThemeContext.Provider value={{ themeContext, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
      )

}