import { Component , OnInit } from "@angular/core";
import * as fs from "file-system";

var sound = require("nativescript-sound");

@Component({
    selector: "ns-app",
    templateUrl: "views/main.html",
})
export class MainComponent implements OnInit { 

    
    //private click = sound.create("~/raw/sao_click.mp3");
    private click;


    btnPlay(){
        console.log("Button play");
        this.click.play();

    }

    ngOnInit(){
        let self = this;
        console.log("---------------------ngOnInit--------------------");
        let documents = fs.knownFolders.documents();
        let temp = documents.getFolder("mySound");
        
        console.log("temp => " , JSON.stringify(temp));
        //let temp_path = folder.path + "/mySound/link_start.mp3";
        let temp_path = temp.path + "/link_start.mp3";
        self.click = sound.create(temp_path);

    }

    test(){
        console.log("test");
    }

 
}