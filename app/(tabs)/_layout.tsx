import AnimatedBackground from '@/components/AnimatedBackground';
import BottomTabBar from '@/components/BottomTabBar';
import ContactScreen from '@/Screens/Contact';
import ExperienceScreen from '@/Screens/Experience';
import HomeScreen from '@/Screens/Home';
import ProjectsScreen from '@/Screens/Projects';
import SkillsScreen from '@/Screens/Skills';
import { TabKey } from '@/types';
import { useTheme } from '@react-navigation/native';
import React, { useMemo, useRef, useState } from 'react';
import { Animated, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const theme = useTheme();
  const [tab, setTab] = useState<TabKey>('Home');
  const fade = useRef(new Animated.Value(1)).current;

  const onChangeTab = (t: TabKey) => {
    if (t === tab) return;
    Animated.timing(fade, { toValue: 0, duration: 220, useNativeDriver: true }).start(() => {
      setTab(t);
      Animated.timing(fade, { toValue: 1, duration: 260, useNativeDriver: true }).start();
    });
  };

  const Screen = useMemo(() => {
    switch (tab) {
      case 'Home':
        return <HomeScreen />;
      case 'Projects':
        return <ProjectsScreen />;
      case 'Experience':
        return <ExperienceScreen />;
      case 'Skills':
        return <SkillsScreen />;
      case 'Contact':
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  }, [tab]);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.colors.background }]}>
      <AnimatedBackground />
      <Animated.View style={{ flex: 1, opacity: fade }}>
        {Screen}
      </Animated.View>

      <BottomTabBar currentTab={tab} onChange={onChangeTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ safe: { flex: 1 } });