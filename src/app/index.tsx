import { Redirect } from 'expo-router';
// diri ibutang ang middleware para if naa authentication kay mo redirect kung asaa
export default function Index() {
  return <Redirect href="/(auth)/login" />;
}
