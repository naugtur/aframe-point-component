/* global AFRAME THREE */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.')
}

/**
 * Point component for A-Frame.
 */
AFRAME.registerComponent('point', {
  schema: {
    color: {
      type: 'color',
      default: '#888'
    },
    size: {
      type: 'number',
      default: 1
    },
    perspective: {
      type: 'boolean',
      default: false
    }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    // Create geometry.
    this.geometry = new THREE.Geometry()
    this.geometry.vertices.push(new THREE.Vector3(0, 0, 0))
    // Create material.
    this.material = new THREE.PointsMaterial({
      color: this.data.color,
      size: this.data.size,
      sizeAttenuation: this.data.perspective
    })
    // Create mesh.
    this.points = new THREE.Points(this.geometry, this.material)
    // Set mesh on entity.
    this.el.setObject3D('points', this.points)
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
    this.el.removeObject3D('points')
  }

})

AFRAME.registerPrimitive('a-point', {
  defaultComponents: {
    point: {}
  },
  mappings: {
    color: 'point.color',
    size: 'point.size',
    perspective: 'point.perspective'
  }
})
