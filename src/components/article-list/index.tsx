import React from 'react';
import { Link } from 'gatsby';

import * as styles from './styles.module.scss';

import { ArticlePreview } from '../article-preview';

interface ArticleListProps {
  articles: any[];
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <section className={styles.articles_section}>
      <h2>
        - se, han <strong>skriver</strong>
      </h2>
      <section className={styles.articles}>
        {articles.map(({ node }: any) => {
          return (
            <ArticlePreview
              title={node.frontmatter.title || node.fields.slug}
              slug={node.frontmatter.slug}
              published={node.frontmatter.date}
              updated={node.frontmatter.updated}
              excerpt={node.frontmatter.description || node.excerpt}
              timeToRead={Math.floor(node.fields.timeToRead.minutes)}
              tags={node.frontmatter.tags}
              key={node.frontmatter.slug}
            />
          );
        })}
      </section>
    </section>
  );
};
