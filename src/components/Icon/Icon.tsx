import type { IconSymbolType, IconKindType } from './types';

function normalizeIconSymbols(symbol: IconSymbolType): string {
	return symbol.replace(/-/g, '_');
}

type Props = {
	icon: IconSymbolType;
	kind?: IconKindType;
};
export default function IconComponent({ icon, kind }: Props): JSX.Element {
	const iconName: string = normalizeIconSymbols(icon);
	return <span className={`material-symbols-${kind}`}>{iconName}</span>;
}

const defaultProps: Omit<Props, 'icon'> = { kind: 'outlined' };
IconComponent.defaultProps = defaultProps;
