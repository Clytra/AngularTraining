import { Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
    selector: "product",
    templateUrl: "./product.component.html"
})

export class ProductComponent {
    model: Model = new Model();
}