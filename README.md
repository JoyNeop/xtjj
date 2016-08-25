# 掘金.js

This is an addon.

## Use

### 1. Include Script

```
<script src="https://cdn.rawgit.com/JoyNeop/xtjj/master/xtjj.js"></script>
```

### 2. Add Meta Tag

```
<meta name="xtjj" content="57bdad990a2b58006ccd6cfe;top-right;blue-white" />
```

Make sure that the meta tag is placed before the script. Otherwise the script may not work properly.

## Config

The `content` attribute of the meta tag consist of the following configs:

- Juejin ID
- Position
- Color

And the separation mark is a semicolon.

### Juejin ID

Example: `57bdad990a2b58006ccd6cfe`.

This ID can be found in a detail page.

### Position

Available values:

- top-left
- top-right
- bottom-left
- bottom-right
- static

### Color

Available colors:

- blue-white
- white-blue
- black-white
- white-black
- XXXXXX-XXXXXX

The last means `/[0-9A-F]{6}-[0-9A-F]{6}/`.

The 2 colors are foreground and background colors, respectively; separated with a hyphen.

Additionally, the background can be `transparent`.

## Styling

The `id` of the container element is `xtjj-4270203835628303`. You may write your custom styles.

## License

MIT License.
