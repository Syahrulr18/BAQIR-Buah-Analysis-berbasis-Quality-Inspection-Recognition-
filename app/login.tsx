import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Leaf, Eye, EyeOff, User, Lock } from 'lucide-react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#F1F8E9' }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          padding: 28,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo Area */}
        <View style={{ alignItems: 'center', marginBottom: 48 }}>
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 28,
              backgroundColor: '#2E7D32',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              shadowColor: '#2E7D32',
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.35,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <Leaf color="#FFFFFF" size={44} />
          </View>
          <Text style={{ fontSize: 28, fontWeight: '800', color: '#1B5E20', letterSpacing: 2 }}>
            BAQIR
          </Text>
          <Text style={{ fontSize: 12, color: '#66BB6A', marginTop: 4, fontWeight: '500' }}>
            Buah Analysis Quality Inspection
          </Text>
        </View>

        {/* Form Card */}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 24,
            padding: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 12,
            elevation: 4,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#1a1a1a', marginBottom: 8 }}>
            Masuk
          </Text>
          <Text style={{ fontSize: 14, color: '#9E9E9E', marginBottom: 28 }}>
            Silakan masuk untuk melanjutkan
          </Text>

          {/* Username Input */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: 14,
              paddingHorizontal: 14,
              marginBottom: 14,
              height: 52,
            }}
          >
            <User color="#9E9E9E" size={20} />
            <TextInput
              placeholder="Nama Pengguna"
              placeholderTextColor="#BDBDBD"
              value={username}
              onChangeText={setUsername}
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 15,
                color: '#1a1a1a',
              }}
            />
          </View>

          {/* Password Input */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: 14,
              paddingHorizontal: 14,
              marginBottom: 10,
              height: 52,
            }}
          >
            <Lock color="#9E9E9E" size={20} />
            <TextInput
              placeholder="Kata Sandi"
              placeholderTextColor="#BDBDBD"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={{
                flex: 1,
                marginLeft: 12,
                fontSize: 15,
                color: '#1a1a1a',
              }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff color="#9E9E9E" size={20} />
              ) : (
                <Eye color="#9E9E9E" size={20} />
              )}
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 24 }}>
            <Text style={{ fontSize: 13, color: '#2E7D32', fontWeight: '600' }}>
              Lupa Kata Sandi?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity onPress={handleLogin} activeOpacity={0.85}>
            <LinearGradient
              colors={['#66BB6A', '#2E7D32']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 16,
                paddingVertical: 16,
                alignItems: 'center',
                shadowColor: '#2E7D32',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 6,
              }}
            >
              <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 17 }}>
                Masuk
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 28 }}>
          <Text style={{ fontSize: 14, color: '#9E9E9E' }}>Belum punya akun? </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 14, color: '#2E7D32', fontWeight: '700' }}>
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
