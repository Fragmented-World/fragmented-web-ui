const text = {
    clientErrorMessages: {
        passwordAndConfirmPasswordDontMatch: "The passwords that you entered don't match. Please try again.",
        invalidEmail: 'The email that you entered is invalid. Please try again.',
        passwordTooShort: minimumPasswordLength =>
            `Please use a longer password. The minimum length is ${minimumPasswordLength}.`,
        invalidTitle: 'Titles cannot be blank',
        invalidUrl: 'Links cannot be blank'
    },
    networkErrorMessages: {
        newsFeedLoad: 'There was an error getting posts. Please refresh to try again'
    },
    Login: {
        title: 'Login',
        emailLabel: 'Email Address',
        emailPlaceholder: 'Enter your email',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Enter your password'
    },
    NewsFeed: {
        loading: 'Getting posts...'
    }
}

export default text
