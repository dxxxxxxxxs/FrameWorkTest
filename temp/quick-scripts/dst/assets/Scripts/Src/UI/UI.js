
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39ae51oH/NGc7pKgBSh6txq', 'UI');
// Scripts/Src/UI/UI.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AudioRoot_1 = require("../../Framework/Audio/AudioRoot");
var BundleManager_1 = require("../../Framework/Bundle/BundleManager");
var Game_1 = require("../../Framework/Game");
var CCTools_1 = require("../../Framework/Tools/CCTools");
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../Model/GameModel");
var RWInfo_1 = require("../Model/RWInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI.prototype.onLoad = function () {
        this.addEvent();
        this.initUI();
        this.initBundle();
    };
    UI.prototype.initBundle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var audioNode, share;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        audioNode = new cc.Node();
                        audioNode.addComponent(cc.AudioSource);
                        audioNode.addComponent(AudioRoot_1.default);
                        //await BundleManager.loadBundle("Prefab");
                        return [4 /*yield*/, BundleManager_1.default.loadBundle("Audio")];
                    case 1:
                        //await BundleManager.loadBundle("Prefab");
                        _a.sent();
                        return [4 /*yield*/, BundleManager_1.default.loadBundle("ObjectPool")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("share", this.node)];
                    case 3:
                        share = _a.sent();
                        share.setPosition(360, 640);
                        console.log(share.getPosition());
                        return [2 /*return*/];
                }
            });
        });
    };
    UI.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_GameOver, this.GameOver, this);
    };
    UI.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_GameOver, this.GameOver, this);
    };
    UI.prototype.GameStart = function () {
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").active = false;
        Game_1.default.Event.dispatch(GameConst_1.default.GameStart);
    };
    UI.prototype.GameOver = function () {
        this.node.getChildByName("Canvas").getChildByName("GameOverPanel").active = true;
    };
    UI.prototype.initUI = function () {
        this.updateUI();
        this.initRWInfos();
    };
    UI.prototype.initRWInfos = function () {
        var money = 100;
        for (var i = 0; i < 10; i++) {
            var state = Math.floor(Math.random() * 2);
            var rw = new RWInfo_1.RWInfo(state, null, 0.2, "任务" + i, money);
            GameModel_1.default.RWInfos.push(rw);
            money += 100;
        }
    };
    UI.prototype.updateRWInfos = function () {
    };
    UI.prototype.updateUI = function () {
        this.updateMusic();
    };
    UI.prototype.updateMusic = function () {
        console.log("改变静音");
        Game_1.default.Event.dispatch(GameConst_1.default.UI_UpdateMusic);
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("btnMusic").getChildByName("btnMusicOn").active = GameModel_1.default.isMusic;
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("btnMusic").getChildByName("btnMusicOff").active = !GameModel_1.default.isMusic;
    };
    UI.prototype.InputEmailEnter = function () {
        var string = this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("InputEmail").getComponent(cc.EditBox).string;
        if (CCTools_1.default.isValidEmail(string)) {
            console.log("发送邮件成功");
        }
        else {
            this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("InputEmail").getComponent(cc.EditBox).string = "";
            console.log("错误邮箱格式");
        }
    };
    UI.prototype.onDestroy = function () {
        this.removeEvent();
    };
    UI = __decorate([
        ccclass
    ], UI);
    return UI;
}(cc.Component));
exports.default = UI;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2REFBd0Q7QUFDeEQsc0VBQWlFO0FBQ2pFLDZDQUF3QztBQUN4Qyx5REFBb0Q7QUFDcEQsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQywwQ0FBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7O0lBc0ZBLENBQUM7SUFyRkcsbUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNZLHVCQUFVLEdBQXZCOzs7Ozs7d0JBRVEsU0FBUyxHQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUM1QixTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDdkMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7d0JBQ2xDLDJDQUEyQzt3QkFDM0MscUJBQU0sdUJBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUR2QywyQ0FBMkM7d0JBQzNDLFNBQXVDLENBQUM7d0JBQ3hDLHFCQUFNLHVCQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBNUMsU0FBNEMsQ0FBQzt3QkFDbkMscUJBQU0sY0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXBELEtBQUssR0FBQyxTQUE4Qzt3QkFDeEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Ozs7O0tBS3BDO0lBQ0QscUJBQVEsR0FBUjtRQUVJLGNBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0Qsd0JBQVcsR0FBWDtRQUVJLGNBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsbUJBQVMsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0Qsc0JBQVMsR0FBVDtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDakYsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QscUJBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO0lBQ25GLENBQUM7SUFDRCxtQkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0Qsd0JBQVcsR0FBWDtRQUVJLElBQUksS0FBSyxHQUFDLEdBQUcsQ0FBQztRQUNkLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQ3BCO1lBQ0ksSUFBSSxLQUFLLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxFQUFFLEdBQUMsSUFBSSxlQUFNLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsSUFBSSxHQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0IsS0FBSyxJQUFFLEdBQUcsQ0FBQztTQUNkO0lBQ0wsQ0FBQztJQUNELDBCQUFhLEdBQWI7SUFHQSxDQUFDO0lBQ0QscUJBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0Qsd0JBQVcsR0FBWDtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQztRQUNySixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLG1CQUFTLENBQUMsT0FBTyxDQUFDO0lBQzNKLENBQUM7SUFDRCw0QkFBZSxHQUFmO1FBRUksSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ25KLElBQUcsaUJBQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQy9CO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjthQUVEO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQztZQUNwSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUNTLHNCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFyRmdCLEVBQUU7UUFEdEIsT0FBTztPQUNhLEVBQUUsQ0FzRnRCO0lBQUQsU0FBQztDQXRGRCxBQXNGQyxDQXRGK0IsRUFBRSxDQUFDLFNBQVMsR0FzRjNDO2tCQXRGb0IsRUFBRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQXVkaW9Sb290IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvQXVkaW8vQXVkaW9Sb290XCI7XG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL0dhbWVcIjtcbmltcG9ydCBDQ1Rvb2xzIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvVG9vbHMvQ0NUb29sc1wiO1xuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vR2FtZUNvbnN0XCI7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gXCIuLi9Nb2RlbC9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IFJXSW5mbyB9IGZyb20gXCIuLi9Nb2RlbC9SV0luZm9cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgICAgICB0aGlzLmluaXRVSSgpO1xuICAgICAgICB0aGlzLmluaXRCdW5kbGUoKTtcbiAgICB9XG4gICAgcHVibGljIGFzeW5jIGluaXRCdW5kbGUoKVxuICAgIHtcbiAgICAgICAgbGV0IGF1ZGlvTm9kZT1uZXcgY2MuTm9kZSgpO1xuICAgICAgICBhdWRpb05vZGUuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcbiAgICAgICAgYXVkaW9Ob2RlLmFkZENvbXBvbmVudChBdWRpb1Jvb3QpO1xuICAgICAgICAvL2F3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZEJ1bmRsZShcIlByZWZhYlwiKTtcbiAgICAgICAgYXdhaXQgQnVuZGxlTWFuYWdlci5sb2FkQnVuZGxlKFwiQXVkaW9cIik7XG4gICAgICAgIGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZEJ1bmRsZShcIk9iamVjdFBvb2xcIik7XG4gICAgICAgIGxldCBzaGFyZT1hd2FpdCBHYW1lLk9iamVjdFBvb2wuU3Bhd24oXCJzaGFyZVwiLHRoaXMubm9kZSk7XG4gICAgICAgIHNoYXJlLnNldFBvc2l0aW9uKDM2MCw2NDApO1xuICAgICAgICBjb25zb2xlLmxvZyhzaGFyZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgLy8gbGV0IFByZWZhYj1hd2FpdCBCdW5kbGVNYW5hZ2VyLmxvYWQ8Y2MuUHJlZmFiPihcIkdhbWVSV1BhbmVsXCIsXCJQcmVmYWJcIik7XG4gICAgICAgIC8vIGxldCBub2RlPWNjLmluc3RhbnRpYXRlKFByZWZhYik7XG4gICAgICAgIC8vIG5vZGUuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpO1xuICAgICAgICBcbiAgICB9XG4gICAgYWRkRXZlbnQoKVxuICAgIHtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9HYW1lT3Zlcix0aGlzLkdhbWVPdmVyLHRoaXMpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudCgpXG4gICAge1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0dhbWVPdmVyLHRoaXMuR2FtZU92ZXIsdGhpcyk7XG4gICAgfVxuICAgIEdhbWVTdGFydCgpXG4gICAge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lU3RhcnRQYW5lbFwiKS5hY3RpdmU9ZmFsc2U7XG4gICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LkdhbWVTdGFydCk7XG4gICAgfVxuICAgIEdhbWVPdmVyKClcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVPdmVyUGFuZWxcIikuYWN0aXZlPXRydWU7XG4gICAgfVxuICAgIGluaXRVSSgpXG4gICAge1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIHRoaXMuaW5pdFJXSW5mb3MoKTtcbiAgICB9XG4gICAgaW5pdFJXSW5mb3MoKVxuICAgIHtcbiAgICAgICAgbGV0IG1vbmV5PTEwMDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTwxMDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdGF0ZT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7XG4gICAgICAgICAgICBsZXQgcnc9bmV3IFJXSW5mbyhzdGF0ZSxudWxsLDAuMixcIuS7u+WKoVwiK2ksbW9uZXkpO1xuICAgICAgICAgICAgR2FtZU1vZGVsLlJXSW5mb3MucHVzaChydyk7XG4gICAgICAgICAgICBtb25leSs9MTAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVJXSW5mb3MoKVxuICAgIHtcblxuICAgIH1cbiAgICB1cGRhdGVVSSgpXG4gICAge1xuICAgICAgICB0aGlzLnVwZGF0ZU11c2ljKCk7XG4gICAgfVxuICAgIHVwZGF0ZU11c2ljKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pS55Y+Y6Z2Z6Z+zXCIpO1xuICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5VSV9VcGRhdGVNdXNpYyk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuTXVzaWNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NdXNpY09uXCIpLmFjdGl2ZT1HYW1lTW9kZWwuaXNNdXNpYztcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiR2FtZVN0YXJ0UGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NdXNpY1wiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bk11c2ljT2ZmXCIpLmFjdGl2ZT0hR2FtZU1vZGVsLmlzTXVzaWM7XG4gICAgfVxuICAgIElucHV0RW1haWxFbnRlcigpXG4gICAge1xuICAgICAgICBsZXQgc3RyaW5nOnN0cmluZz10aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lU3RhcnRQYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcIklucHV0RW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgaWYoQ0NUb29scy5pc1ZhbGlkRW1haWwoc3RyaW5nKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj5HpgIHpgq7ku7bmiJDlip9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lU3RhcnRQYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcIklucHV0RW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZz1cIlwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLplJnor6/pgq7nrrHmoLzlvI9cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH1cbn1cblxuIl19