"use strict";
var core_1 = require("@angular/core");
var sound = require("nativescript-sound");
var MainComponent = (function () {
    function MainComponent() {
        this.click = sound.create("~/raw/sao_click.mp3");
    }
    MainComponent.prototype.btnPlay = function () {
        console.log("Button play");
        this.click.play();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUUxQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU0xQyxJQUFhLGFBQWE7SUFKMUI7UUFPWSxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBVXhELENBQUM7SUFORywrQkFBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGlCQUFpQjtLQUNqQyxDQUFDO0dBQ1csYUFBYSxDQWF6QjtBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbnZhciBzb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbWFpbi5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHsgXHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIGNsaWNrID0gc291bmQuY3JlYXRlKFwifi9yYXcvc2FvX2NsaWNrLm1wM1wiKTtcclxuXHJcblxyXG5cclxuICAgIGJ0blBsYXkoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBwbGF5XCIpO1xyXG4gICAgICAgIHRoaXMuY2xpY2sucGxheSgpO1xyXG5cclxuICAgIH1cclxuIFxyXG59Il19