import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SkillPill({ name, level, category }: { name: string; level: number; category?: string }) {
    const theme = useTheme();
    const widthAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(widthAnim, { toValue: level, duration: 900, useNativeDriver: false }).start();
    }, [level, widthAnim]);

    const barWidth = widthAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] });

    return (
        <View style={[styles.container, { borderColor: theme.colors.border, backgroundColor: theme.colors.card }]}>
            <View style={styles.left}>
                <Text style={[styles.name, { color: theme.colors.text }]}>{name}</Text>
                {category ? <Text style={[styles.category, { color: theme.colors.subtext }]}>{category}</Text> : null}
            </View>
            <View style={styles.right}>
                <View style={[styles.barTrack, { backgroundColor: 'rgba(255,255,255,0.04)' }]}>
                    <Animated.View style={[styles.barFill, { width: barWidth, backgroundColor: theme.colors.primary }]} />
                </View>
                <Text style={[styles.levelText, { color: theme.colors.subtext }]}>{level}%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 10,
    },
    left: { flex: 1 },
    right: { width: 110, alignItems: 'flex-end' },
    name: { fontWeight: '700' },
    category: { fontSize: 12, marginTop: 2 },
    barTrack: { height: 8, borderRadius: 8, overflow: 'hidden', width: '100%', marginBottom: 6 },
    barFill: { height: 8, borderRadius: 8 },
    levelText: { fontSize: 12 },
});