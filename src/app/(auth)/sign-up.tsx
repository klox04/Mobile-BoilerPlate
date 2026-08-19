import { Link, router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FormTextInput } from "@/components/ui/form-text-input";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SafeAreaView className="flex-1">
          <ScrollView
            automaticallyAdjustKeyboardInsets={Platform.OS === "ios"}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              padding: 24,
            }}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
          >
            <View className="w-full max-w-[440px] self-center gap-8">
              <View className="gap-2">
                <Text className="text-5xl font-semibold leading-[52px] text-black dark:text-white">
                  Create account
                </Text>
                <Text className="text-base font-medium leading-6 text-zinc-500 dark:text-zinc-400">
                  Enter your details to get started.
                </Text>
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
                  onPress={() => router.replace("/(tabs)")}
                >
                  <Text className="font-bold text-white">Create account</Text>
                </Pressable>
              </View>

              <View className="flex-row justify-center gap-2">
                <Text className="text-zinc-500 dark:text-zinc-400">
                  Already have an account?
                </Text>
                <Link href="/(auth)/login" replace asChild>
                  <Pressable>
                    <Text className="text-blue-500">Log in</Text>
                  </Pressable>
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
}
