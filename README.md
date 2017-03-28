## aframe-point-component

A point component for [A-Frame](https://aframe.io). Creates a [THREE.Points
object](https://threejs.org/docs/#Reference/Objects/Points). Points remain a
point no matter the distance.

![Screenshot](https://cloud.githubusercontent.com/assets/674727/24059359/0ba5a1f8-0b0c-11e7-8cc3-df71ee1d673e.gif)

[VIEW DEMO](http://naugtur.pl/aframe-point-component/)

### API

| Property    | Description                                       | Default Value |
|-------------|---------------------------------------------------|---------------|
| size        | size of rendered point (length of rectangle edge) | 1             |
| color       | color definition, like in CSS                     | #888          |
| perspective | boolean - should it scale with distance or not    | false         |

#### Custom Methods

`setPoints(array of arrays3)` - replace single point geometry with multiple points in one a-point instance

example

```js
  element.components.point.setPoints([
    [0,0,0]
    [0,0,1]
    [0,0,2]
    ...
  ])
```

### Installation

npm install aframe-point

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
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
