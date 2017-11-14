import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';

export class TakeWhile extends RxNode {
  protected static title = 'TakeWhile';
  protected static link = 'http://reactivex.io/documentation/operators/takewhile.html';
  protected static desc = 'discard items emitted by an Observable after a specified condition becomes false';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('whileFilter', PropertyTypeEnum.Method, [
    SampleFunctions.ST6,
    SampleFunctions.ALL,
    SampleFunctions.GT6,
  ], '');

  public properties = {
    whileFilter: 0,
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.takeWhile(TakeWhile.propertiesType.params[this.properties.whileFilter].func);
  }
  public toString = ({}) => {
    return '.takeWhile(' + TakeWhile.propertiesType.params[this.properties.whileFilter].text + ')';
  }
}
