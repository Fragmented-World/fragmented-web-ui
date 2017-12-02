import gql from 'graphql-tag'

const CreateUserMutation = gql`
    mutation($email: AUTH_PROVIDER_EMAIL!) {
        signinUser(email: $email) {
            token
            user {
                id
            }
        }
    }
`
export default CreateUserMutation
