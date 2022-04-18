
#学习打卡小程序（云开发版本）
标签： 云开发 小程序

---

### 1. 内容目录
@[toc]
### 2. 下载代码
> git clone https://gitee.com/hsp_school_project/punch-the-clock.git

### 3. 运行前准备
创建云数据库
开通云开发
新增数据库集合：
> clockList、swiperList、testTypes、userList

```javascript
//打卡表
clockList=[
		{
			"_id":"",
			"content":"实习"，//打卡内容
			"created":1649995542210,//打卡时间
			"image":"",//打卡图片
			"userId":""//打卡用户
		}
	];
//轮播表
swiperList = [
		{
			"_id":"",
			"isUsr":true,//是否启用
			"url":""//图片链接
		}
	]
//考研日期表
testTypes=[
	{
		"_id":"",
		"date":1672448400000,
		"dateName":"2022" //22考研
	}
]
//用户表
userList=[
	{
		"_id":"",
		"created":0,//注册时间
		"groupName":"",//
		"isUse":true,//是否启用
		"nearClockDate":0,//最近一次打卡日期
		"nickImage":"",//头像
		"nickName":"",//昵称
		"tel":"",//手机号
		"testType":"",//考研 id
	}
]
```


### 4.上传同步云函数



    