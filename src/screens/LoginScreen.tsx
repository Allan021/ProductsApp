import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Background} from '../components/Background';
import {Logo} from '../components/Logo';
import {AuthContext} from '../contexts/AuthContext';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';
interface Props extends StackScreenProps<any, any> {}
export const LoginScreen = ({navigation}: Props) => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });
  const handleSend = () => {
    Keyboard.dismiss();
    signIn({email, password});
  };

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Login Incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  return (
    <>
      <Background />

      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.formContainer}>
          <Logo />
          <Text style={styles.title}>Login</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            // Inherit any props passed to it; e.g., multiline, numberOfLines below
            placeholder="owner@example.com"
            placeholderTextColor={'rgba(255,255,255,.7)'}
            autoCapitalize="none"
            selectionColor="white"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.inputField}
            onChangeText={value => onChange(value, 'email')}
            onSubmitEditing={() => handleSend()}
            value={email}
          />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            // Inherit any props passed to it; e.g., multiline, numberOfLines below
            placeholder="*********"
            placeholderTextColor={'rgba(255,255,255,.7)'}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputField}
            selectionColor="white"
            secureTextEntry
            onChangeText={value => onChange(value, 'password')}
            onSubmitEditing={() => handleSend()}
            value={password}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleSend()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegisterScreen')}>
              <View>
                <Text style={styles.buttonText}>Nueva cuenta </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
