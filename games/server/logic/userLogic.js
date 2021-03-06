//引入userDao
var userDao = require("../dao/userDao");
var crypto = require("../utils/crypto");
function nop(a,b,c,d,e){};

//更新昵称和性别
exports.updateInfo = function(sex,username,account, callback){
    callback = callback == null ? nop : callback;
    if(account == null || username == null || sex == null){
        callback(null);
        return;
    }

    userDao.updateInfo(sex,username,account,function(suc){
                if(suc){
                    callback(true);
                }else{
                    callback(false);
                }
            });

};


//更新用户关卡索引ID
exports.updatePlantindex = function(plantindex,plantpassindex,account, callback){
    callback = callback == null ? nop : callback;
    if(account == null || plantindex == null || plantpassindex==null){
        callback(null);
        return;
    }

    userDao.updatePlantindex(plantindex,plantpassindex,account,function(suc){
            if(suc){
                callback(true); 
            }else{
                callback(false); 
            }
    });

};


//获取用户关卡索引ID
exports.getPlantpassindex = function(account, callback){
    callback = callback == null ? nop : callback;
    if(account == null){
        callback(null);
        return;
    }

    userDao.getPlantpassindex(account,function(suc){
        if(suc){
            callback(suc); 
        }else{
            callback(false); 
        }
    });

};


//创建一个用户
exports.createAccount = function(account,password, callback){
    callback = callback == null ? nop : callback;
    if(account == null || password == null){
        callback(null);
        return;
    }

    userDao.createAccount(account,password,function(suc){
        if(suc){
            callback(true);
        }else{
            callback(false);
        }
    });

};

//判断密码是否正确
exports.vercifyPassword = function(account,password, callback){
    callback = callback == null ? nop : callback;
    if(account == null || password == null){
        callback(null);
        return;
    }
     //验证账号密码是否正确
     userDao.vercifyPassword(account,password,function(data){
        if(data){
            callback(data);
        }else{
            callback(false);
        }
    });
};



//判断昵称是否被使用了
exports.judgeUsername = function(username, callback){
    callback = callback == null ? nop : callback;
    if(username == null){
        callback(null);
        return;
    }

    //验证昵称是否存在
    userDao.judgeUsername(username,function(has){
        if(has){
            callback(true);
        }else{
            callback(false);
        }
    });
};


//判断用户是否存在
exports.judgeAccount = function(account, callback){
    callback = callback == null ? nop : callback;
    if(account == null){
        callback(null);
        return;
    }

    userDao.judgeAccount(account,function(has){
        if(has){
            callback(true);
        }else{
            callback(false);
        }
    });
};
