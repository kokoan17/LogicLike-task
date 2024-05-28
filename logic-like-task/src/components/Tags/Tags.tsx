import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
React;

import styles from "./styles.module.scss";
import cn from "class-names";

type Props = {
  tags: string[];
  onClick: (tag: string) => void
};

const Tags = ({ tags, onClick }: Props) => {
  const [selectedTag, setSelectedTag] = useState<string>(tags[0]);

  useEffect(() => {
    setSelectedTag(tags[0]);
  }, [tags]);

  const tagHandleClick = (item: string) => {
    setSelectedTag(item);
    onClick(item);
  };

  return (
    <div className={styles.tags}>
      <div className={styles.tags__items}>
        {tags.map((item) => (
          <div
            key={item}
            className={cn(styles.tags__item, {
              [styles.active]: selectedTag === item,
            })}
            onClick={() => tagHandleClick(item)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Tags };
