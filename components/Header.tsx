import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function Header({ title, subtitle }: { title: string; subtitle?: string }) {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <View style={[styles.accent, { backgroundColor: theme.colors.primary }]} />
            <View style={styles.textWrap}>
                <Text style={[styles.title, { color: theme.colors.text }]} numberOfLines={1}>
                    {title}
                </Text>
                {subtitle ? (
                    <Text style={[styles.subtitle, { color: theme.colors.subtext }]} numberOfLines={1}>
                        {subtitle}
                    </Text>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginBottom: 6,
    },
    accent: {
        width: 6,
        height: 44,
        borderRadius: 6,
        marginRight: 12,
    },
    textWrap: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 13,
        marginTop: 2,
    },
});