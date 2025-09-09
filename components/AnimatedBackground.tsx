import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { generateA0ImageUrl } from '../lib/image';

const { width, height } = Dimensions.get('window');

export default function AnimatedBackground() {
    const theme = useTheme();
    const anim1 = useRef(new Animated.Value(0)).current;
    const anim2 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(anim1, {
                toValue: 1,
                duration: 30000,
                useNativeDriver: true,
            })
        ).start();

        Animated.loop(
            Animated.timing(anim2, {
                toValue: 1,
                duration: 22000,
                useNativeDriver: true,
            })
        ).start();
    }, [anim1, anim2]);

    const translateX1 = anim1.interpolate({
        inputRange: [0, 1],
        outputRange: [-width * 0.12, width * 0.12],
    });
    const rotate1 = anim1.interpolate({ inputRange: [0, 1], outputRange: ['-6deg', '6deg'] });

    const translateX2 = anim2.interpolate({
        inputRange: [0, 1],
        outputRange: [width * 0.08, -width * 0.08],
    });
    const rotate2 = anim2.interpolate({ inputRange: [0, 1], outputRange: ['6deg', '-6deg'] });

    const bg1 = generateA0ImageUrl('vibrant abstract gradient, soft waves, neon colors', '16:9', 'bg-1');
    const bg2 = generateA0ImageUrl('cool neon gradient with subtle texture', '16:9', 'bg-2');

    return (
        <View style={styles.container} pointerEvents="none">
            <Animated.Image
                source={{ uri: bg1 }}
                style={[
                    styles.layer,
                    {
                        opacity: 0.95,
                        transform: [{ translateX: translateX1 }, { rotate: rotate1 }, { scale: 1.15 }],
                    },
                ]}
                blurRadius={8}
                resizeMode="cover"
            />

            <Animated.Image
                source={{ uri: bg2 }}
                style={[
                    styles.layer,
                    {
                        opacity: 0.72,
                        transform: [{ translateX: translateX2 }, { rotate: rotate2 }, { scale: 1.28 }],
                    },
                ]}
                blurRadius={12}
                resizeMode="cover"
            />

            {/* subtle overlay to keep content readable */}
            <View style={[styles.overlay, { backgroundColor: 'rgba(8,12,20,0.48)' }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    layer: {
        position: 'absolute',
        width: width * 1.6,
        height: height * 1.6,
        top: -height * 0.3,
        left: -width * 0.3,
        borderRadius: 32,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
});