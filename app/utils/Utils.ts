import * as imageSource from "tns-core-modules/image-source";

export class Utils {

    static getUid() : string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    static readImage(){
        var path = "~/icons/img-9.png";
        return imageSource.fromFile(path);
    }

    static generateBase64String(image){
        return image.toBase64String("png");
    }

    static generateImageFromBase64(base64){
        return imageSource.fromBase64(base64);
    }

}