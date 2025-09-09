import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { TimelineItem as TItem } from '../types';

export default function TimelineRow({ item }: { item: TItem }) {
    const theme = useTheme();
    return (
        <View style={styles.row}>
            <View style={styles.left}>
                <View style={[styles.dot, { backgroundColor: theme.colors.primary }]} />
                <View style={styles.line} />
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.colors.text }]}>{item.title}</Text>
                {item.subtitle ? <Text style={[styles.subtitle, { color: theme.colors.subtext }]}>{item.subtitle}</Text> : null}
                <Text style={[styles.dates, { color: theme.colors.subtext }]}>
                    {item.startDate || ''}{item.endDate ? ` — ${item.endDate}` : ''}
                </Text>
                {item.description ? <Text style={[styles.description, { color: theme.colors.subtext }]}>{item.description}</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: 'row', marginBottom: 14 },
    left: { width: 36, alignItems: 'center' },
    dot: { width: 12, height: 12, borderRadius: 6, marginTop: 6 },
    line: { width: 2, flex: 1, backgroundColor: 'rgba(255,255,255,0.03)', marginTop: 6, borderRadius: 1 },
    content: { flex: 1, paddingLeft: 8 },
    title: { fontSize: 15, fontWeight: '700' },
    subtitle: { fontSize: 13, marginTop: 4 },
    dates: { fontSize: 12, marginTop: 4 },
    description: { fontSize: 13, marginTop: 8, lineHeight: 18 },
});