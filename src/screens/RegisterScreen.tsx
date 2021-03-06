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

import {Logo} from '../components/Logo';
import {AuthContext} from '../contexts/AuthContext';
import {useForm} from '../hooks/useForm';
import {colors, styles} from '../theme/appTheme';
interface Props extends StackScreenProps<any, any> {}
export const RegisterScreen = ({navigation}: Props) => {
  const {signUp, errorMessage, removeError} = useContext(AuthContext);
  const {name, email, password, onChange} = useForm({
    name: '',
    email: '',
    password: '',
  });
  const handleSend = () => {
    Keyboard.dismiss();
    signUp({nombre: name, correo: email, password});
  };
  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Registro Incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: colors.primary}}>
        <View style={styles.formContainer}>
          <Logo />
          <Text style={styles.title}>Registro</Text>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            // Inherit any props passed to it; e.g., multiline, numberOfLines below
            placeholder="Ingresa tu nombre"
            placeholderTextColor={'rgba(255,255,255,.7)'}
            autoCapitalize="words"
            selectionColor="white"
            autoCorrect={false}
            style={styles.inputField}
            onChangeText={value => onChange(value, 'name')}
            onSubmitEditing={() => handleSend()}
            value={name}
          />
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
          <Text style={styles.label}>Contrase??a</Text>
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
                <Text style={styles.buttonText}>Crear Cuenta</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.replace('LoginScreen')}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
