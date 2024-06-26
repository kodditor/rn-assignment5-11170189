import { View, Text, StyleSheet, Switch } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../theme-provider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function SettingsPage({ navigation }) {

    const { themeContext, toggleTheme } = useContext(ThemeContext)
    
    const isToggled = themeContext.theme !== 'dark';

    const styles = StyleSheet.create({
        container: {
            padding: "5%",
            paddingTop: 60,
            backgroundColor: themeContext.secondaryColor,
            height: '100%',
        }
    })

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', marginBottom: 80, fontSize: 22, color: themeContext.primaryColor, fontWeight: 600 }}>Settings</Text>
            <View>
                { settingOptions.map((title, idx) => {
                    return (
                        <View
                            key={idx}
                            style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', borderBottomColor: themeContext.neutralColor, borderBottomWidth: 0.25, paddingVertical: 15, marginBottom: 5 }}
                        >
                            <Text style={{ fontSize: 18, color: themeContext.primaryColor,  fontWeight: 600}}>{title}</Text>
                            <FontAwesomeIcon icon={faChevronRight} size={12} color={themeContext.neutralColor} />
                        </View>
                    )
                })}
            </View>
            <View style={{ display: 'flex', marginTop: 30, justifyContent:'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ fontSize: 18,  fontWeight: 600, color: themeContext.primaryColor }}>Dark Theme</Text>
                <Switch
                    onValueChange={toggleTheme}
                    value={!isToggled}
                    thumbColor={isToggled ? "lightgrey" : 'white'}
                    trackColor={isToggled ? "gray": "green" }
                />
            </View>
        </View>
    )
}

const settingOptions = ["Language", 'My Profile', "Contact Us", "Change Password", "Privacy Policy"]