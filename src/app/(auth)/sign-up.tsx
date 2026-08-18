import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { FormTextInput } from '@/components/ui/form-text-input';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1"
          contentContainerClassName="flex-grow justify-center p-6"
          keyboardShouldPersistTaps="handled">
          <View className="w-full max-w-[440px] self-center gap-8">
            <View className="gap-2">
              <ThemedText type="title">Create account</ThemedText>
              <ThemedText themeColor="textSecondary">Enter your details to get started.</ThemedText>
            </View>

            <View className="gap-6">
              <FormTextInput
                autoComplete="name"
                label="Full name"
                onChangeText={setName}
                placeholder="Juan Dela Cruz"
                value={name}
              />
              <FormTextInput
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                label="Email"
                onChangeText={setEmail}
                placeholder="you@example.com"
                value={email}
              />
              <FormTextInput
                autoCapitalize="none"
                autoComplete="new-password"
                label="Password"
                onChangeText={setPassword}
                placeholder="Create a password"
                secureTextEntry
                value={password}
              />

              <Pressable
                accessibilityRole="button"
                className="h-[52px] items-center justify-center rounded-[14px] bg-blue-600 active:opacity-80"
                onPress={() => router.replace('/(tabs)')}
              >
                <ThemedText className="font-bold text-white">Create account</ThemedText>
              </Pressable>
            </View>

            <View className="flex-row justify-center gap-2">
              <ThemedText themeColor="textSecondary">Already have an account?</ThemedText>
              <Link href="/(auth)/login" replace asChild>
                <Pressable>
                  <ThemedText type="linkPrimary">Log in</ThemedText>
                </Pressable>
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
