// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../Bundle/BundleManager";
import IResultAble from "./IResultAble";
import SubPool from "./SubPool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ObjectPool {
    private static _instance:ObjectPool;
    public static get Instance()
    {
        if(this._instance==null)
        {
            this._instance=new ObjectPool();
        }
        return this._instance as ObjectPool;
    }
    private constructor(){
        this.pools=new Map<string,SubPool>();
    }
    //对象池
    private pools:Map<string,SubPool>;

    /**
     * 取出指定节点
     */
    public Spawn(name:string,parent:cc.Node):cc.Node
    {
        let pool:SubPool=null;
        if(!this.pools.has(name))
        {
            this.RegisterNew(name,parent);
        }
        pool=this.pools.get(name);
        return pool.Spawn();
    }
    /**
     * 新建一个对象池
     * @param name 对象池名字
     * @param parent 对象池所在位置
     */
    RegisterNew(name:string,parent:cc.Node)
    {
        BundleManager.bundleMap.get("ObjectPool").load(name,(err:Error,node:cc.Prefab)=>{
            if(err)
            {
                console.error(err);
                return;
            }
            else
            {
                let pool=new SubPool(node,parent);
                this.pools.set(pool.poolName,pool);
            }
        });
    }
}
