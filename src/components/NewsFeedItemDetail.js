import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import text from 'util/text'
import tippable from 'util/tippable'

const eth = window.web3.eth
const amount = 1292607577265618

const tip = user =>
    eth.sendTransaction(
        {
            from: eth.coinbase,
            to: user.publicAddress,
            value: amount
        },
        (error, result) => {
            if (!error) {
                console.log('Transaction successul!')
                console.log(result)
            } else {
                console.log('Error sending transaction.')
                console.log(error)
            }
        }
    )

const NewsFeedItemDetail = (props, context) => {
    const web3Context = context.web3
    const { user, pathname, id, comments } = props

    console.log(JSON.stringify(web3Context))
    console.log(JSON.stringify(user))
    const numberOfComments = comments.length
    return (
        <div>
            <p>
                {`${text.NewsItems.usernamePrefix} ${user.username}  `}
                {tippable(web3Context, user) && <a onClick={() => tip(user)}>(tip)</a>}
            </p>
            <Link to={{ pathname: pathname, search: `?id=${id}` }}>{`${numberOfComments} ${text.Comments.comments(
                numberOfComments
            )}`}</Link>
        </div>
    )
}

NewsFeedItemDetail.propTypes = {
    id: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    state: PropTypes.object
}

NewsFeedItemDetail.contextTypes = {
    web3: PropTypes.object
}

export default NewsFeedItemDetail
