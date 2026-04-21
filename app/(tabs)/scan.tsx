import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import {
  Zap,
  ZapOff,
  Image as ImageIcon,
  History,
  ScanLine,
  Camera,
} from "lucide-react-native";

export default function ScanScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [flashOn, setFlashOn] = useState(false);
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  const borderColor = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(46, 125, 50, 0.3)", "rgba(76, 175, 80, 1)"],
  });

  const shadowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.6],
  });

  const handleCapture = () => {
    router.push("/hasil-analisis");
  };

  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets.length > 0) {
      // Gambar terpilih, navigasi ke hasil analisis
      router.push("/hasil-analisis");
    }
  };

  // Permission belum diminta
  if (!permission) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#1a1a1a",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Memuat kamera...</Text>
      </View>
    );
  }

  // Permission ditolak
  if (!permission.granted) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#1a1a1a",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 24,
            backgroundColor: "rgba(76, 175, 80, 0.15)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Camera color="#4CAF50" size={40} />
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: "700",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Izin Kamera Diperlukan
        </Text>
        <Text
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 14,
            textAlign: "center",
            lineHeight: 20,
            marginBottom: 28,
          }}
        >
          BAQIR memerlukan akses kamera untuk memindai dan menganalisis kualitas
          buah Anda.
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          activeOpacity={0.85}
          style={{
            backgroundColor: "#2E7D32",
            paddingHorizontal: 32,
            paddingVertical: 14,
            borderRadius: 14,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "700" }}>
            Izinkan Kamera
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Camera View */}
      <CameraView style={{ flex: 1 }} facing="back" enableTorch={flashOn}>
        {/* Dark overlay di atas & bawah untuk kontras */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
          }}
        />

        {/* Top Bar */}
        <SafeAreaView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: Platform.OS === "android" ? 40 : 8,
              paddingBottom: 12,
            }}
          >
            {/* Riwayat Button (top-left) */}
            <TouchableOpacity
              onPress={() => router.push("/riwayat")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.2)",
                paddingHorizontal: 14,
                paddingVertical: 9,
                borderRadius: 14,
              }}
            >
              <History color="#FFFFFF" size={16} />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 13,
                  fontWeight: "600",
                  marginLeft: 6,
                }}
              >
                Riwayat
              </Text>
            </TouchableOpacity>

            {/* Title */}
            <Text style={{ fontSize: 17, fontWeight: "700", color: "#FFFFFF" }}>
              Pemindai Buah
            </Text>

            {/* Spacer to balance layout */}
            <View style={{ width: 90 }} />
          </View>
        </SafeAreaView>

        {/* Scan Overlay (centered) */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 100,
          }}
        >
          <Animated.View
            style={{
              width: 260,
              height: 260,
              borderRadius: 24,
              borderWidth: 3,
              borderColor: borderColor,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#4CAF50",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: shadowOpacity,
              shadowRadius: 20,
            }}
          >
            {/* Corner marks */}
            <View
              style={{
                position: "absolute",
                top: -2,
                left: -2,
                width: 40,
                height: 40,
                borderTopWidth: 4,
                borderLeftWidth: 4,
                borderColor: "#4CAF50",
                borderTopLeftRadius: 24,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: -2,
                right: -2,
                width: 40,
                height: 40,
                borderTopWidth: 4,
                borderRightWidth: 4,
                borderColor: "#4CAF50",
                borderTopRightRadius: 24,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: -2,
                left: -2,
                width: 40,
                height: 40,
                borderBottomWidth: 4,
                borderLeftWidth: 4,
                borderColor: "#4CAF50",
                borderBottomLeftRadius: 24,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: -2,
                right: -2,
                width: 40,
                height: 40,
                borderBottomWidth: 4,
                borderRightWidth: 4,
                borderColor: "#4CAF50",
                borderBottomRightRadius: 24,
              }}
            />

            <ScanLine color="rgba(76, 175, 80, 0.5)" size={80} />
          </Animated.View>
          <Text
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 14,
              marginTop: 20,
              fontWeight: "500",
            }}
          >
            Arahkan kamera ke buah
          </Text>
        </View>

        {/* Bottom Controls — positioned above floating tab bar */}
        <View
          style={{
            position: "absolute",
            bottom: 110,
            left: 0,
            right: 0,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: "80%",
            }}
          >
            {/* Flash Toggle */}
            <TouchableOpacity
              onPress={() => setFlashOn(!flashOn)}
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                backgroundColor: flashOn
                  ? "rgba(255,193,7,0.3)"
                  : "rgba(255,255,255,0.15)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {flashOn ? (
                <Zap color="#FFC107" size={24} />
              ) : (
                <ZapOff color="#FFFFFF" size={24} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                height: 80,
                backgroundColor: "transparent", 
                borderWidth: 5, 
                borderColor: "#2E7D32", 
                borderRadius: 100, 
              }}
              className="mb-20"
            >
              <View
               style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                backgroundColor: '#2E7D32',
                borderBlockColor: '#2E7D32',
                alignItems: 'center',
                justifyContent: 'center',
               }}

              ></View>
            </TouchableOpacity>

            {/* Gallery */}
            <TouchableOpacity
              onPress={pickImageFromGallery}
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                backgroundColor: "rgba(255,255,255,0.15)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageIcon color="#FFFFFF" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}
