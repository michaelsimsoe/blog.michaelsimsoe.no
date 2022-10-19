import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from './codeBlock';
const components = {
  pre: CodeBlock,
};

interface Props {
  children: any;
}

const MdxBlock: React.FunctionComponent<Props> = ({children}) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
export default MdxBlock;
