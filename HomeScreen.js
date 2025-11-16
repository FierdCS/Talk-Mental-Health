import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
    return (
        <View style={[styles.container, { overflow: 'hidden', borderRadius: 30 }]}>
            <LinearGradient
                colors={['#1185b7ff', '#203a43', '#2c5364']} // dark blue shades
                style={StyleSheet.absoluteFill}
            />
            <LinearGradient
                colors={['#00c6ff', '#0072ff', 'transparent']}
                style={[styles.overlay, {
                    transform: [{ rotate: '60deg' }],
                    top: height * 0.25,
                    left: -width * 0.25, // reduced overflow
                    width: width * 1.3,
                    height: height * 0.7,
                    opacity: 0.6,
                }]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />
            <LinearGradient
                colors={['#0085ff', '#00aaff', 'transparent']}
                style={[styles.overlay, {
                    transform: [{ rotate: '-45deg' }],
                    top: height * 0.5,
                    left: -width * 0.05, // reduced overflow
                    width: width * 1.1,
                    height: height * 0.55,
                    opacity: 0.5,
                }]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to the Talk</Text>
                <Text style={styles.promptQuestion}>Speak your mind...</Text>
            </View>
            <View style={styles.content}>
                {/* Your Home screen UI components here */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f2027', // fallback background
    },
    overlay: {
        position: 'absolute',
        borderRadius: 200,
    },
    content: {
        flex: 1,
        // your content styles here
    },
    title: {
        color: '#011424ff',
        textAlign: 'center',
        marginTop: 300,
        fontSize: 30,
        fontWeight: 'bold',
        opacity: 1,                 // fully opaque
    },
    promptQuestion: {
        textAlign: 'center',
        
    }
});
