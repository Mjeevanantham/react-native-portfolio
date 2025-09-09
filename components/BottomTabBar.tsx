import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { TabKey } from '../types';

const tabs: { key: TabKey; label: string }[] = [
    { key: 'Home', label: 'Home' },
    { key: 'Projects', label: 'Projects' },
    { key: 'Experience', label: 'Experience' },
    { key: 'Skills', label: 'Skills' },
    { key: 'Contact', label: 'Contact' },
];

export default function BottomTabBar({ currentTab, onChange }: { currentTab: TabKey; onChange: (t: TabKey) => void }) {
    const theme = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.card, borderTopColor: theme.colors.border }]}>
            {tabs.map((t) => {
                const active = t.key === currentTab;
                return (
                    <Pressable key={t.key} style={styles.tab} onPress={() => onChange(t.key)}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: active ? theme.colors.primary : theme.colors.subtext, fontWeight: active ? '800' : '600' }}>{t.label}</Text>
                            {active ? <View style={[styles.indicator, { backgroundColor: theme.colors.primary }]} /> : <View style={styles.indicatorPlaceholder} />}
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { position: 'absolute', left: 12, right: 12, bottom: 24, height: 64, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderWidth: 1, paddingHorizontal: 12 },
    tab: { flex: 1, alignItems: 'center' },
    indicator: { width: 36, height: 4, borderRadius: 4, marginTop: 8 },
    indicatorPlaceholder: { width: 36, height: 4, borderRadius: 4, marginTop: 8, opacity: 0 },
});