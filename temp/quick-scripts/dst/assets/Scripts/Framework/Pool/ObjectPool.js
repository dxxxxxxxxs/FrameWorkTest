
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Pool/ObjectPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bfb2q7/D5NuKkrWySNZWGY', 'ObjectPool');
// Scripts/Framework/Pool/ObjectPool.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BundleManager_1 = require("../Bundle/BundleManager");
var SubPool_1 = require("./SubPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectPool = /** @class */ (function () {
    function ObjectPool() {
        this.pools = new Map();
    }
    ObjectPool_1 = ObjectPool;
    Object.defineProperty(ObjectPool, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ObjectPool_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 取出指定节点
     */
    ObjectPool.prototype.Spawn = function (name, parent) {
        var pool = null;
        if (!this.pools.has(name)) {
            this.RegisterNew(name, parent);
        }
        pool = this.pools.get(name);
        return pool.Spawn();
    };
    /**
     * 新建一个对象池
     * @param name 对象池名字
     * @param parent 对象池所在位置
     */
    ObjectPool.prototype.RegisterNew = function (name, parent) {
        var _this = this;
        BundleManager_1.default.bundleMap.get("ObjectPool").load(name, function (err, node) {
            if (err) {
                console.error(err);
                return;
            }
            else {
                var pool = new SubPool_1.default(node, parent);
                _this.pools.set(pool.poolName, pool);
            }
        });
    };
    var ObjectPool_1;
    ObjectPool = ObjectPool_1 = __decorate([
        ccclass
    ], ObjectPool);
    return ObjectPool;
}());
exports.default = ObjectPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9Qb29sL09iamVjdFBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQUV0Rix5REFBb0Q7QUFFcEQscUNBQWdDO0FBRTFCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBVUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksR0FBRyxFQUFrQixDQUFDO0lBQ3pDLENBQUM7bUJBWmdCLFVBQVU7SUFFM0Isc0JBQWtCLHNCQUFRO2FBQTFCO1lBRUksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksRUFDdkI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLFlBQVUsRUFBRSxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBdUIsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQU9EOztPQUVHO0lBQ0ksMEJBQUssR0FBWixVQUFhLElBQVcsRUFBQyxNQUFjO1FBRW5DLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQztRQUN0QixJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQ3hCO1lBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7UUFDRCxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxnQ0FBVyxHQUFYLFVBQVksSUFBVyxFQUFDLE1BQWM7UUFBdEMsaUJBY0M7UUFaRyx1QkFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxVQUFDLEdBQVMsRUFBQyxJQUFjO1lBQ3pFLElBQUcsR0FBRyxFQUNOO2dCQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLE9BQU87YUFDVjtpQkFFRDtnQkFDSSxJQUFJLElBQUksR0FBQyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQWhEZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWlEOUI7SUFBRCxpQkFBQztDQWpERCxBQWlEQyxJQUFBO2tCQWpEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi4vQnVuZGxlL0J1bmRsZU1hbmFnZXJcIjtcbmltcG9ydCBJUmVzdWx0QWJsZSBmcm9tIFwiLi9JUmVzdWx0QWJsZVwiO1xuaW1wb3J0IFN1YlBvb2wgZnJvbSBcIi4vU3ViUG9vbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFBvb2wge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpPYmplY3RQb29sO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuX2luc3RhbmNlPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZT1uZXcgT2JqZWN0UG9vbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSBhcyBPYmplY3RQb29sO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucG9vbHM9bmV3IE1hcDxzdHJpbmcsU3ViUG9vbD4oKTtcbiAgICB9XG4gICAgLy/lr7nosaHmsaBcbiAgICBwcml2YXRlIHBvb2xzOk1hcDxzdHJpbmcsU3ViUG9vbD47XG5cbiAgICAvKipcbiAgICAgKiDlj5blh7rmjIflrproioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgU3Bhd24obmFtZTpzdHJpbmcscGFyZW50OmNjLk5vZGUpOmNjLk5vZGVcbiAgICB7XG4gICAgICAgIGxldCBwb29sOlN1YlBvb2w9bnVsbDtcbiAgICAgICAgaWYoIXRoaXMucG9vbHMuaGFzKG5hbWUpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLlJlZ2lzdGVyTmV3KG5hbWUscGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBwb29sPXRoaXMucG9vbHMuZ2V0KG5hbWUpO1xuICAgICAgICByZXR1cm4gcG9vbC5TcGF3bigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlrDlu7rkuIDkuKrlr7nosaHmsaBcbiAgICAgKiBAcGFyYW0gbmFtZSDlr7nosaHmsaDlkI3lrZdcbiAgICAgKiBAcGFyYW0gcGFyZW50IOWvueixoeaxoOaJgOWcqOS9jee9rlxuICAgICAqL1xuICAgIFJlZ2lzdGVyTmV3KG5hbWU6c3RyaW5nLHBhcmVudDpjYy5Ob2RlKVxuICAgIHtcbiAgICAgICAgQnVuZGxlTWFuYWdlci5idW5kbGVNYXAuZ2V0KFwiT2JqZWN0UG9vbFwiKS5sb2FkKG5hbWUsKGVycjpFcnJvcixub2RlOmNjLlByZWZhYik9PntcbiAgICAgICAgICAgIGlmKGVycilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBwb29sPW5ldyBTdWJQb29sKG5vZGUscGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xzLnNldChwb29sLnBvb2xOYW1lLHBvb2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=