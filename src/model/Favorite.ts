import GenericModel from "./GenericModel";
export default class Favorite extends GenericModel {
    mealName: string;
    chainName: string;
    rating: number;
    timeAproxMin: number;
    timeAproxMax: number;
    mealImageSource: string;
    logoImageSource: string;

    constructor(object: any) {
        super(object);
        this.mealName = object.mealName;
        this.logoImageSource = object.logoImageSource;
        this.mealImageSource = object.mealImageSource;
        this.chainName = object.chainName;
        this.rating = object.rating;
        this.timeAproxMin = object.timeAproxMin;
        this.timeAproxMax = object.timeAproxMax;
    }
}
