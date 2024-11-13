import React from 'react';
import { Icon } from '@precooked/react-icon';
import { DynamicIcon } from '@precooked/react-dynamic-icon';
import { colors } from '@precooked/utils';

// Función auxiliar para resolver el color de los íconos y texto
const resolveColor = (color?: string, colorKey?: string, extraData?: any) => {
    if (colorKey && extraData && extraData[colorKey]) {
        const resolvedColor = extraData[colorKey];
        return colors[resolvedColor as keyof typeof colors] || resolvedColor; // Usamos colors si está en utils, si no, el valor es CSS
    } else if (color && (color in colors)) {
        return colors[color as keyof typeof colors];
    } else if (color) {
        return color;
    } else {
        return colors.text;
    }
};

// Función para resolver nombres dinámicos
const resolveName = (name: string, extraData?: any) => {
    if (name.includes('{{') && name.includes('}}')) {
        const propertyName: any = name.match(/\{\{(.+?)\}\}/)?.[1];
        return extraData?.[propertyName] || name;
    }
    return name;
};

// Función para resolver íconos por nombre o paths
const resolveIcon = (icon: string | undefined, paths?: any[], extraData?: any, size?: number, color?: string) => {
    const resolvedName = icon ? resolveName(icon, extraData) : undefined;
    const resolvedColor = resolveColor(color, undefined, extraData);

    if (resolvedName) {
        return <Icon name={resolvedName} size={size} color={resolvedColor} />;
    } else if (paths) {
        return <DynamicIcon paths={paths} size={size} />;
    }
    return null;
};

// Definimos las props del componente
interface TextCellProps {
    startIcon?: string;
    startIconPaths?: any[];
    startIconSize?: number;
    startIconColor?: string;
    startIconColorKey?: string;
    endIcon?: string;
    endIconPaths?: any[];
    endIconSize?: number;
    endIconColor?: string;
    endIconColorKey?: string;
    prepend?: string;
    append?: string;
    value?: string;
    textColor?: string;
    textColorKey?: string;
    extraData?: any;
    className?: string;
    style?: React.CSSProperties;
    textStyle?: React.CSSProperties;
}

const TextCell: React.FC<TextCellProps> = ({
    startIcon,
    startIconPaths,
    startIconSize = 20,
    startIconColor,
    startIconColorKey,
    endIcon,
    endIconPaths,
    endIconSize = 20,
    endIconColor,
    endIconColorKey,
    prepend,
    append,
    value,
    textColor,
    textColorKey,
    extraData,
    className,
    style,
    textStyle
}) => {
    const resolvedTextColor = resolveColor(textColor, textColorKey, extraData);
    const resolvedStartIconColor = resolveColor(startIconColor, startIconColorKey, extraData);
    const resolvedEndIconColor = resolveColor(endIconColor, endIconColorKey, extraData);

    return (
        <div
            className={className}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}
        >
            {startIcon || startIconPaths ? (
                <span style={{ marginRight: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {resolveIcon(startIcon, startIconPaths, extraData, startIconSize, resolvedStartIconColor)}
                </span>
            ) : null}
            {prepend && <span style={{ ...textStyle, color: resolvedTextColor, marginRight: '4px' }}>{prepend}</span>}
            <div style={{ ...textStyle, color: resolvedTextColor }}>
                {value || '-'}
            </div>
            {append && <span style={{ ...textStyle, color: resolvedTextColor, marginLeft: '4px' }}>{append}</span>}
            {endIcon || endIconPaths ? (
                <span style={{ marginLeft: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {resolveIcon(endIcon, endIconPaths, extraData, endIconSize, resolvedEndIconColor)}
                </span>
            ) : null}
        </div>
    );
};

export default TextCell;
