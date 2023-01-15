import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../theme';
import { withToken, withTypography } from '../../theme/mixins';

export enum Variant {
  Filled = 'filled',
  Outlined = 'outlined',
  Text = 'text',
  Elevated = 'elevated',
  Tonal = 'tonal',
}

const BaseButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: none;
  box-shadow: none;
  outline: none;
  stroke: none;
  padding: 2rem 6rem;
  margin: 0;
  border-radius: 100px;

  ${withTypography('title-large')}
`;

const FilledButton = styled(BaseButton)`
  background-color: ${withToken('primary')};
  color: ${withToken('on-primary')};
`;

const OutlinedButton = styled(BaseButton)`
  border: 2px solid ${(props) => props.theme['md-sys-color-primary']};
  color: ${(props) => props.theme['md-sys-color-primary']};
`;

export default function Button(props: Props): JSX.Element {
  const { theme, setTheme } = useTheme();
  const { variant, ...passedProps } = {
    ...props,
    onClick() {
      setTheme(theme === 'light' ? 'dark' : 'light');
    },
  };
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
