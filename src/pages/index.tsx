import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/index';
import SEO from '../components/seo';
import { Intro } from '../components/intro';
import { ArticlePreview } from '../components/article-preview';
import { ArticleList } from '../components/article-list';

interface Props {
  data: {
    allMdx: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: Location;
}

const BlogIndex: React.FC<Props> = ({ data, location }) => {
  const siteTitle = data?.site.siteMetadata.title || 'yo';
  const posts = data?.allMdx.edges;
  const publishedPosts = posts?.filter((post:any)=> {
    return post.node.frontmatter.published === true;
  })
  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="Jeg liker deg" />
        <Intro />
        <ArticleList articles={publishedPosts} />
      </Layout>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  allMdx(sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        excerpt
        fields {
          timeToRead {
            minutes
          }
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
          description
          tags
          published
          updated(formatString: "DD.MM.YYYY")
          slug
        }
      }
    }
  }
}`;
