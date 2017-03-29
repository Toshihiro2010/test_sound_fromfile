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
        var folderPath = fs.path.join(documents.path);
        var temp = documents.getFolder("mySound");
        var folder = fs.Folder.fromPath(folderPath);
        console.log(folder.path);
        var temp_path = folder.path + "/mySound/link_start.mp3";
        self.click = sound.create(temp_path);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRDtBQUNuRCxnQ0FBa0M7QUFFbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFNMUMsSUFBYSxhQUFhO0lBQTFCO0lBOEJBLENBQUM7SUF2QkcsK0JBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV0QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDakUsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUMsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU1QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFDO1FBRXhELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QyxDQUFDO0lBR0wsb0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxpQkFBaUI7S0FDakMsQ0FBQztHQUNXLGFBQWEsQ0E4QnpCO0FBOUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcblxyXG52YXIgc291bmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvdW5kXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL21haW4uaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7IFxyXG5cclxuICAgIFxyXG4gICAgLy9wcml2YXRlIGNsaWNrID0gc291bmQuY3JlYXRlKFwifi9yYXcvc2FvX2NsaWNrLm1wM1wiKTtcclxuICAgIHByaXZhdGUgY2xpY2s7XHJcblxyXG5cclxuICAgIGJ0blBsYXkoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBwbGF5XCIpO1xyXG4gICAgICAgIHRoaXMuY2xpY2sucGxheSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLW5nT25Jbml0LS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgbGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcclxuICAgICAgICBsZXQgZm9sZGVyUGF0aCA9IGZzLnBhdGguam9pbihkb2N1bWVudHMucGF0aCk7XHJcblxyXG4gICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnRzLmdldEZvbGRlcihcIm15U291bmRcIik7XHJcbiAgICAgICAgbGV0IGZvbGRlciA9IGZzLkZvbGRlci5mcm9tUGF0aChmb2xkZXJQYXRoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9sZGVyLnBhdGgpO1xyXG4gICAgICAgIGxldCB0ZW1wX3BhdGggPSBmb2xkZXIucGF0aCArIFwiL215U291bmQvbGlua19zdGFydC5tcDNcIjtcclxuXHJcbiAgICAgICAgc2VsZi5jbGljayA9IHNvdW5kLmNyZWF0ZSh0ZW1wX3BhdGgpO1xyXG5cclxuICAgIH1cclxuXHJcbiBcclxufSJdfQ==