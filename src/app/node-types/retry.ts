import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";
import {PropertyTypeEnum} from "./propertyType.enum";
import {PropertyType} from "./property-type";

export class Retry extends RxNode {
  protected static title = "Retry";
  protected static link = "http://reactivex.io/documentation/operators/retry.html";
  protected static desc = "if a source Observable sends an onError notification, resubscribe to it in the hopes that it will complete without error";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType("retryCount",PropertyTypeEnum.Number);

  public runner = ({retryCount}) => {
    return this.graphInputs[0].retry(retryCount);
  };
  public toString = ({}) => {
    return '.retry(' + this.properties.retryCount + ');';
  };


  public properties = {
    retryCount: 3
  };
  public graphInputs = [];
}
