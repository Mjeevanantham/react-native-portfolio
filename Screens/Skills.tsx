import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import SkillPill from '../components/SkillPill';
import { useTheme } from '../hooks/useTheme';
import { skills } from '../lib/sampleData';

export default function SkillsScreen() {
    const theme = useTheme();
    const grouped = skills.reduce<Record<string, typeof skills>>((acc, s) => {
        const cat = s.category || 'Other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(s);
        return acc;
    }, {});

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={{ padding: theme.spacing(2) }}>
                <Header title="Skills" subtitle="Tools & expertise" />
                <View style={{ marginTop: 8 }}>
                    {Object.keys(grouped).map((cat) => (
                        <View key={cat} style={{ marginBottom: 18 }}>
                            <Text style={{ color: theme.colors.subtext, marginBottom: 8 }}>{cat}</Text>
                            {grouped[cat].map((s) => (
                                <SkillPill key={s.id} name={s.name} level={s.level} category={s.category} />
                            ))}
                        </View>
                    ))}
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ safe: { flex: 1 } });