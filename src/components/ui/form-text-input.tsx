import { Text, TextInput, type TextInputProps, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";

type FormTextInputProps = TextInputProps & {
  error?: string;
  helperText?: string;
  label: string;
};

export function FormTextInput({
  className,
  error,
  helperText,
  label,
  placeholderTextColor,
  ...inputProps
}: FormTextInputProps) {
  const theme = useTheme();

  return (
    <View className="gap-2">
      <Text className="text-sm font-bold leading-5 text-black dark:text-white">
        {label}
      </Text>

      <TextInput
        className={`h-[52px] rounded-[14px] border px-4 text-base text-black dark:text-white ${
          error ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"
        } ${className ?? ""}`}
        placeholderTextColor={placeholderTextColor ?? theme.textSecondary}
        {...inputProps}
      />

      {(error || helperText) && (
        <Text
          className={`text-sm font-medium leading-5 ${
            error ? "text-red-500" : "text-zinc-500 dark:text-zinc-400"
          }`}
        >
          {error ?? helperText}
        </Text>
      )}
    </View>
  );
}
