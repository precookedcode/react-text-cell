
# @precooked/react-text-cell

![Precooked Logo](https://precookedcode.com/assets/logos/logo-horizontal-dark.svg)

`@precooked/react-text-cell` is a flexible React component for displaying text with optional icons, prepend, and append content. It provides support for dynamic icons and custom SVG paths, making it ideal for creating rich UI elements.

## Installation

```bash
npm install @precooked/react-text-cell
```

## Props

| Prop                 | Type                         | Default    | Description                                                                 |
|----------------------|------------------------------|------------|-----------------------------------------------------------------------------|
| `startIcon`          | `string`                    | -          | Name of the start icon to display.                                          |
| `startIconPaths`     | `Array<{ d: string, color: string }>` | -          | Custom SVG paths for the start icon.                                        |
| `startIconSize`      | `number`                    | `20`       | Size of the start icon in pixels.                                           |
| `startIconColor`     | `string`                    | -          | Color of the start icon.                                                    |
| `startIconColorKey`  | `string`                    | -          | Key to resolve the start icon color from extraData.                         |
| `endIcon`            | `string`                    | -          | Name of the end icon to display.                                            |
| `endIconPaths`       | `Array<{ d: string, color: string }>` | -          | Custom SVG paths for the end icon.                                          |
| `endIconSize`        | `number`                    | `20`       | Size of the end icon in pixels.                                             |
| `endIconColor`       | `string`                    | -          | Color of the end icon.                                                      |
| `endIconColorKey`    | `string`                    | -          | Key to resolve the end icon color from extraData.                           |
| `prepend`            | `string`                    | -          | Text to prepend before the main value.                                      |
| `append`             | `string`                    | -          | Text to append after the main value.                                        |
| `value`              | `string`                    | `"-"`      | Main text value to display.                                                 |
| `textColor`          | `string`                    | -          | Color of the text.                                                          |
| `textColorKey`       | `string`                    | -          | Key to resolve the text color from extraData.                               |
| `extraData`          | `object`                    | -          | Additional data for resolving dynamic values.                               |
| `className`          | `string`                    | -          | Custom CSS class for the root container.                                    |
| `style`              | `React.CSSProperties`       | -          | Inline styles for the root container.                                       |
| `textStyle`          | `React.CSSProperties`       | -          | Inline styles for the text elements.                                        |

## Usage

Here’s an example of how to use the `TextCell` component:

```tsx
import React from 'react';
import TextCell from '@precooked/react-text-cell';

const App = () => {
    return (
        <TextCell
            startIcon="check-circle"
            startIconColor="success"
            value="Completed"
            textColor="primary"
            prepend="Status:"
            append="✓"
            extraData={{ success: true }}
        />
    );
};

export default App;
```

## Features

- Dynamic icon rendering using `@precooked/react-icon`.
- Support for custom SVG paths through `startIconPaths` and `endIconPaths`.
- Flexible text styling with `prepend`, `append`, and `value` props.
- Extensible via `extraData` for dynamic color and value resolution.

## License

This package is licensed under the MIT License.
