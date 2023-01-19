/* eslint-disable react/destructuring-assignment */
import { type Variants as ColorKey } from '../../theme/types';
import { Icon } from '../Icon';
import type { IconType } from '../Icon/types';
import { useVariant } from './hooks';
import type { VariantType } from './types';

type Props = {
	label: string;
	icon?: IconType;
	variant?: VariantType;
	color?: ColorKey;
};
export default function ButtonComponent(props: Props): JSX.Element {
	const layer = useVariant(props.variant!);

	return (
		<layer.Container
			hasIcon={!!props.icon}
			color={props.color}>
			<layer.State />
			{!!props.icon && <Icon icon={props.icon} />}
			<layer.Label>{props.label}</layer.Label>
		</layer.Container>
	);
}

const defaultProps: Omit<Props, 'label'> = {
	icon: undefined,
	variant: 'filled',
	color: 'primary',
};
ButtonComponent.defaultProps = defaultProps;
