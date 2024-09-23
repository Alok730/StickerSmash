// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { TextInput, Button, HelperText } from "react-native-paper";
// import { Controller, SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// const formSchema = z.object({
//   //   name: z.string().min(1, { message: "Required" }),
//   //   age: z.number().min(10),
//   firstName: z.string().min(1, { message: "firstName is Required" }),
//   //   lastName:z.string().min(1,{message:"firstName is Required"}),
//   //   email: z.string().email("Invalid email address"),
// });

// type FormData = z.infer<typeof formSchema>;

// const SIgnup = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<FormData>({
//     defaultValues: {
//       firstName: "",
//     //   lastName: "",
//     //   email: "",
//     //   age: 18,
//     },
//     resolver: zodResolver(formSchema),
//   });

//   const handleLogin: SubmitHandler<FormData> = async (data): Promise<void> => {
//     console.log(data);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <Controller
//         control={control}
//         name="firstName"
//         render={({ field }) => (
//           <View style={styles.input}>
//             <TextInput
//               placeholder="First Name"
//               style={styles.input}
//               onChangeText={field.onChange}
//               value={field.value}
//             />
//             {errors.firstName && (
//               <Text style={{}}>{errors.firstName.message}</Text>
//             )}
//           </View>
//         )}
//       />

//       <Button
//         mode="contained"
//         onPress={handleSubmit(handleLogin)}
//         style={styles.button}
//         contentStyle={styles.buttonContent}
//       >
//         Login
//       </Button>
//     </View>
//   );
// };

// export default SIgnup;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   input: {
//     marginBottom: 15,
//   },
//   button: {
//     marginTop: 10,
//   },
//   buttonContent: {
//     height: 50,
//   },
// });

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, Button, HelperText } from "react-native-paper";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email("Invalid email address"),
  age: z.number().min(10, { message: "You must be at least 10 years old" }),
});

type FormData = z.infer<typeof formSchema>;

const Signup = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 18,
    },
    resolver: zodResolver(formSchema),
  });

  // Submit handler
  const handleLogin: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      {/* First Name Input */}
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <View style={styles.input}>
            <TextInput
              label="First Name"
              mode="outlined"
              onChangeText={field.onChange}
              value={field.value}
              error={!!errors.firstName}
            />
            <HelperText type="error" visible={!!errors.firstName}>
              {errors.firstName?.message}
            </HelperText>
          </View>
        )}
      />

      {/* Last Name Input */}
      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <View style={styles.input}>
            <TextInput
              label="Last Name"
              mode="outlined"
              onChangeText={field.onChange}
              value={field.value}
              error={!!errors.lastName}
            />
            <HelperText type="error" visible={!!errors.lastName}>
              {errors.lastName?.message}
            </HelperText>
          </View>
        )}
      />

      {/* Email Input */}
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <View style={styles.input}>
            <TextInput
              label="Email"
              mode="outlined"
              keyboardType="email-address"
              onChangeText={field.onChange}
              value={field.value}
              error={!!errors.email}
            />
            <HelperText type="error" visible={!!errors.email}>
              {errors.email?.message}
            </HelperText>
          </View>
        )}
      />

      {/* Age Input */}
      <Controller
        control={control}
        name="age"
        render={({ field }) => (
          <View style={styles.input}>
            <TextInput
              label="Age"
              mode="outlined"
              keyboardType="numeric"
              onChangeText={field.onChange}
              value={field.value?.toString()}
              error={!!errors.age}
            />
            <HelperText type="error" visible={!!errors.age}>
              {errors.age?.message}
            </HelperText>
          </View>
        )}
      />

      {/* Submit Button */}
      <Button
        mode="contained"
        onPress={handleSubmit(handleLogin)}
        style={styles.button}
        contentStyle={styles.buttonContent}
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Signup"}
      </Button>
      <Text>
        Already have an Account{" "}
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#735503", textDecorationLine: "underline" }}>
            Login
          </Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default Signup;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f7e4b0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#735503",
  },
  buttonContent: {
    height: 50,
  },
});
