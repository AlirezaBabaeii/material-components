import type { IconType, IconKindType } from './types';

type Props = {
	icon: IconType;
	kind?: IconKindType;
};
export default function IconComponent({ icon, kind }: Props): JSX.Element {
	return <span className={`material-symbols-${kind}`}>{icon}</span>;
}

const defaultProps: Omit<Props, 'icon'> = { kind: 'outlined' };
IconComponent.defaultProps = defaultProps;
