
const json = document.getElementById("json");
const xml = document.getElementById("xml");
const up = document.getElementById("upgrade");
const trans = document.getElementById("translate");
// const js =document.getElementById('js');
up.addEventListener('click', upgrade, true);
trans.addEventListener('click',printXML, true);
// js.addEventListener('click', printJS, true);
function upgrade() {
    json.value="";
    xml.value="";
    return null;
};
function printXML() {
   let jsonObj= json.value;
    // if (typeof JSON.parse(jsonObj) != "object"||JSON.parse(jsonObj)===false){
    //     xml.value = "this text is not Json";
    //     return;
    // }
    xml.value=JsonToXML(JSON.parse(jsonObj));
 };
// function printJS() {
//     let jsonObj= json.value;
//     xml.value = JSON.parse(jsonObj);
// }
function JsonToXML(jsonObj) {
           var xml = '';
    for (var prop in jsonObj) {
        xml += "<" + prop + ">";
        if(Array.isArray(jsonObj[prop])) {
            for (var array of jsonObj[prop]) {

                xml += "</" + prop + ">";
                xml += "<" + prop + ">";

                xml += JsonToXML(new Object(array));
            }
        } else if (typeof jsonObj[prop] == "object") {
            xml += JsonToXML(new Object(jsonObj[prop]));
        } else {
            xml += jsonObj[prop];
        }
        xml += "</" + prop + ">";
    }

    return xml
}
