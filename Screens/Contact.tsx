import React from 'react';
import { Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '../hooks/useTheme';
import { profile } from '../lib/sampleData';

export default function ContactScreen() {
    const theme = useTheme();
    return (
        <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
            <ScrollView contentContainerStyle={{ padding: theme.spacing(2) }}>
                <Header title="Contact" subtitle="Let's collaborate" />

                <View style={{ marginTop: 12 }}>
                    <Text style={{ color: theme.colors.text, fontWeight: '700', fontSize: 16 }}>{profile.name}</Text>
                    <Text style={{ color: theme.colors.subtext, marginTop: 6 }}>{profile.title}</Text>

                    <View style={{ marginTop: 14 }} />

                    <Pressable onPress={() => Linking.openURL(`mailto:${profile.email}`)} style={[styles.action, { backgroundColor: theme.colors.primary }]}>
                        <Text style={{ color: 'white', fontWeight: '700' }}>Email — {profile.email}</Text>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL(profile.website)} style={[styles.action, { borderColor: theme.colors.border }]}>
                        <Text style={{ color: theme.colors.text, fontWeight: '700' }}>Website — {profile.website}</Text>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL(profile.github)} style={[styles.action, { borderColor: theme.colors.border }]}>
                        <Text style={{ color: theme.colors.text, fontWeight: '700' }}>GitHub — {profile.github}</Text>
                    </Pressable>
                </View>

                <View style={{ height: 120 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ safe: { flex: 1 }, action: { padding: 14, borderRadius: 12, borderWidth: 1, marginTop: 12 } });