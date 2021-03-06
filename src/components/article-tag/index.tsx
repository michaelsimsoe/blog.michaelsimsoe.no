import React from 'react';
import { Link } from 'gatsby';

import * as styles from './styles.module.scss';

interface ArticlTagProps {
  tag: string;
}
export const ArticleTag: React.FC<ArticlTagProps> = ({ tag }) => {
  let tagClass = '';
  if (tag.toLowerCase().split(' ').join('_') in styles) {
    tagClass = styles[tag.toLowerCase().split(' ').join('_')];
  } else {
    tagClass = styles.default_tag;
  }
  return (
    <div className={`${styles.tag} ${tagClass}`}>
      <Link to="/">{tag}</Link>
    </div>
  );
};
