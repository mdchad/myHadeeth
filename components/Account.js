// import { useNavigation } from "@react-navigation/native";
// import { useState, useEffect, useLayoutEffect } from "react";
// import { StyleSheet, View, Alert } from "react-native";
// import { Button, Input } from "react-native-elements";
//
// import { supabase } from "../lib/supabase";
//
// export default function Account({ session }) {
//   const navigation = useNavigation();
//
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//   }, []);
//
//   const [loading, setLoading] = useState(false);
//   const [username, setUsername] = useState("");
//   const [website, setWebsite] = useState("");
//   const [avatarUrl, setAvatarUrl] = useState("");
//
//   useEffect(() => {
//     if (session) getProfile();
//   }, [session]);
//
//   async function getProfile() {
//     try {
//       setLoading(true);
//       if (!session?.user) throw new Error("No user on the session!");
//
//       const { data, error, status } = await supabase
//         .from("profiles")
//         .select(`username, website, avatar_url`)
//         .eq("id", session?.user.id)
//         .single();
//       if (error && status !== 406) {
//         throw error;
//       }
//
//       if (data) {
//         setUsername(data.username);
//         setWebsite(data.website);
//         setAvatarUrl(data.avatar_url);
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   }
//
//   async function updateProfile({ username, website, avatar_url }) {
//     try {
//       setLoading(true);
//       if (!session?.user) throw new Error("No user on the session!");
//
//       const updates = {
//         id: session?.user.id,
//         username,
//         website,
//         avatar_url,
//         updated_at: new Date(),
//       };
//
//       const { error } = await supabase.from("profiles").upsert(updates);
//
//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   }
//
//   return (
//     <View className="flex-1 justify-center px-4">
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Input label="Email" value={session?.user?.email} disabled />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <Input
//           label="Username"
//           value={username || ""}
//           onChangeText={(text) => setUsername(text)}
//         />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <Input
//           label="Website"
//           value={website || ""}
//           onChangeText={(text) => setWebsite(text)}
//         />
//       </View>
//
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Button
//           title={loading ? "Loading ..." : "Update"}
//           onPress={() =>
//             updateProfile({ username, website, avatar_url: avatarUrl })
//           }
//           disabled={loading}
//         />
//       </View>
//
//       <View style={styles.verticallySpaced}>
//         <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
//       </View>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 40,
//     padding: 12,
//   },
//   verticallySpaced: {
//     paddingTop: 4,
//     paddingBottom: 4,
//     alignSelf: "stretch",
//   },
//   mt20: {
//     marginTop: 20,
//   },
// });
