import { AuthForm ,TextInput, AuthButton } from './style'

const SignupForm = () => {
    return (
        <AuthForm name="signup">
            <TextInput type='text' placeholder='email'/>
            <TextInput type='password' placeholder='password'/>
            <TextInput type='password' placeholder='confirm password'/>

            <AuthButton>Create an Account</AuthButton>
            <p className='text-slate-400 text-sm'>Already have an Account</p>
        </AuthForm>
    );
}

export default SignupForm;