/* eslint-disable react/destructuring-assignment */
import { Icon } from '../Icon';
import type { IconSymbolType } from '../Icon/types';
import { useVariant } from './hooks';
import type { VariantType } from './types';

type Props = {
	label: string;
	icon?: IconSymbolType;
	variant?: VariantType;
};
export default function ButtonComponent(props: Props): JSX.Element {
	const layer = useVariant(props.variant!);

	return (
		<layer.Container hasIcon={!!props.icon}>
			<layer.State />
			{!!props.icon && <Icon icon={props.icon} />}
			<layer.Label>{props.label}</layer.Label>
		</layer.Container>
	);
}

const defaultProps: Omit<Props, 'label'> = {
	icon: undefined,
	variant: 'filled',
};
ButtonComponent.defaultProps = defaultProps;
