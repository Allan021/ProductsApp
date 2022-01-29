import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#A81C85',
  white: '#fff',
};
export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputField: {
    color: 'white',
    fontSize: 26,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  inputFieldIOS: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 22,
    paddingVertical: 5,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  buttonReturn: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
});
