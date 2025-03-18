// app/_layout.js
// [Previous layout code remains the same, just change screen titles]

// app/index.js - Welcome/Splash Screen
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#059669" }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ marginBottom: 40 }}>
          <Text style={{ fontSize: 48 }}>🗺️</Text>
        </View>
        <Text style={{ fontSize: 32, color: "white", fontWeight: "bold" }}>
          TravelSpot
        </Text>
        <Text
          style={{ fontSize: 16, color: "white", opacity: 0.8, marginTop: 8 }}
        >
          Discover & Plan Your Adventures
        </Text>

        {/* Feature Highlights */}
        <View style={{ marginTop: 40, alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 20, marginRight: 8 }}>📍</Text>
            <Text style={{ color: "white", opacity: 0.9 }}>
              Track places to visit
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 20, marginRight: 8 }}>📝</Text>
            <Text style={{ color: "white", opacity: 0.9 }}>
              Create travel plans
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 20, marginRight: 8 }}>⭐</Text>
            <Text style={{ color: "white", opacity: 0.9 }}>Save favorites</Text>
          </View>
        </View>
      </View>

      <View style={{ padding: 24 }}>
        <TouchableOpacity
          onPress={() => router.replace("/listView")}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#059669", fontSize: 16, fontWeight: "600" }}>
            Start Exploring
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
