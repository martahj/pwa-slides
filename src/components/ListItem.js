// @flow
import React from 'react';
import { COLOR_PALETTE } from '../constants';

export type ListItemProps = {
  title: ?string,
  text: string,
  moreLineSeparation: boolean,
};

const listItemStyle = {
  // fontSize: 18,
};

const titleStyle = {
  fontWeight: 600,
  color: COLOR_PALETTE.A,
  opacity: .8
};

const lineSeparationStyle = {
  paddingTop: 10,
}

const ListItem = ({
  title,
  text,
  moreLineSeparation,
}: ListItemProps) => (
  <li style={{
    ...listItemStyle,
    ...(moreLineSeparation ? lineSeparationStyle : {})
  }}>
    {Boolean(title) && (
      <span style={titleStyle}>
        {`${title}  `}
      </span>
    )}
    {text}
  </li>
);

export default ListItem;
