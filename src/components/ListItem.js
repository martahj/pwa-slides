// @flow
import React from 'react';

export type ListItemProps = {
  title: ?string,
  text: string,
};

const listItemStyle = {

};

const ListItem = ({
  title,
  text,
}: ListItemProps) => (
  <li style={listItemStyle}>
    {Boolean(title) && (
      <span>
        {title}
      </span>
    )}
    {text}
  </li>
);

export default ListItem;
