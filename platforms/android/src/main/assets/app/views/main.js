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
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "views/main.html",
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRDtBQUNuRCxnQ0FBa0M7QUFFbEMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFNMUMsSUFBYSxhQUFhO0lBQTFCO0lBMkJBLENBQUM7SUFwQkcsK0JBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV0QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDakUsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvQywwREFBMEQ7UUFDMUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUdMLG9CQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxhQUFhO0lBSnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsaUJBQWlCO0tBQ2pDLENBQUM7R0FDVyxhQUFhLENBMkJ6QjtBQTNCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xyXG5cclxudmFyIHNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZFwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9tYWluLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyBcclxuXHJcbiAgICBcclxuICAgIC8vcHJpdmF0ZSBjbGljayA9IHNvdW5kLmNyZWF0ZShcIn4vcmF3L3Nhb19jbGljay5tcDNcIik7XHJcbiAgICBwcml2YXRlIGNsaWNrO1xyXG5cclxuXHJcbiAgICBidG5QbGF5KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gcGxheVwiKTtcclxuICAgICAgICB0aGlzLmNsaWNrLnBsYXkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS1uZ09uSW5pdC0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIGxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudHMuZ2V0Rm9sZGVyKFwibXlTb3VuZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlbXAgPT4gXCIgLCBKU09OLnN0cmluZ2lmeSh0ZW1wKSk7XHJcbiAgICAgICAgLy9sZXQgdGVtcF9wYXRoID0gZm9sZGVyLnBhdGggKyBcIi9teVNvdW5kL2xpbmtfc3RhcnQubXAzXCI7XHJcbiAgICAgICAgbGV0IHRlbXBfcGF0aCA9IHRlbXAucGF0aCArIFwiL2xpbmtfc3RhcnQubXAzXCI7XHJcbiAgICAgICAgc2VsZi5jbGljayA9IHNvdW5kLmNyZWF0ZSh0ZW1wX3BhdGgpO1xyXG5cclxuICAgIH1cclxuXHJcbiBcclxufSJdfQ==