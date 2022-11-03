import GenericModel from "./GenericModel";

export default class Category extends GenericModel{
    name: string;
    //this should be obtained via uri, using assets for image quality reasons
    imageSource: string;

    constructor(object:any){
        super(object);
        this.name = object.name
        this.imageSource = object.imageSource
    }
}