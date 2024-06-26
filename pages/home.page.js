import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { faMagnifyingGlass, faArrowUp, faArrowDown, faDollarSign, faCloudUpload, faShoppingCart, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../theme-provider";
import { faApple, faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function HomePage({ navigation }) {

    const { themeContext } = useContext(ThemeContext)
    
    const styles = StyleSheet.create({
        container: {
            padding: "5%",
            paddingTop: 50,
            backgroundColor: themeContext.secondaryColor,
        }
    })

    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                    <View style={{ display: "flex",  borderRadius: 30, overflow: 'hidden' }}>
                        <Image
                            source={require('../assets/userAvatar.png')}
                            style={{width:50, height: 50}}
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <Text style={{ color: themeContext.neutralColor, fontWeight: 400 }} >Welcome Back</Text>
                        <Text style={{ color: themeContext.primaryColor, fontWeight: 600, fontSize: 18  }}>Kwabena Owusu-Darko</Text>
                    </View>
                </View>
                <View>
                    <View style={{ display: "flex", width:40, height: 40, alignItems: 'center', borderRadius: 30, overflow: 'hidden', justifyContent: 'center', backgroundColor: themeContext.neutralBgColor, overflow: 'hidden' }}>
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass}
                            size={13}
                            color={themeContext.primaryColor}
                        />
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', marginTop: 30}}>
                <Image
                    source={require('../assets/bank-card.png')}
                    style={{ width: '100%', height: 195  }}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent:'space-between' }}>

                {
                    actionIcons.map(({ action, icon}, idx) => {
                        return (
                            <View style={{ width: 50, display: 'flex', alignItems: 'center', gap: 5 }} key={idx}>
                                <View style={{ width: 50, aspectRatio: 1, backgroundColor: themeContext.neutralBgColor, borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FontAwesomeIcon color={themeContext.primaryColor} icon={icon} />
                                </View>
                                <Text style={{ color: themeContext.neutralColor }}>{action}</Text>
                            </View>
                        )
                    })
                }
            </View>
            <View style={{ marginTop: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={{ color: themeContext.primaryColor, fontSize: 23, fontWeight: 600 }}>Transaction</Text>
                    <Text style={{ color: '#0067fe', fontWeight: 600 }}>See All</Text>
                </View>
                <View>
                    <FlatList
                        data={transactions}
                        keyExtractor={(item) => item.category}
                        horizontal={false}

                        renderItem={( { item } ) => {
                            return (
                                <View style={{ display: 'flex', marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ display: 'flex', gap: 20, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ backgroundColor: themeContext.neutralBgColor, borderRadius: 50, width: 40, aspectRatio: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FontAwesomeIcon icon={item.icon} color={ (item.title == "Spotify") ? themeContext.theme == 'light' ? "green" : "lightgreen" : (item.title == 'Grocery') ? "red" : themeContext.primaryColor } />
                                        </View>
                                        <View>
                                            <Text style={{ color: themeContext.primaryColor, fontSize: 19, fontWeight: 600}}>{item.title}</Text>
                                            <Text style={{ color: themeContext.neutralColor }}>{item.category}</Text>
                                        </View>
                                    </View>
                                    <Text style={{ 
                                        ...( item.balance.startsWith('$') ? { color: '#0067fe' } : { color: themeContext.primaryColor }),
                                        fontWeight: 600
                                     }} >{item.balance}</Text>
                                </View>
                            )

                        }}
                    />
                </View>
            </View>
        </View>
    )
}


const actionIcons = [
    {
        action: 'Sent',
        icon: faArrowUp,
    },
    {
        action: 'Receive',
        icon: faArrowDown,
    },
    {
        action: 'Loan',
        icon: faDollarSign,
    },
    {
        action: 'Topup',
        icon: faCloudUpload,
    },
]

const transactions = [
    {
        title: 'Apple Store',
        category: 'Entertainment',
        balance: '- $5,99',
        icon: faApple
    },
    {
        title: 'Spotify',
        category: 'Music',
        balance: '- $12,99',
        icon: faSpotify
    },
    {
        title: 'Money Transfer',
        category: 'Transaction',
        balance: '$300',
        icon: faDownload
    },
    {
        title: 'Grocery',
        category: 'Food',
        balance: '- $88',
        icon: faShoppingCart
    },
]