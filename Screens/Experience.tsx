import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import TimelineRow from '../components/TimelineItem';
import { useTheme } from '../hooks/useTheme';
import { timeline } from '../lib/sampleData';

export default function ExperienceScreen() {
    const theme = useTheme();
    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={{ padding: theme.spacing(2) }}>
                <Header title="Experience" subtitle="Work & education" />
                <View style={{ marginTop: 8 }}>
                    {timeline.map((t) => (
                        <TimelineRow key={t.id} item={t} />
                    ))}
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ safe: { flex: 1 } });