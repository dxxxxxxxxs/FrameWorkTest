
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
        var share = Game_1.default.ObjectPool.get("share");
        share.setParent(this.node);
        share.setPosition(360, 640);
        console.log(share.getPosition());
        this.initBundle();
    };
    UI.prototype.initBundle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var audioNode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2REFBd0Q7QUFDeEQsc0VBQWlFO0FBQ2pFLDZDQUF3QztBQUN4Qyx5REFBb0Q7QUFDcEQsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQywwQ0FBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7O0lBdUZBLENBQUM7SUF0RkcsbUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxJQUFJLEtBQUssR0FBQyxjQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ1ksdUJBQVUsR0FBdkI7Ozs7Ozt3QkFFUSxTQUFTLEdBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzVCLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN2QyxTQUFTLENB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Q0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbkosSUFBRyxpQkFBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFDL0I7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO2FBRUQ7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUMsRUFBRSxDQUFDO1lBQ3BJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ1Msc0JBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQXRGZ0IsRUFBRTtRQUR0QixPQUFPO09BQ2EsRUFBRSxDQXVGdEI7SUFBRCxTQUFDO0NBdkZELEFBdUZDLENBdkYrQixFQUFFLENBQUMsU0FBUyxHQXVGM0M7a0JBdkZvQixFQUFFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBBdWRpb1Jvb3QgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb1Jvb3RcIjtcbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvQnVuZGxlL0J1bmRsZU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2FtZVwiO1xuaW1wb3J0IENDVG9vbHMgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9Ub29scy9DQ1Rvb2xzXCI7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9HYW1lQ29uc3RcIjtcbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4uL01vZGVsL0dhbWVNb2RlbFwiO1xuaW1wb3J0IHsgUldJbmZvIH0gZnJvbSBcIi4uL01vZGVsL1JXSW5mb1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XG5cbiAgICAgICAgbGV0IHNoYXJlPUdhbWUuT2JqZWN0UG9vbC5nZXQoXCJzaGFyZVwiKTtcbiAgICAgICAgc2hhcmUuc2V0UGFyZW50KHRoaXMubm9kZSk7XG4gICAgICAgIHNoYXJlLnNldFBvc2l0aW9uKDM2MCw2NDApO1xuICAgICAgICBjb25zb2xlLmxvZyhzaGFyZS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBpbml0QnVuZGxlKClcbiAgICB7XG4gICAgICAgIGxldCBhdWRpb05vZGU9bmV3IGNjLk5vZGUoKTtcbiAgICAgICAgYXVkaW9Ob2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XG4gICAgICAgIGF1ZGlvTm9kZS5hZGRDb21wb25lbnQoQXVkaW9Sb290KTtcbiAgICAgICAgLy9hd2FpdCBCdW5kbGVNYW5hZ2VyLmxvYWRCdW5kbGUoXCJQcmVmYWJcIik7XG4gICAgICAgIGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZEJ1bmRsZShcIkF1ZGlvXCIpO1xuICAgICAgICAvLyBsZXQgUHJlZmFiPWF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KFwiR2FtZVJXUGFuZWxcIixcIlByZWZhYlwiKTtcbiAgICAgICAgLy8gbGV0IG5vZGU9Y2MuaW5zdGFudGlhdGUoUHJlZmFiKTtcbiAgICAgICAgLy8gbm9kZS5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBhZGRFdmVudCgpXG4gICAge1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0dhbWVPdmVyLHRoaXMuR2FtZU92ZXIsdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KClcbiAgICB7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2FtZU92ZXIsdGhpcy5HYW1lT3Zlcix0aGlzKTtcbiAgICB9XG4gICAgR2FtZVN0YXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuR2FtZVN0YXJ0KTtcbiAgICB9XG4gICAgR2FtZU92ZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiR2FtZU92ZXJQYW5lbFwiKS5hY3RpdmU9dHJ1ZTtcbiAgICB9XG4gICAgaW5pdFVJKClcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgdGhpcy5pbml0UldJbmZvcygpO1xuICAgIH1cbiAgICBpbml0UldJbmZvcygpXG4gICAge1xuICAgICAgICBsZXQgbW9uZXk9MTAwO1xuICAgICAgICBmb3IobGV0IGk9MDtpPDEwO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0YXRlPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgICAgIGxldCBydz1uZXcgUldJbmZvKHN0YXRlLG51bGwsMC4yLFwi5Lu75YqhXCIraSxtb25leSk7XG4gICAgICAgICAgICBHYW1lTW9kZWwuUldJbmZvcy5wdXNoKHJ3KTtcbiAgICAgICAgICAgIG1vbmV5Kz0xMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUldJbmZvcygpXG4gICAge1xuXG4gICAgfVxuICAgIHVwZGF0ZVVJKClcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlTXVzaWMoKTtcbiAgICB9XG4gICAgdXBkYXRlTXVzaWMoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmlLnlj5jpnZnpn7NcIik7XG4gICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX1VwZGF0ZU11c2ljKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiR2FtZVN0YXJ0UGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NdXNpY1wiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bk11c2ljT25cIikuYWN0aXZlPUdhbWVNb2RlbC5pc011c2ljO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lU3RhcnRQYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bk11c2ljXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuTXVzaWNPZmZcIikuYWN0aXZlPSFHYW1lTW9kZWwuaXNNdXNpYztcbiAgICB9XG4gICAgSW5wdXRFbWFpbEVudGVyKClcbiAgICB7XG4gICAgICAgIGxldCBzdHJpbmc6c3RyaW5nPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiSW5wdXRFbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xuICAgICAgICBpZihDQ1Rvb2xzLmlzVmFsaWRFbWFpbChzdHJpbmcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWPkemAgemCruS7tuaIkOWKn1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiSW5wdXRFbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPVwiXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUmeivr+mCrueuseagvOW8j1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfVxufVxuXG4iXX0=