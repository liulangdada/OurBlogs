use  master
---创建数据库 B2CSystem
if exists(select 1 from sys.databases where name='BK')
begin
	drop database BK
end
create database BK
go
use BK
go

--======================================================================================用户信息表-->UserInfo
if  exists (select 1 from sys.objects where name='UserInfo')
begin
	drop table UserInfo
end
create table UserInfo 
(
  UserId  int primary key identity(10000,1),--用户编号
  UserPhone varchar(11) ,--手机号码、可作为登录账号
  UserName varchar(64) ,--用户昵称、应该是唯一的、也可以作为登录账号
  UserPwd varchar(64) , --登录密码
)
go



--======================================================================================用户详情表-->UserDetail
if  exists (select 1 from sys.objects where name='UserDetail')
begin
	drop table UserDetail
end
create table UserDetail
(
	Detail_Id int primary key identity(1,1),--用户详情ID
	Detail_Name nvarchar(64),--真实姓名
	Detail_Sex int ,--性别 (0:女,1:男)
	Detail_Birthday datetime ,--生日
	Detail_UserImg varchar(64),--用户头像
	Detail_Position nvarchar(64),--职位
	Detail_Region nvarchar(64), --1级地区（国家）
	Detail_Region2 nvarchar(64), --2级地区（省、直辖市、自治区）
	Detail_Region3 nvarchar(64), --3级地区（地级市）
	Detail_Industry nvarchar(128), --行业
	Detail_SelfIntro nvarchar(300), --自我介绍（简述）
	
	UserId int,--用户编号
)
go

------===============================================================================------首页轮播图片-----------------------------
if exists(select * from sys.tables where name='ImageIndex')
begin
	drop table ImageIndex
end
go
create table ImageIndex
(
imgId int primary key identity,
imgName varchar(64),
imgUrl varchar(100),
imgRemark text
)
go




/**
	首页模块
**/

---=========================================================================================头部内容
if exists(select 1 from sys.objects where name='Head')
begin
	drop table Head
end
create table Head
(
	Head_Id int primary key identity(1,1),
	Head_Title nvarchar(64),--顶部一级目录名
	Head_Url nvarchar(64),--路径
	
)

/***
	博客板块
*/
--============================================================================论文类型
if exists(select * from sys.objects where name='BlogPaperType')
begin
	drop table BlogPaperType
end
create table BlogPaperType 
(
	PaperType_Id int primary key identity(1,1),--论文类型编号
	PaperType_TitleName nvarchar(64) ,--论文类型名（大标题----文章属于专业类型（如.Net、Java、PHP...））
)
go

--============================================================================博客文章表
if exists(select 1 from sys.objects where name='PublishBlogPaper')
begin
	drop table PublishBlogPaper
end

create table PublishBlogPaper(
	BlogPaper_Id int identity(1,1) primary key, --自增编号
	UserId int,								--用户编号（关联用户表）
	PaperType_Id int ,						--文章属于专业类型（如.Net、Java、PHP...） 
	From_IN nvarchar(32),					--申明来自哪里（原创、转载、翻译）
	BlogPaper_TitleName nvarchar(128),		--论文名（小标题）
	BlogPaper_PublishTime datetime ,		--发表论文的时间(修改后时间发生改变)
	BlogPaper_Contents text ,				--文章的内容
	----张皓修改（下面用ZH）
	BlogPaper_Readings int ,				--博客文章访问量（阅读量）
	BlogPaper_Comments int,					--博客文章评论量
	BlogPaper_Agreements int ,				--点赞量
	BlogPaper_Opyright nvarchar(128) ,		--版权申明
	---Over
)
go



	----ZH修改（几乎全部）
--===============================================================================================博客文章评论表
if exists(select 1 from sys.objects where name='BlogPaperComments')
begin
  drop table BlogPaperComments
end

create table BlogPaperComments
(
	Comment_Id int primary key identity(1,1),	--自增id
	UserId int ,								--外键，评论人的id
	BlogPaper_Id int ,							--外键，评论的博客
	Comments_Url nvarchar(64),					--评论的内容
	Comments_Time datetime ,					--评论时间
	Comments_Agreements int,					--评论点赞量
)



	----ZH新增
--============================================================================================文章评论里的回复表
if exists(select 1 from sys.objects where name='BlogPaperReply')
begin
  drop table BlogPaperReply
end

create table BlogPaperReply
(
	Id int primary key identity(1,1),	--自增id
	Comment_Id int,						--评论ID
	Reply_Id int ,						--回复目标ID
	Reply_type int,						--回复类型（回复可以是针对评论的回复(comment)，也可以是针对回复的回复(reply)）
	Reply_Content nvarchar(512),		--回复的内容
	From_Id int ,						--回复者的ID
	To_Uid int,							--目标用户ID
	Reply_Time datetime ,				--回复时间
	Reply_Agreements int,				--回复点赞量
)












-------======================================================================----------首页管理者发布的优质文章------------------------------------------------
if exists(select * from sys.tables where name='Articles')
begin
	drop table Articles
end
go
create table Articles
(
aId int primary key identity,--文章编号
aName varchar(200),--文章标题
aType varchar(64),--文章类型
aAuthor varchar(32),--文章作者
aReleaseTime datetime,--文章发布时间
aRemark text, --文章的描述
aAmountOfAccess int,--文章访问量
aCommentNum int,--文章评论的数量
--aContent text,--文章内容
adId int--文章详情
)
go


----------===============================================================--------------优秀专辑推荐Album-----------------------------------------------------------------
if exists(select * from sys.tables where name='Album')
begin
	drop table Album
end
go
create table Album
(
alId int primary key identity,
alName varchar(200),--专辑标题
alUrl varchar(100),--专辑图片路径
alDetailId int
)
go





















--============================================================================================创建提问类型表
if exists( select 1 from sys.objects where name='Problems_Type')
begin
	drop table Problems_Type
end
create table Problems_Type
(
	Problems_Type_Id int primary key identity,--问题类型编号
	Problems_Type_Name varchar(64) ,--问题类型名称
)
go

--===========================================================================================创建提问表
if exists( select 1 from sys.objects where name='Problems')
begin
	drop table Problems
end
create table Problems
(
	Problems_Id int identity primary key,--问题编号
	Problems_Type_Id int ,--问题类型编号
	Problems_UserId int ,--提问用户
	Problems_Time datetime ,--提问时间
	Problems_Title text ,--问题标题
	Problems_Content text ,--问题具体内容
	Problems_SeeCount int ,--浏览人数
	Problems_CollectCount int,--收藏人数
	Problems_IsSolve int ,--是否解决
	Problems_Money int ,--悬赏积分
	Problems_BestAnswerId int--最佳回答编号
)
go
--============================================================================================创建回答问题表
if exists (select 1 from sys.objects where name = 'Answer')
begin
	drop table Answer
end
create table Answer 
(
	Answer_Id int primary key identity,--回答编号
	Problems_Id int ,--问题编号
	Answer_UserId int,--回答用户
	Answer_time datetime,--回答时间
	Answer_Content text ,--回答具体内容
	Answer_agreeCount int ,--回答获赞数量
	Answer_disagreeCount int ,--回答被踩数量
)
go

















--========================================================================================Integral : 积分表
if exists (select 1 from sys.objects where name='Integral')
begin
    drop table Integral
end
create table Integral (
Iid int primary key identity,
[Uid] int,                  --用户id
oldTotal int default(0),    --历史累计总积分 
newTotal int default(0),    --当前总积分
Consumption int default(0), --当前消费总积分
) 
go


--===============================================================================ConsumptionType:积分消费类型表
if exists (select 1 from sys.objects where name='ConsumptionType')
begin
    drop table ConsumptionType
end
create table ConsumptionType(
 CTid int primary key identity,
 CTnamr varchar(20),   --消费类型
)
go


--================================================================================IntegralRecord :积分消费记录表
if exists (select 1 from sys.objects where name='IntegralRecord')
begin
    drop table IntegralRecord
end
create table IntegralRecord (
 IRid int primary key identity, 
 CTid int,                --消费类型id   
 Expenditure_id int,      --支出积分id
 Income_id int ,           --收入积分id 
 Transac int ,             --交易积分数额 
 IRtime  datetime default(GETDATE())   --交易时间 
)
go

