import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";
import {PropertyType} from "./property-type";
import {PropertyTypeEnum} from "./propertyType.enum";

export class From extends RxNode {
  protected static title = "From";
  protected static link = "http://reactivex.io/documentation/operators/from.html";
  protected static desc = "convert various other objects and data types into Observables";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType("list",PropertyTypeEnum.List,
    new PropertyType("number",PropertyTypeEnum.Number)
    ,"");

  public runner = () => {
    return Observable.from(this.properties.list);
  };
  public toString = () => {
    return 'Observable.from('+this.properties.list.join(",")+')';
  };


  public properties = {
    list: [
      1,2
      ]
  };
  public graphInputs = [];
}
