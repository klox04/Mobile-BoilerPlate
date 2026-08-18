import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { FormTextInput } from '@/components/ui/form-text-input';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1 justify-center p-6">
        <View className="w-full max-w-[440px] self-center gap-8">
          <View className="gap-2">
            <ThemedText type="title">Welcome back</ThemedText>
            <ThemedText themeColor="textSecondary">
              Sign in to continue to your account.
            </ThemedText>
          </View>

          <View className="gap-6">
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
              autoComplete="password"
              label="Password"
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
            />

            <Pressable
              accessibilityRole="button"
              className="h-[52px] items-center justify-center rounded-[14px] bg-blue-600 active:opacity-80"
              onPress={() => router.replace('/(tabs)')}
            >
              <ThemedText className="font-bold text-white">Log in</ThemedText>
            </Pressable>
          </View>

          <View className="flex-row justify-center gap-2">
            <ThemedText themeColor="textSecondary">Don&apos;t have an account?</ThemedText>
            <Link href="/(auth)/sign-up" asChild>
              <Pressable>
                <ThemedText type="linkPrimary">Sign up</ThemedText>
              </Pressable>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}
