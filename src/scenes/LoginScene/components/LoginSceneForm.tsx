import { FormikProps, withFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { submitLogin } from '@ducks/user';
import { Actions } from 'react-native-router-flux';
import { RootStateType } from '@ducks/index';

interface LoginSceneFormValues {
  login: string;
  password: string;
}

interface LoginSceneFormWithoutFormikProps {
  submitLogin: (params: {
    login: string;
    password: string;
    callback: () => void;
  }) => Promise<void>;
  loading: boolean;
}

export const LoginSceneFormWithoutFormik = ({
  values,
  errors,
  handleSubmit,
  setFieldValue,
  touched,
  loading,
}: FormikProps<LoginSceneFormValues> & LoginSceneFormWithoutFormikProps) => {
  return (
    <View style={{}}>
      <Input
        label="Usuário"
        placeholder="Digite seu Login aqui"
        leftIcon={<Icon name="person" size={24} color="black" />}
        value={values.login}
        onChangeText={(text) => setFieldValue('login', text)}
        errorMessage={touched.login ? errors.login : ''}
      />
      <Input
        label="Senha"
        placeholder="Digite sua Senha Aqui"
        leftIcon={<Icon name="lock" size={24} color="black" />}
        value={values.password}
        onChangeText={(text) => setFieldValue('password', text)}
        errorMessage={touched.password ? errors.password : ''}
      />
      <View style={{ flex: 0, paddingTop: 10, alignItems: 'center' }}>
        <View style={{ flex: 0, width: '33%' }}>
          <Button title={'Entrar'} onPress={handleSubmit} loading={loading} />
        </View>
      </View>
    </View>
  );
};

const LoginSceneFormFormik = withFormik<
  LoginSceneFormWithoutFormikProps,
  LoginSceneFormValues
>({
  mapPropsToValues: () => ({ login: '', password: '' }),

  validationSchema: Yup.object().shape({
    login: Yup.string()
      .min(4, 'O usuário deve ter no mínimo 4 caracteres')
      .required('Preencha o campo de usuário'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  }),

  handleSubmit: ({ login, password }, { props }) => {
    const callback = () => Actions.replace('videoList');
    props.submitLogin({ login, password, callback });
  },
})(LoginSceneFormWithoutFormik);

const mapStateToProps = (state: RootStateType) => {
  const loading = state.user.loadingLogin;
  return { loading };
};

export const LoginSceneForm = connect(mapStateToProps, { submitLogin })(
  LoginSceneFormFormik,
);
