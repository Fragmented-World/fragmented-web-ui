import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NewsFeedItemDetail from 'containers/NewsFeedItemDetail'

const TextNewsItemFeedItem = props => {
    return (
        <div>
            <h2>
                <Link to={{ pathname: '/news-item-detail', search: `?id=${props.id}`, state: props }}>{`${props.index +
                    1}. ${props.title}`}</Link>
            </h2>
            <NewsFeedItemDetail
                id={props.id}
                comments={props.comments}
                user={props.user}
                pathname="/news-item-detail"
            />
        </div>
    )
}

TextNewsItemFeedItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
}

export default TextNewsItemFeedItem
