/* eslint-disable react/destructuring-assignment */
import { Icon } from '../Icon';
import type { IconSymbolType } from '../Icon/types';
import { useVariant } from './hooks';
import type { VariantType } from './types';

type Props = {
	label: string;
	icon?: IconSymbolType;
	variant?: VariantType;
	href?: string;
};
export default function ButtonComponent(props: Props): JSX.Element {
	const layer = useVariant(props.variant!);
	const isAnchor = Boolean(props.href);

	return (
		<layer.Container
			as={isAnchor ? 'a' : 'button'}
			hasIcon={!!props.icon}>
			{!!props.icon && <Icon icon={props.icon} />}
			<layer.Label>{props.label}</layer.Label>
			<layer.State />
		</layer.Container>
	);
}

const defaultProps: Omit<Props, 'label'> = {
	href: undefined,
	icon: undefined,
	variant: 'filled',
};
ButtonComponent.defaultProps = defaultProps;
