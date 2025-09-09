import React, { useRef } from 'react';
import { Animated, ImageBackground, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { generateA0ImageUrl } from '../lib/image';
import { PortfolioProject } from '../types';

export default function ProjectCard({ project }: { project: PortfolioProject }) {
    const theme = useTheme();
    const scale = useRef(new Animated.Value(1)).current;

    const onPressIn = () => {
        Animated.spring(scale, { toValue: 0.975, useNativeDriver: true }).start();
    };
    const onPressOut = () => {
        Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
    };

    const onPress = async () => {
        if (project.url) {
            try {
                await Linking.openURL(project.url);
            } catch (e) {
                // ignore
            }
        }
    };

    const imageUri = project.imagePrompt ? generateA0ImageUrl(project.imagePrompt, '16:9', project.id) : undefined;

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress} style={{ marginBottom: 12 }}>
            <Animated.View style={[styles.card, { transform: [{ scale }], backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
                <ImageBackground source={imageUri ? { uri: imageUri } : undefined} style={styles.image} imageStyle={{ borderRadius: 12 }}>
                    <View style={[styles.imageOverlay, { backgroundColor: 'rgba(0,0,0,0.28)' }]} />
                    <View style={styles.content}>
                        <Text style={[styles.title, { color: theme.colors.text }]} numberOfLines={2}>{project.title}</Text>
                        <Text style={[styles.description, { color: theme.colors.subtext }]} numberOfLines={2}>{project.description}</Text>
                        <View style={styles.tags}>
                            {project.tags.map((tag) => (
                                <View key={tag} style={[styles.tag, { borderColor: theme.colors.border }]}>
                                    <Text style={[styles.tagText, { color: theme.colors.subtext }]}>{tag}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </ImageBackground>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 14,
        borderWidth: 1,
        overflow: 'hidden',
    },
    image: {
        height: 160,
        justifyContent: 'flex-end',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 12,
    },
    content: {
        padding: 12,
        paddingTop: 10,
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
    },
    description: {
        fontSize: 13,
        marginTop: 6,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    tag: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 999,
        borderWidth: 1,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        fontSize: 12,
    },
});