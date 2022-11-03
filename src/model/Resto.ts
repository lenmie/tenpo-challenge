import GenericModel from "./GenericModel";

export default class Resto extends GenericModel {
    name: string;
    rating: number;
    timeAproxMin: number;
    timeAproxMax: number;
    logoImageSource: string;
    discount: number;

    constructor(object: any) {
        super(object);
        this.name = object.name
        this.discount = object.discount;
        this.logoImageSource = object.logoImageSource;
        this.rating = object.rating;
        this.timeAproxMin = object.timeAproxMin;
        this.timeAproxMax = object.timeAproxMax;
    }
}