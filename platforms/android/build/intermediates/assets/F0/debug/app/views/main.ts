import { Component } from "@angular/core";

var sound = require("nativescript-sound");

@Component({
    selector: "ns-app",
    templateUrl: "views/main.html",
})
export class MainComponent { 

    
    private click = sound.create("~/raw/sao_click.mp3");



    btnPlay(){
        console.log("Button play");
        this.click.play();

    }
 
}