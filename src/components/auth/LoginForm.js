import { AuthForm ,TextInput, AuthButton } from './style'

const LoginForm = () => {
    return (
        <AuthForm name="login">
            <TextInput type='text' placeholder='email'/>
            <TextInput type='password' placeholder='password'/>

            <AuthButton>Sign in</AuthButton>
        </AuthForm>
    );
}

export default LoginForm;