## Point

A point component for [A-Frame](https://aframe.io).

Creates a THREE.Points object

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| size | size of rendered point (length of rectangle edge) | 1 |
| color| color definition, like in CSS | #888 |
| perspective | boolean - should it scale with distance or not | false |

### Installation

npm install aframe-point

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.3.2/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-point-component/dist/aframe-point-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity point="size: 2"></a-entity>
    OR
    <a-point size="2"></a-point>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-point
```

Then require and use.

```js
require('aframe');
require('aframe-point');
```
