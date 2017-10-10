// @flow
import React from 'react';
import { COLOR_PALETTE } from '../constants';

type CodeBlockProps = {
  children: string,
};

const INDENTATION_SIZE = 7;

const codeBlockStyle = {
  backgroundColor: COLOR_PALETTE.B,
  color: COLOR_PALETTE.A,
  display: 'inline-block'
}

const getIndentationCount = (line: string): ?number => line
  .split('')
  .reduce((count, char, i) => {
    if (count) return count;
    return char === ' ' ? null : i;
  }, null);

type ParsedLine = {
  intentation: number,
  line: string,
};

const parseCode = (code: string): Array<ParsedLine> => {
  const lines = code
    .split('\n')
    .map(line => ({ line, indentation: getIndentationCount(line) || 0 }))
  return lines;
}

const CodeBlock = (props: CodeBlockProps) => (
  <div style={codeBlockStyle}>
    {parseCode(props.children).map(({ indentation, line }) => (
      <div style={{ paddingLeft: indentation * INDENTATION_SIZE}}>{`${line}`}</div>
    ))}
  </div>
);

export default CodeBlock;
