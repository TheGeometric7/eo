/*hammerhead|script|start*/if (typeof window !== 'undefined' && window){window['hammerhead|process-dom-method'] && window['hammerhead|process-dom-method']();if (window.__get$ && typeof __get$ === 'undefined')var __get$Loc = window.__get$Loc,__set$Loc = window.__set$Loc,__set$ = window.__set$,__get$ = window.__get$,__call$ = window.__call$,__get$Eval = window.__get$Eval,__proc$Script = window.__proc$Script,__proc$Html = window.__proc$Html,__get$PostMessage = window.__get$PostMessage,__get$ProxyUrl = window.__get$ProxyUrl,__rest$Array = window.__rest$Array,__rest$Object = window.__rest$Object,__arrayFrom$ = window.__arrayFrom$;} else {if (typeof __get$ === 'undefined')var __get$Loc = function(l){return l},__set$Loc = function(l,v){return l = v},__set$ = function(o,p,v){return o[p] = v},__get$ = function(o,p){return o[p]},__call$ = function(o,p,a){return o[p].apply(o,a)},__get$Eval = function(e){return e},__proc$Script = function(s){return s},__proc$Html = function(h){return h},__get$PostMessage = function(w,p){return arguments.length===1?w.postMessage:p},__get$ProxyUrl = function(u,d){return u},__rest$Array = function(a,i){return Array.prototype.slice.call(a, i)},__rest$Object = function(o,p){var k=Object.keys(o),n={};for(var i=0;i<k.length;++i)if(p.indexOf(k[i])<0)n[k[i]]=o[k[i]];return n},__arrayFrom$ = function(r){if(!r)return r;return!Array.isArray(r)&&"function"==typeof r[Symbol.iterator]?Array.from(r):r};if (typeof importScripts !== "undefined" && /\[native code]/g.test(importScripts.toString())) {var __getWorkerSettings$ = function () {return null};importScripts((location.origin || (location.protocol + "//" + location.host)) + "/worker-hammerhead.js");}}/*hammerhead|script|processing-header-end*/
function previewDefineExport(e, t, i, n) {
    Object.defineProperty(e, t, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
function defineExport(e) {
    return e && e.__esModule ? e.default : e
}
var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
i.register("jO5jv", (function(n, a) {
    previewDefineExport(n.exports, "CharacterPreviewPhaserConfig", (function() {
        return o
    }
    ));
    var r = i("bnPOO")
      , s = i("hdiW3");
    const o = {
        type: defineExport(r).WEBGL,
        roundPixels: !1,
        transparent: !0,
        plugins: {
            scene: [{
                key: "spine.SpinePlugin",
                plugin: s.SpinePlugin,
                mapping: "spine"
            }]
        },
        scale: {
            mode: defineExport(r).Scale.NONE,
            autoRound: !0
        },
        parent: "character-preview-div",
        scene: [],
        banner: !1,
        pipeline: {
            skipPipelinesAtBoot: !0
        }
    }
}
)),
i.register("frToy", (function(t, n) {
    previewDefineExport(t.exports, "CharacterScene", (function() {
        return l
    }
    ));
    var a = i("m0l4W")
      , r = i("3RlnR")
      , s = i("l6wF3")
      , o = i("5m5IN")
      , c = i("3RRWP");
    class l extends Phaser.Scene {
        preload() {
            (0,
            r.CharacterScenePreload)(this)
        }
        create() {
            const e = this.cache.json.get("data_compressed_" + this.skinId);
            if (!this.cache.json.get("data_" + this.skinId) && e) {
                const t = (0,
                o.decompress)(e);
                this.cache.json.add("data_" + this.skinId, t)
                window.onJsonLoaded?.(t);
            }
            try {
                this.character = new (0,
                c.CharacterSceneCharacter)(this)
            } catch (e) {
                this.game.onError && this.game.onError()
            }
            (0,
            s.CharacterSceneHandleResize)(this),
            this.resizeListener = () => {
                (0,
                s.CharacterSceneHandleResize)(this)
            }
            ,
            window.addEventListener("resize", this.resizeListener),
            this.events.on("destroy", ( () => {
                var e;
                null === (e = this.character) || void 0 === e || e.destroy(),
                window.removeEventListener("resize", this.resizeListener),
                this.resizeListener = void 0
            }
            ))
        }
        constructor(...e) {
            super(...e),
            (0,
            a.default)(this, "onError", null)
        }
    }
}
)),
i.register("3RlnR", (function(t, n) {
    previewDefineExport(t.exports, "CharacterScenePreload", (function() {
        return r
    }
    ));
    const r = e => {
        e.skinId = e.game.skin,
        e.editStyles = e.game.editStyles;
        const t = Math.random().toString();
        e.game.cache.json.exists("data_compressed_" + e.skinId) || (e.load.spineJson("data_compressed_" + e.skinId, window.gimInfo.jsonUrl),
        e.load.spineAtlas("atlas_" + e.skinId, window.gimInfo.atlasUrl))
    }
}
)),
i.register("l6wF3", (function(t, n) {
    previewDefineExport(t.exports, "CharacterSceneHandleResize", (function() {
        return r
    }
    ));
    var a = i("fhxnq");
    const r = e => {
        const t = document.getElementById("character-preview-div");
        if (!t)
            return;
        const i = t.clientWidth
          , n = t.clientHeight
          , r = 1
          , s = r * i
          , o = r * n
          , c = Math.min(s / i, o / n);
         const _hh$temp0=t.getBoundingClientRect(),height=_hh$temp0.height; 
        e.scale.resize(c * i, c * n);
        const l = 1 / c;
        e.game.canvas.style.transform = "scaleX(" + l + ") scaleY(" + l + ")",
        e.game.canvas.style.transformOrigin = "0 0",
        console.log(height / window.gimInfo.scaleDivide),
        e.cameras.main.setZoom(height / window.gimInfo.scaleDivide),
        (0,
        a.CharacterSceneCenterCameraOnCharacter)(e),
        e.scale.refresh()
    }
}
)),
i.register("fhxnq", (function(t, i) {
    previewDefineExport(t.exports, "CharacterSceneCenterCameraOnCharacter", (function() {
        return n
    }
    ));
    const n = e => {
        if (!e.character)
            return;
        const t = e.character.spine.displayWidth
          , i = e.character.spine.displayHeight
          , n = e.add.rectangle(0, 0, t, i, 16711680).setOrigin(e.character.spine.displayOriginX / t, e.character.spine.displayOriginY / i).setVisible(!1)
          , a = n.getBounds();
        n.destroy(),
        e.cameras.main.centerOn(a.centerX, a.centerY)
    }
}
)),
i.register("3RRWP", (function(t, n) {
    previewDefineExport(t.exports, "CharacterSceneCharacter", (function() {
        return c
    }
    ));
    var a = i("hdiW3")
      , r = i("fsxpp")
      , s = i("fhxnq")
      , o = i("f4YBY");
    class c {
        destroy() {
            this.animation.destroy()
        }
        constructor(e) {
            this.scene = e,
            this.skinId = e.skinId,
            this.editStyles = new (0,
            r.CharacterSceneCharacterEditStyles)(this),
            this.animation = new (0,
            o.CharacterSceneAnimation)(this),
            this.spine = e.add.spinePreview(0, 0, "data_" + this.skinId, "atlas_" + this.skinId, new (0,
            a.SkinsAndAnimationBoundsProvider)("idle",[this.skinId])),
            this.spine.skeleton.setSkinByName(this.skinId),
            this.editStyles.apply(),
            this.animation.onSkinChanged(),
            (0,
            s.CharacterSceneCenterCameraOnCharacter)(e),
            window.onGimLoaded?.()
        }
    }
}
)),
i.register("fsxpp", (function(t, n) {
    previewDefineExport(t.exports, "CharacterSceneCharacterEditStyles", (function() {
        return r
    }
    ));
    var a = i("m0l4W");
    class r {
        constructor(e) {
            (0,
            a.default)(this, "apply", ( () => {
                var e;
                const t = this.character.scene.cache.json.get("data_" + this.character.skinId)
                  , i = [];
                null == t || null === (e = t.style) || void 0 === e || e.categories.forEach((e => {
                    var t;
                    const n = null !== (t = e.options.find((t =>  __get$(this.character.scene.editStyles,e.name)  === t.name))) && void 0 !== t ? t : e.options[0];
                    i.push(...n.applications)
                }
                )),
                i.forEach((e => {
                    "color" === e.type && e.slotNames.forEach((t => {
                        const i = this.character.spine.skeleton.slots.find((e => {
                            var i;
                            return (null == e || null === (i = e.attachment) || void 0 === i ? void 0 : i.name) === t
                        }
                        ));
                        i && i.attachment.color.setFromString(e.color)
                    }
                    ))
                }
                ))
            }
            )),
            this.character = e
        }
    }
}
)),
i.register("f4YBY", (function(t, n) {
    previewDefineExport(t.exports, "CharacterSceneAnimation", (function() {
        return d
    }
    ));
    var a = i("m0l4W")
      , r = i("2Kvkw");
    const s = 0
      , o = 1
      , c = 2
      , l = 3;
    class d {
        constructor(e) {
            (0,
            a.default)(this, "skinChanged", !1),
            (0,
            a.default)(this, "availableAnimations", []),
            (0,
            a.default)(this, "currentBodyAnimation", r.CharacterBodyAnimationState.rest),
            (0,
            a.default)(this, "bodyAnimationLocked", !1),
            (0,
            a.default)(this, "bodyAnimationStartedAt", 0),
            (0,
            a.default)(this, "currentEyeAnimation", r.CharacterEyeAnimationState.idle),
            (0,
            a.default)(this, "lastGroundedAnimationAt", 0),
            (0,
            a.default)(this, "setupAnimations", ( () => {
                const e = this.character.spine;
                this.availableAnimations = e.skeleton.data.animations.map((e => e.name));
                const t = Object.values(r.default.body.animationNames);
                t.forEach((i => {
                    t.forEach((t => {
                        let n = r.default.body.transition.defaultDuration;
                        i === r.CharacterBodyAnimationState.jumpMiddleIdle && t === r.CharacterBodyAnimationState.jumpDownIdle && (n = r.default.body.transition.jumpFallingDuration),
                        e.animationStateData.setMix(i, t, n)
                    }
                    ))
                }
                )),
                this.playBodyAnimation(this.currentBodyAnimation),
                this.playEyeAnimation(this.currentEyeAnimation),
                this.availableAnimations.includes(`skins-${this.character.skinId}-common`) && this.character.spine.animationState.setAnimation(s, `skins-${this.character.skinId}-common`, !0),
                this.character.spine.animationState.addListener({
                    complete: e => {
                        this.onAnimationComplete(e)
                    }
                })
            }
            )),
            (0,
            a.default)(this, "playBodyAnimation", (e => {
                var t;
                if (e === this.currentBodyAnimation && !this.skinChanged)
                    return;
                if (this.bodyAnimationLocked && !this.skinChanged) {
                    var i, n, a;
                    const t = null !== (a = null === (i = r.default.animationLocks) || void 0 === i || null === (n =  __get$(i,this.currentBodyAnimation) ) || void 0 === n ? void 0 :  __get$(n,e) ) && void 0 !== a ? a : 0;
                    if (t) {
                        if (Date.now() < this.bodyAnimationStartedAt + t)
                            return
                    }
                }
                const s = !!(null === (t = r.default.animationLocks) || void 0 === t ? void 0 :  __get$(t,e) );
                this.bodyAnimationLocked = s,
                this.bodyAnimationStartedAt = Date.now(),
                e === r.CharacterBodyAnimationState.rest ? this.startBlinkAnimation() : this.stopBlinkAnimation(),
                this.currentBodyAnimation = e,
                this.character.spine.animationState.setAnimation(l,  __get$(r.default.body.animationNames,e) , r.default.bodyLoopedAnimations.includes(e)),
                this.playBodySupplementalAnimation(e)
            }
            )),
            (0,
            a.default)(this, "playEyeAnimation", (e => {
                (e !== this.currentEyeAnimation || this.skinChanged) && (this.currentEyeAnimation = e,
                this.character.spine.animationState.setAnimation(c,  __get$(r.default.eyes.animationNames,e) , !0))
            }
            )),
            (0,
            a.default)(this, "playBodySupplementalAnimation", (e => {
                const t =  __get$(r.default.body.animationNames,e) 
                  , i = "skins-" + this.character.skinId + "-" + t;
                this.availableAnimations.includes(i) ? this.character.spine.animationState.setAnimation(o, i, !0) : this.character.spine.animationState.clearTrack(o)
            }
            )),
            (0,
            a.default)(this, "startBlinkAnimation", ( () => {
                this.blinkTimer || (this.playEyeAnimation(r.CharacterEyeAnimationState.idle),
                this.blinkTimer = window.setTimeout(( () => {
                    this.blinkTimer = null,
                    this.playEyeAnimation(r.CharacterEyeAnimationState.blink)
                }
                ), r.default.eyes.blinkEvery))
            }
            )),
            (0,
            a.default)(this, "stopBlinkAnimation", ( () => {
                this.playEyeAnimation(r.CharacterEyeAnimationState.idle),
                this.blinkTimer && (window.clearTimeout(this.blinkTimer),
                this.blinkTimer = null)
            }
            )),
            (0,
            a.default)(this, "onAnimationComplete", (e => {
                e.trackIndex === c && this.currentBodyAnimation === r.CharacterBodyAnimationState.rest && this.currentEyeAnimation === r.CharacterEyeAnimationState.blink && this.startBlinkAnimation()
            }
            )),
            (0,
            a.default)(this, "toggleAnimation", ( () => {
                this.currentBodyAnimation === r.CharacterBodyAnimationState.rest ? this.playBodyAnimation(r.CharacterBodyAnimationState.run) : this.playBodyAnimation(r.CharacterBodyAnimationState.rest)
            }
            )),
            (0,
            a.default)(this, "onSkinChanged", ( () => {
                this.skinChanged = !0,
                this.setupAnimations(),
                this.skinChanged = !1
            }
            )),
            (0,
            a.default)(this, "destroy", ( () => {
                this.blinkTimer && (window.clearTimeout(this.blinkTimer),
                this.blinkTimer = null)
            }
            )),
            this.character = e
        }
    }
}
));
/*hammerhead|script|end*/