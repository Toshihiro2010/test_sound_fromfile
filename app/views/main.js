"use strict";
var core_1 = require("@angular/core");
var fs = require("file-system");
var sound = require("nativescript-sound");
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.btnPlay = function () {
        console.log("Button play");
        this.click.play();
    };
    MainComponent.prototype.ngOnInit = function () {
        var self = this;
        console.log("---------------------ngOnInit--------------------");
        var documents = fs.knownFolders.documents();
        var temp = documents.getFolder("mySound");
        console.log("temp => ", JSON.stringify(temp));
        //let temp_path = folder.path + "/mySound/link_start.mp3";
        var temp_path = temp.path + "/link_start.mp3";
        self.click = sound.create(temp_path);
    };
    MainComponent.prototype.test = function () {
        console.log("test");
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "views/main.html",
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRDtBQUNuRCxnQ0FBa0M7QUFFbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFNMUMsSUFBYSxhQUFhO0lBQTFCO0lBK0JBLENBQUM7SUF4QkcsK0JBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV0QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDakUsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvQywwREFBMEQ7UUFDMUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFHTCxvQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGlCQUFpQjtLQUNqQyxDQUFDO0dBQ1csYUFBYSxDQStCekI7QUEvQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcclxuXHJcbnZhciBzb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbWFpbi5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcblxyXG4gICAgXHJcbiAgICAvL3ByaXZhdGUgY2xpY2sgPSBzb3VuZC5jcmVhdGUoXCJ+L3Jhdy9zYW9fY2xpY2subXAzXCIpO1xyXG4gICAgcHJpdmF0ZSBjbGljaztcclxuXHJcblxyXG4gICAgYnRuUGxheSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHBsYXlcIik7XHJcbiAgICAgICAgdGhpcy5jbGljay5wbGF5KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tbmdPbkluaXQtLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICBsZXQgZG9jdW1lbnRzID0gZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xyXG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnRzLmdldEZvbGRlcihcIm15U291bmRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZW1wID0+IFwiICwgSlNPTi5zdHJpbmdpZnkodGVtcCkpO1xyXG4gICAgICAgIC8vbGV0IHRlbXBfcGF0aCA9IGZvbGRlci5wYXRoICsgXCIvbXlTb3VuZC9saW5rX3N0YXJ0Lm1wM1wiO1xyXG4gICAgICAgIGxldCB0ZW1wX3BhdGggPSB0ZW1wLnBhdGggKyBcIi9saW5rX3N0YXJ0Lm1wM1wiO1xyXG4gICAgICAgIHNlbGYuY2xpY2sgPSBzb3VuZC5jcmVhdGUodGVtcF9wYXRoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGVzdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcclxuICAgIH1cclxuXHJcbiBcclxufSJdfQ==