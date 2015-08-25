import _ from 'lodash'
import $ from 'jquery'
import Backbone from 'backbone'

export default class Foo {

  constructor() {
    console.log("Foo::constructor")
    this.crank()
  }
  
  crank() {
    setTimeout(() => {
      let compiled = _.template('hello <%= user %>!');
      console.log(compiled({'user': 'fred'}));
      this.crank()
    }, 1000)
  }
  
}