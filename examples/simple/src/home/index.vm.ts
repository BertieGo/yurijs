import { makeObservable, observable } from 'mobx';
import classNames = require('classnames');

export default class HomeViewModel {
  constructor() {
    makeObservable(this);
  }

  @observable
  counter = 0;

  list = [1,2];

  onPropagation() {
    console.log(233)
  }
}
