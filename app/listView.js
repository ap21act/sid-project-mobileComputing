import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";

const destinations = [
  {
    id: 1,
    name: "Eiffel Tower",
    location: "Paris, France",
    category: "Landmarks",
    status: "Want to Visit",
    rating: 4.8,
    estimatedCost: "€20",
  },
  {
    id: 2,
    name: "Santorini Sunset Tour",
    location: "Santorini, Greece",
    category: "Activities",
    status: "Planned",
    rating: 4.9,
    estimatedCost: "€45",
  },
  {
    id: 3,
    name: "Colosseum",
    location: "Rome, Italy",
    category: "Historical",
    status: "Visited",
    rating: 4.7,
    estimatedCost: "€16",
  },
];

export default function ListView() {
  const router = useRouter();

  const statusColors = {
    "Want to Visit": "#EAB308",
    Planned: "#059669",
    Visited: "#3B82F6",
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAF9" }}>
      {/* Header */}
      <View style={{ backgroundColor: "white", padding: 16, paddingTop: 60 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Destinations</Text>

        {/* Search Bar */}
        <View
          style={{
            backgroundColor: "#F3F4F6",
            borderRadius: 12,
            padding: 12,
            marginTop: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>🔍</Text>
          <TextInput
            placeholder="Search places..."
            style={{ marginLeft: 8, flex: 1 }}
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 16 }}
        >
          {[
            "All",
            "Landmarks",
            "Activities",
            "Historical",
            "Nature",
            "Food",
          ].map((category) => (
            <TouchableOpacity
              key={category}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: category === "All" ? "#059669" : "#F3F4F6",
                borderRadius: 20,
                marginRight: 8,
              }}
            >
              <Text
                style={{
                  color: category === "All" ? "white" : "#374151",
                  fontWeight: "500",
                }}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Destinations List */}
      <ScrollView style={{ flex: 1, padding: 16 }}>
        {destinations.map((destination) => (
          <TouchableOpacity
            key={destination.id}
            style={{
              backgroundColor: "white",
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
            }}
            onPress={() => alert(`Selected: ${destination.name}`)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {destination.name}
              </Text>
              <View
                style={{
                  backgroundColor: `${statusColors[destination.status]}20`,
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    color: statusColors[destination.status],
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  {destination.status}
                </Text>
              </View>
            </View>
            <Text style={{ color: "#6B7280", marginTop: 4 }}>
              📍 {destination.location}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text style={{ color: "#6B7280" }}>⭐ {destination.rating}</Text>
              <Text style={{ color: "#6B7280", marginLeft: 16 }}>
                💰 {destination.estimatedCost}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Add Button */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 24,
          right: 24,
          backgroundColor: "#059669",
          width: 56,
          height: 56,
          borderRadius: 28,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => router.push("/addItem")}
      >
        <Text style={{ color: "white", fontSize: 24 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
