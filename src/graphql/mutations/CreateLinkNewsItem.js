import gql from 'graphql-tag'

const CreateLinkNewsItem = gql`
    mutation CreateLinkNewsItem($userId: ID!, $creationTime: DateTime!, $title: String!, $url: String!) {
        createNewsItem(userId: $userId, creationTime: $creationTime, title: $title, url: $url) {
            id
        }
    }
`
export default CreateLinkNewsItem
