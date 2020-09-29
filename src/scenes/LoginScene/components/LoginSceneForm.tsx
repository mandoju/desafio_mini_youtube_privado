import { FormikProps, withFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import * as Yup from 'yup';

interface LoginSceneFormValues {
  email: string;
  password: string;
}

export const LoginSceneFormWithoutFormik = ({
  values,
  errors,
  handleSubmit,
  setFieldValue,
  touched,
}: FormikProps<LoginSceneFormValues>) => {
  return (
    <>
      <Input
        label="Email"
        placeholder="Digite seu Email aqui"
        leftIcon={<Icon name="mail" size={24} color="black" />}
        value={values.email}
        onChangeText={(text) => setFieldValue('email', text)}
        errorMessage={touched.email ? errors.email : ''}
      />
      <Input
        label="Senha"
        placeholder="Digite sua Senha Aqui"
        leftIcon={<Icon name="lock" size={24} color="black" />}
        value={values.password}
        onChangeText={(text) => setFieldValue('password', text)}
        errorMessage={touched.password ? errors.password : ''}
      />
      <View style={{ flex: 1 / 3, alignItems: 'center', paddingTop: 10 }}>
        <Button title={'Entrar'} onPress={handleSubmit} />
      </View>
    </>
  );
};

export const LoginSceneForm = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  }),

  handleSubmit: (values) => {
    console.log(values);
  },
})(LoginSceneFormWithoutFormik);
