import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function ProfileCard({
    avatar,
    name,
    title,
    location,
    bio,
}: {
    avatar: string;
    name: string;
    title: string;
    location?: string;
    bio?: string;
}) {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={[styles.name, { color: theme.colors.text }]}>{name}</Text>
                <Text style={[styles.title, { color: theme.colors.subtext }]}>{title}</Text>
                {location ? <Text style={[styles.location, { color: theme.colors.subtext }]}>{location}</Text> : null}
                {bio ? <Text style={[styles.bio, { color: theme.colors.subtext }]} numberOfLines={3}>{bio}</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 14,
        borderRadius: 16,
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 14,
    },
    avatar: {
        width: 84,
        height: 84,
        borderRadius: 18,
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 17,
        fontWeight: '700',
    },
    title: {
        fontSize: 13,
        marginTop: 4,
    },
    location: {
        fontSize: 12,
        marginTop: 4,
    },
    bio: {
        fontSize: 13,
        marginTop: 8,
        lineHeight: 18,
    },
});