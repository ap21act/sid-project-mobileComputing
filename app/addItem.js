import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function AddItem() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    location: "",
    category: "",
    estimatedCost: "",
    notes: "",
  });

  const categories = [
    "Landmarks",
    "Activities",
    "Historical",
    "Nature",
    "Food",
    "Shopping",
  ];

  const handleSubmit = () => {
    alert(
      `Destination Added!\n\nPlace: ${form.name}\nLocation: ${form.location}\nCategory: ${form.category}`
    );
    router.back();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAFAF9", padding: 16 }}>
      {/* Place Name Input */}
      <View style={{ marginBottom: 16 }}>
        <Text style={{ marginBottom: 8, fontWeight: "500" }}>Place Name</Text>
        <TextInput
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
          style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E5E7EB",
          }}
          placeholder="Enter place name"
        />
      </View>

      {/* Location Input */}
      <View style={{ marginBottom: 16 }}>
        <Text style={{ marginBottom: 8, fontWeight: "500" }}>Location</Text>
        <TextInput
          value={form.location}
          onChangeText={(text) => setForm({ ...form, location: text })}
          style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E5E7EB",
          }}
          placeholder="City, Country"
        />
      </View>

      {/* Estimated Cost */}
      <View style={{ marginBottom: 16 }}>
        <Text style={{ marginBottom: 8, fontWeight: "500" }}>
          Estimated Cost
        </Text>
        <TextInput
          value={form.estimatedCost}
          onChangeText={(text) => setForm({ ...form, estimatedCost: text })}
          style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E5E7EB",
          }}
          placeholder="Enter estimated cost"
          keyboardType="numeric"
        />
      </View>

      {/* Category Selection */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ marginBottom: 8, fontWeight: "500" }}>Category</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: -4,
          }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setForm({ ...form, category })}
              style={{
                backgroundColor:
                  form.category === category ? "#059669" : "transparent",
                borderWidth: 1,
                borderColor: form.category === category ? "#059669" : "#E5E7EB",
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 16,
                margin: 4,
              }}
            >
              <Text
                style={{
                  color: form.category === category ? "white" : "#374151",
                }}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Notes */}
      <View style={{ marginBottom: 24 }}>
        <Text style={{ marginBottom: 8, fontWeight: "500" }}>Notes</Text>
        <TextInput
          value={form.notes}
          onChangeText={(text) => setForm({ ...form, notes: text })}
          style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            height: 100,
          }}
          placeholder="Add any notes about this place..."
          multiline
          textAlignVertical="top"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#059669",
          padding: 16,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>
          Add Destination
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
