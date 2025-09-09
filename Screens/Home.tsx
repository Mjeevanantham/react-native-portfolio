import React, { useMemo } from 'react';
import { FlatList, Linking, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import ProjectCard from '../components/ProjectCard';
import { useTheme } from '../hooks/useTheme';
import { profile, projects, skills, timeline } from '../lib/sampleData';

export default function HomeScreen() {
    const theme = useTheme();

    const featured = useMemo(() => projects.slice(0, 3), []);

    const experienceYears = useMemo(() => {
        try {
            const workDates = timeline
                .filter((t) => t.type === 'work' && !!t.startDate)
                .map((t) => parseInt((t.startDate || '').slice(0, 4), 10))
                .filter(Boolean);
            if (!workDates.length) return '—';
            const earliest = Math.min(...workDates);
            const now = new Date().getFullYear();
            return `${now - earliest}+ yrs`;
        } catch (e) {
            return '—';
        }
    }, []);

    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={{ padding: theme.spacing(2) }}>
                <View style={styles.heroWrap}>
                    <Text style={[styles.greeting, { color: theme.colors.subtext }]}>Hi, Im</Text>
                    <Text style={[styles.name, { color: theme.colors.text }]}>{profile.name}</Text>
                    <Text style={[styles.role, { color: theme.colors.subtext }]}>{profile.title}</Text>
                </View>

                <ProfileCard avatar={profile.avatar} name={profile.name} title={profile.title} location={profile.location} bio={profile.bio} />

                <Header title="Featured Projects" subtitle="Selected work & highlights" />

                <FlatList data={featured} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(i) => i.id} renderItem={({ item }) => (
                    <View style={{ width: 300, marginRight: 12 }}>
                        <ProjectCard project={item} />
                    </View>
                )} />

                <Header title="Quick Stats" subtitle="Fast facts" />
                <View style={styles.statsRow}>
                    <View style={[styles.statCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
                        <Text style={[styles.statValue, { color: theme.colors.text }]}>{projects.length}</Text>
                        <Text style={[styles.statLabel, { color: theme.colors.subtext }]}>Projects</Text>
                    </View>

                    <View style={[styles.statCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
                        <Text style={[styles.statValue, { color: theme.colors.text }]}>{experienceYears}</Text>
                        <Text style={[styles.statLabel, { color: theme.colors.subtext }]}>Experience</Text>
                    </View>

                    <View style={[styles.statCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
                        <Text style={[styles.statValue, { color: theme.colors.text }]}>{skills.length}</Text>
                        <Text style={[styles.statLabel, { color: theme.colors.subtext }]}>Skills</Text>
                    </View>
                </View>

                <Header title="Get in touch" subtitle="Let's build something great" />
                <Pressable style={[styles.contactButton, { backgroundColor: theme.colors.primary }]} onPress={() => Linking.openURL(`mailto:${profile.email}`)}>
                    <Text style={styles.contactButtonText}>Email me — {profile.email}</Text>
                </Pressable>

                <View style={{ height: 80 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1 },
    heroWrap: { marginBottom: 12 },
    greeting: { fontSize: 13, marginBottom: 6 },
    name: { fontSize: 28, fontWeight: '800' },
    role: { fontSize: 15, marginTop: 6 },
    statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
    statCard: { flex: 1, padding: 12, marginRight: 8, borderRadius: 12, borderWidth: 1, alignItems: 'center' },
    statValue: { fontSize: 18, fontWeight: '800' },
    statLabel: { fontSize: 12, marginTop: 6 },
    contactButton: { padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 10 },
    contactButtonText: { color: 'white', fontWeight: '700' },
});