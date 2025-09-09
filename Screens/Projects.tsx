import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../lib/sampleData';

export default function ProjectsScreen() {
    const theme = useTheme();
    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={{ padding: theme.spacing(2) }}>
                <Header title="Projects" subtitle="All work" />
                <View style={{ marginTop: 8 }}>
                    {projects.map((p) => (
                        <View key={p.id} style={{ marginBottom: 12 }}>
                            <ProjectCard project={p} />
                        </View>
                    ))}
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ safe: { flex: 1 } });