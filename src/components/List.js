// @flow
import React from 'react';
import ListItem from './ListItem';
import type { ListItemProps } from './ListItem';

type ListProps = {
  items: Array<string | ListItemProps>,
  useBullets: ?boolean,
};

const listStyle = {
};

const listStyleNoBullets = {
  listStyle: 'none',
};

const List = ({
  items,
  useBullets,
}: ListProps) => {
  return (
    <ul
      style={{
      ...listStyle,
      ...(Boolean(useBullets) ? {} : listStyleNoBullets)
      }}
    >
      {items.map((item) => {
        const isString: boolean = typeof item === 'string';
        const text: string = isString ? item : (typeof item === 'object' ? item.text : '');
        return (
          <ListItem
            key={text}
            text={text}
            moreLineSeparation={!useBullets}
            title={isString ? undefined : item.title}
          />
        )
      })}
    </ul>
  )
};

export default List;
