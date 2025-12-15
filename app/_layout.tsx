import { Slot, useRouter } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Slot />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 70,
          width: '100%',
          backgroundColor: 'black',
          borderTopWidth: 0.3,
          borderTopColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => router.push('/') }>
          <Fontisto name="home" size={36} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/profile') }>
          <Ionicons name="person-circle" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
