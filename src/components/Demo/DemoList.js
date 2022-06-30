import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items ,title} = props;

  const sortedList = useMemo(() => {
    
    if(title === 'Ascending Order'){
        return items.sort((a, b) => a - b);
    }
    else if(title === 'Decending Order'){
        return items.sort((a, b) => b - a);
    }
    return items;
  }, [items,title]); 
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);