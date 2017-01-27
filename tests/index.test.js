/* global assert, setup, suite, test */
require('aframe')
require('../index.js')
var entityFactory = require('./helpers').entityFactory

suite('point component', function () {
  test('receives attributes', function (done) {
    var el
    var component
    el = entityFactory()
    el.addEventListener('componentinitialized', function (evt) {
      if (evt.detail.name !== 'point') { return }
      component = el.components['point']
      assert.equal(component.material.size, 2)
      done()
    })
    el.setAttribute('point', {size: 2})
  })

  test('can be created directly', function () {
    var el
    el = document.createElement('a-point')
    assert.ok(el.object3D)
  })
})
