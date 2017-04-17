import {RxNode} from "./rxNode";
import {SampleFunctions} from "./sample-functions";
import {PropertyTypeEnum} from "./propertyType.enum";
import {PropertyType} from "./property-type";
export class Map extends RxNode {
  protected static title = "Map";
  protected static link = "http://reactivex.io/documentation/operators/map.html";
  protected static desc = "transform the items emitted by an Observable by applying a function to each item";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType("mapFunc",PropertyTypeEnum.Method,[
    SampleFunctions.X2,
    SampleFunctions.Xpoint2,
    SampleFunctions.X3,
    SampleFunctions.HELLOX,
  ],'');

  public runner = () => {
    return this.graphInputs[0].map(Map.propertiesType[0].types[this.properties.mapFunc].func);
  };
  public toString = () => {
    return '.map(' +Map.propertiesType[0].types[this.properties.mapFunc].text + ')';
  };


  public properties = {
    mapFunc: 0,
  };
  public graphInputs = [];
}
