import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Pressable,
  Text,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";

import { supabase } from "../lib/supabase";
import Toast from "react-native-root-toast";

export default function Settings({
  route: {
    params: { session },
  },
}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (session) {
      getProfile();
    }
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) {
        throw new Error("No user on the session!");
      }

      const { data, error, status } = await supabase
        .from("users")
        .select(`full_name`)
        .eq("id", session?.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.full_name);
        setEmail(session.user.email);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    try {
      setLoading(true);
      if (!session?.user) {
        throw new Error("No user on the session!");
      }

      const updates = {
        id: session?.user.id,
        ...(username && { full_name: username }),
        ...(email && { email }),
        ...(password && { password }),
        updated_at: new Date(),
      };

      const { error, data } = await supabase.from("users").upsert(updates);

      if (error) {
        throw error;
      } else {
        Toast.show("Successfully updated", {
          duration: Toast.durations.LONG,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  // return (
  //   <View>
  //     <View style={[styles.verticallySpaced, styles.mt20]}>
  //       <Input label="Email" value={session?.user?.email} disabled />
  //     </View>
  //     <View style={styles.verticallySpaced}>
  //       <Input
  //         label="Username"
  //         value={username || ""}
  //         onChangeText={(text) => setUsername(text)}
  //       />
  //     </View>
  //     <View style={styles.verticallySpaced}>
  //       <Input
  //         label="Website"
  //         value={website || ""}
  //         onChangeText={(text) => setWebsite(text)}
  //       />
  //     </View>
  //
  //     <View style={[styles.verticallySpaced, styles.mt20]}>
  //       <Button
  //         title={loading ? "Loading ..." : "Update"}
  //         onPress={() =>
  //           updateProfile({ username, website, avatar_url: avatarUrl })
  //         }
  //         disabled={loading}
  //       />
  //     </View>
  //
  //     <View style={styles.verticallySpaced}>
  //       <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
  //     </View>
  //   </View>
  // );

  return (
    <SafeAreaView>
      <View className="w-full h-full">
        <View className="mt-12 flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-md w-full">
          <Text className="font-bold text-[36px] w-52 text-center">
            Profile Settings
          </Text>
          <View className="mt-9">
            <TextInput
              label="Username"
              style={{ color: "black" }}
              onChangeText={(text) => setUsername(text)}
              value={username}
              className="block w-64 appearance-none rounded-xl border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              autoCapitalize={"none"}
              autoComplete={"username"}
            />
          </View>
          <View className="mt-4">
            {/*<Image source={require("../assets/envelope.png")} style={{ width: 20, height: 20 }}/>*/}
            <TextInput
              label="Email"
              onChangeText={(text) => setEmail(text)}
              className="block w-64 appearance-none rounded-xl border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              style={{ color: "black" }}
              value={email}
              placeholder="Email"
              autoCapitalize={"none"}
              autoComplete={"email"}
            />
          </View>
          <View className="mt-4">
            {/*<Image source={require("../assets/envelope.png")} style={{ width: 20, height: 20 }}/>*/}
            <TextInput
              label="Password"
              onChangeText={(text) => setPassword(text)}
              style={{ color: "black" }}
              className="block w-64 appearance-none rounded-xl border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={"none"}
            />
          </View>
          <View className="mt-8">
            <Pressable
              className="flex flex-row items-center justify-center py-3 px-5 w-64 rounded-xl bg-[#1EAB53] border-transparent"
              disabled={loading}
              onPress={() => updateProfile()}
            >
              <Text></Text>
              <Text className="text-sm font-bold text-center text-white uppercase basis-11/12">
                Update
              </Text>
            </Pressable>
          </View>
          <View className="mt-5">
            <Pressable
              className="flex flex-row items-center justify-center py-3 px-5 w-64 rounded-xl border border-[#1EAB53]"
              disabled={loading}
              onPress={() => supabase.auth.signOut()}
            >
              <Text></Text>
              <Text className="text-sm text-center uppercase basis-11/12">
                Sign Out
              </Text>
            </Pressable>
          </View>
          <View className="px-16 w-full flex flex-row justify-between items-center mt-8">
            <Text className="text-[16px]">Help and Feedback</Text>
            <Image
              source={require("../assets/comment.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
          <View className="px-16 mt-5 w-full flex flex-row justify-between items-center">
            <View>
              <Text className="text-[16px]">About</Text>
            </View>
            <View>
              <Image
                source={require("../assets/info.png")}
                style={{ height: 20, width: 20 }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
