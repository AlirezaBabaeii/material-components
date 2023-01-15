import React from 'react';
import styled from 'styled-components';

export enum Variant {
  Filled = 'filled',
  Outlined = 'outlined',
  Text = 'text',
  Elevated = 'elevated',
  Tonal = 'tonal',
}

const BaseButton = styled.button`
  border-radius: 100px;
`;

const FilledButton = styled(BaseButton)`
  background-color: blue;
  border: none;
  color: white;
`;

const OutlinedButton = styled(BaseButton)`
  background: transparent;
  border: 2px solid blue;
  color: blue;
`;

export default function Button(props: Props): JSX.Element {
  const { variant, ...passedProps } = props;
  switch (variant) {
    case Variant.Filled:
      return <FilledButton {...passedProps} />;

    case Variant.Outlined:
      return <OutlinedButton {...passedProps} />;

    default:
      return <FilledButton {...passedProps} />;
  }
}

type Props = React.PropsWithChildren<{ variant: `${Variant}` | Variant }>;
