import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
// import {Link} from 'react-router-dom';

const Posts = () => (
    <Query query={gql`
        {
            posts {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `}>
        {
            ({loading, error, data}) => {
                console.log(data);
                return (<p>Hello</p>)
            }
        }
    </Query>
)

export default Posts;