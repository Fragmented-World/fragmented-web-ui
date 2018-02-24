import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import text from 'util/text'
import tippable from 'util/tippable'
import TipModal from 'containers/TipModal'
import PointerLink from 'styles/PointerLink'
import { Badge } from 'react-bootstrap'

class NewsFeedItemDetail extends React.Component {
    state = {
        showTipModel: false
    }

    handleCloseTipModal = () => this.setState({ showTipModel: false })
    handleShowTipModal = () => this.setState({ showTipModel: true })

    render() {
        const web3Context = this.context.web3
        const { author, pathname, id, comments, ethToUsdRate } = this.props
        const numberOfComments = comments.length
        return (
            <div>
                <TipModal
                    recipient={author}
                    show={this.state.showTipModel}
                    onClose={this.handleCloseTipModal}
                    ethToUsdRate={ethToUsdRate}
                />
                <p>
                    {`${text.NewsItems.usernamePrefix} ${author.username}  `}
                    {tippable(web3Context, author) && (
                        <PointerLink onClick={this.handleShowTipModal}>
                            <Badge>Tip</Badge>
                        </PointerLink>
                    )}
                </p>
                <Link to={{ pathname: pathname, search: `?id=${id}` }}>{`${numberOfComments} ${text.Comments.comments(
                    numberOfComments
                )}`}</Link>
            </div>
        )
    }
}

NewsFeedItemDetail.propTypes = {
    id: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    author: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    state: PropTypes.object,
    ethToUsdRate: PropTypes.number
}

NewsFeedItemDetail.contextTypes = {
    web3: PropTypes.object
}

export default NewsFeedItemDetail
