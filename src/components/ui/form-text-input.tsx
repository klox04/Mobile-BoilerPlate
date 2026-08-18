import { TextInput, type TextInputProps, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';

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
      <ThemedText type="smallBold">{label}</ThemedText>

      <TextInput
        className={`h-[52px] rounded-[14px] border px-4 text-base text-black dark:text-white ${
          error ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-700'
        } ${className ?? ''}`}
        placeholderTextColor={placeholderTextColor ?? theme.textSecondary}
        {...inputProps}
      />

      {(error || helperText) && (
        <ThemedText className={error ? 'text-red-500' : undefined} type="small">
          {error ?? helperText}
        </ThemedText>
      )}
    </View>
  );
}
