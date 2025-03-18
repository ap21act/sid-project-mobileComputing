import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#FAFAF9" },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="listView" options={{ headerShown: false }} />
      <Stack.Screen
        name="addItem"
        options={{
          headerShown: true,
          headerTitle: "Add New Destination",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
