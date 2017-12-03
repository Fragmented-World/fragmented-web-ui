import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import defaultTo from 'lodash/defaultTo'

const DEFAULT_ERROR_CODE = -1

const graphQLErrorCodes = {
    [DEFAULT_ERROR_CODE]: 'Something went wrong, sorry about that.',
    3022: 'The email address or password you entered is incorrect. Please try again.',
    3023: 'That username or email is already taken. Please choose another one.',
    3008: "You don't have permission to do that. Try signing out and signing back in."
}

const getErrorMessage = error => {
    const errorCode = get(error, 'graphQLErrors[0].code', DEFAULT_ERROR_CODE)
    const errorMessage = defaultTo(graphQLErrorCodes[errorCode], graphQLErrorCodes[DEFAULT_ERROR_CODE])
    return errorMessage
}

const ErrorComponent = ({ error, errorMessage }) => {
    return (
        <div>
            <p>{error ? getErrorMessage(error) : errorMessage}</p>
        </div>
    )
}

ErrorComponent.propTypes = {
    error: PropTypes.object,
    errorMessage: (props, propName, componentName) => {
        const isString = value => typeof value === 'string' || value instanceof String
        if (!props.errorMessage && !props.error) {
            return new Error(`One of props 'error' or 'errorMessage' was not specified in '${componentName}'.`)
        }

        if (props.errorMessage && !isString(props.errorMessage)) {
            return new Error(`'${propName}' Must be a string '${componentName}'.`)
        }
    }
}

export default ErrorComponent
