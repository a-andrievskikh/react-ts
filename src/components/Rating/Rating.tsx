import React from 'react';

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

export function Rating(props: RatingPropsType) {
  console.log('Rating Rendering!');
  if (props.value === 1) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 2) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 3) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 4) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
      </div>
    );
  }
  if (props.value === 5) {
    return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </div>
    );
  }
  return (
    <div>
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
};
export function Star(props: StarPropsType) {
  console.log('Star Rendering!');
  if (props.selected)
    return (
      <span>
        <strong>Star </strong>
      </span>
    );

  return <span>Star </span>;
}
