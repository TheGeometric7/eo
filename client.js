/*hammerhead|script|start*/if (typeof window !== 'undefined' && window){window['hammerhead|process-dom-method'] && window['hammerhead|process-dom-method']();if (window.__get$ && typeof __get$ === 'undefined')var __get$Loc = window.__get$Loc,__set$Loc = window.__set$Loc,__set$ = window.__set$,__get$ = window.__get$,__call$ = window.__call$,__get$Eval = window.__get$Eval,__proc$Script = window.__proc$Script,__proc$Html = window.__proc$Html,__get$PostMessage = window.__get$PostMessage,__get$ProxyUrl = window.__get$ProxyUrl,__rest$Array = window.__rest$Array,__rest$Object = window.__rest$Object,__arrayFrom$ = window.__arrayFrom$;} else {if (typeof __get$ === 'undefined')var __get$Loc = function(l){return l},__set$Loc = function(l,v){return l = v},__set$ = function(o,p,v){return o[p] = v},__get$ = function(o,p){return o[p]},__call$ = function(o,p,a){return o[p].apply(o,a)},__get$Eval = function(e){return e},__proc$Script = function(s){return s},__proc$Html = function(h){return h},__get$PostMessage = function(w,p){return arguments.length===1?w.postMessage:p},__get$ProxyUrl = function(u,d){return u},__rest$Array = function(a,i){return Array.prototype.slice.call(a, i)},__rest$Object = function(o,p){var k=Object.keys(o),n={};for(var i=0;i<k.length;++i)if(p.indexOf(k[i])<0)n[k[i]]=o[k[i]];return n},__arrayFrom$ = function(r){if(!r)return r;return!Array.isArray(r)&&"function"==typeof r[Symbol.iterator]?Array.from(r):r};if (typeof importScripts !== "undefined" && /\[native code]/g.test(importScripts.toString())) {var __getWorkerSettings$ = function () {return null};importScripts((location.origin || (location.protocol + "//" + location.host)) + "/worker-hammerhead.js");}}/*hammerhead|script|processing-header-end*/
const jsonUrl = "http://localhost:5500/assets/map/characters/spine/zombieTruckPurple.json?action=raw";
const atlasUrl = "http://localhost:5500/assets/map/characters/spine/zombieTruckPurple.atlas";
const textureUrl = "http://localhost:5500/assets/map/characters/spine/zombieTruckPurple-v2.3.png";

window.gimInfo = {
    jsonUrl,
    atlasUrl,
    textureUrl,
    skin: "zombieTruckPurple",
    scaleDivide: 350
};

var r = parcelRequire388b("izFtx")
, s = parcelRequire388b("dxPgL")
, o = parcelRequire388b("jO5jv")
, c = parcelRequire388b("8PXSb")
, l = parcelRequire388b("frToy")
, d = parcelRequire388b("kByZW")
, h = parcelRequire388b("4GyTs");

let u = null;
let game = null;

u || (u = document.createElement("div"),
u.id = "character-preview-div");
const i = document.getElementById("character-preview-container");
i.style.width = "100%"
u.style.width = "100%";
u.style.height = "min(90vw, 260px)";
i && u && !i.contains(u) && i.appendChild(u),
(0,
d.FixSpinePlugin)(),
(0,
h.FixPhaserBootProcess)(),
window.SPINE_GAME_OBJECT_TYPE = "spinePreview",
game || (game = new Phaser.Game({
    ...o.CharacterPreviewPhaserConfig,
    parent: u
}))
game.onError = () => {
    null == game || game.destroy(!0),
    game = null
}
game.skin = window.gimInfo.skin;
game.editStyles = {};
null == game || game.scene.remove("CharacterScene")
null == game || game.scene.add("CharacterScene", l.CharacterScene, !0)

// add the animation controls
const animationControls = document.createElement("div");
animationControls.classList.add("animation-controls");

let animations = {
    "idle": "Idle",
    "run": "Run",
    "jump": "Jump"
}

let active = "idle";

for(let id in animations) {
    let button = document.createElement("button");
    button.textContent =  __get$(animations,id) ;
    if(id == active) button.classList.add("active");

    button.addEventListener("click", () => {
        if(active == id) return;

        let char = game.scene.scenes[0]?.character;
        if(!char) return;
        char.spine.animationState.setAnimation(3, id, true);

        active = id;
        animationControls.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        button.classList.add("active");
    });

    animationControls.appendChild(button);
}

i.appendChild(animationControls);

window.onJsonLoaded = (json) => {
    if(!json?.style?.categories) return;

    // add the editStyles controls
    const editStyles = document.createElement("div");
    editStyles.classList.add("edit-styles");

    for(let category of json.style.categories) {
        const row = document.createElement("div");
        row.classList.add("style");

        const text = document.createElement("span");
        text.innerText = category.name;
        row.appendChild(text);

        const select = document.createElement("select");
        select.style.backgroundColor = category.options[0].preview.color;

        select.addEventListener("change", (e) => {
            let option = category.options.find(o => o.name == e.target.value);
            if(!option) return;
            
            select.style.backgroundColor = option.preview.color;

            let scene = game.scene.scenes[0];
            if(!scene) return;
             __set$(scene.editStyles,category.name,option.name) ;

            scene.character.editStyles.apply();
        });

        for(let option of category.options) {
            let color = option.preview.color;
            if(!color) continue;

            const optionEl = document.createElement("option");
            optionEl.classList.add("style-option");
            optionEl.style.backgroundColor = color;
            optionEl.value = option.name;
            optionEl.innerText = option.name;

            select.appendChild(optionEl);
        }
        row.appendChild(select);
        editStyles.appendChild(row);
    }

    i.appendChild(editStyles);
}
/*hammerhead|script|end*/