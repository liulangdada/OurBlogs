use  master
---�������ݿ� B2CSystem
if exists(select 1 from sys.databases where name='BK')
begin
	drop database BK
end
create database BK
go
use BK
go

--======================================================================================�û���Ϣ��-->UserInfo
if  exists (select 1 from sys.objects where name='UserInfo')
begin
	drop table UserInfo
end
create table UserInfo 
(
  UserId  int primary key identity(10000,1),--�û����
  UserPhone varchar(11) ,--�ֻ����롢����Ϊ��¼�˺�
  UserName varchar(64) ,--�û��ǳơ�Ӧ����Ψһ�ġ�Ҳ������Ϊ��¼�˺�
  UserPwd varchar(64) , --��¼����
)
go



--======================================================================================�û������-->UserDetail
if  exists (select 1 from sys.objects where name='UserDetail')
begin
	drop table UserDetail
end
create table UserDetail
(
	Detail_Id int primary key identity(1,1),--�û�����ID
	Detail_Name nvarchar(64),--��ʵ����
	Detail_Sex int ,--�Ա� (0:Ů,1:��)
	Detail_Birthday datetime ,--����
	Detail_UserImg varchar(64),--�û�ͷ��
	Detail_Position nvarchar(64),--ְλ
	Detail_Region nvarchar(64), --1�����������ң�
	Detail_Region2 nvarchar(64), --2��������ʡ��ֱϽ�С���������
	Detail_Region3 nvarchar(64), --3���������ؼ��У�
	Detail_Industry nvarchar(128), --��ҵ
	Detail_SelfIntro nvarchar(300), --���ҽ��ܣ�������
	
	UserId int,--�û����
)
go

------===============================================================================------��ҳ�ֲ�ͼƬ-----------------------------
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
	��ҳģ��
**/

---=========================================================================================ͷ������
if exists(select 1 from sys.objects where name='Head')
begin
	drop table Head
end
create table Head
(
	Head_Id int primary key identity(1,1),
	Head_Title nvarchar(64),--����һ��Ŀ¼��
	Head_Url nvarchar(64),--·��
	
)

/***
	���Ͱ��
*/
--============================================================================��������
if exists(select * from sys.objects where name='BlogPaperType')
begin
	drop table BlogPaperType
end
create table BlogPaperType 
(
	PaperType_Id int primary key identity(1,1),--�������ͱ��
	PaperType_TitleName nvarchar(64) ,--�����������������----��������רҵ���ͣ���.Net��Java��PHP...����
)
go

--============================================================================�������±�
if exists(select 1 from sys.objects where name='PublishBlogPaper')
begin
	drop table PublishBlogPaper
end

create table PublishBlogPaper(
	BlogPaper_Id int identity(1,1) primary key, --�������
	UserId int,								--�û���ţ������û���
	PaperType_Id int ,						--��������רҵ���ͣ���.Net��Java��PHP...�� 
	From_IN nvarchar(32),					--�����������ԭ����ת�ء����룩
	BlogPaper_TitleName nvarchar(128),		--��������С���⣩
	BlogPaper_PublishTime datetime ,		--�������ĵ�ʱ��(�޸ĺ�ʱ�䷢���ı�)
	BlogPaper_Contents text ,				--���µ�����
	----����޸ģ�������ZH��
	BlogPaper_Readings int ,				--�������·��������Ķ�����
	BlogPaper_Comments int,					--��������������
	BlogPaper_Agreements int ,				--������
	BlogPaper_Opyright nvarchar(128) ,		--��Ȩ����
	---Over
)
go



	----ZH�޸ģ�����ȫ����
--===============================================================================================�����������۱�
if exists(select 1 from sys.objects where name='BlogPaperComments')
begin
  drop table BlogPaperComments
end

create table BlogPaperComments
(
	Comment_Id int primary key identity(1,1),	--����id
	UserId int ,								--����������˵�id
	BlogPaper_Id int ,							--��������۵Ĳ���
	Comments_Url nvarchar(64),					--���۵�����
	Comments_Time datetime ,					--����ʱ��
	Comments_Agreements int,					--���۵�����
)



	----ZH����
--============================================================================================����������Ļظ���
if exists(select 1 from sys.objects where name='BlogPaperReply')
begin
  drop table BlogPaperReply
end

create table BlogPaperReply
(
	Id int primary key identity(1,1),	--����id
	Comment_Id int,						--����ID
	Reply_Id int ,						--�ظ�Ŀ��ID
	Reply_type int,						--�ظ����ͣ��ظ�������������۵Ļظ�(comment)��Ҳ��������Իظ��Ļظ�(reply)��
	Reply_Content nvarchar(512),		--�ظ�������
	From_Id int ,						--�ظ��ߵ�ID
	To_Uid int,							--Ŀ���û�ID
	Reply_Time datetime ,				--�ظ�ʱ��
	Reply_Agreements int,				--�ظ�������
)












-------======================================================================----------��ҳ�����߷�������������------------------------------------------------
if exists(select * from sys.tables where name='Articles')
begin
	drop table Articles
end
go
create table Articles
(
aId int primary key identity,--���±��
aName varchar(200),--���±���
aType varchar(64),--��������
aAuthor varchar(32),--��������
aReleaseTime datetime,--���·���ʱ��
aRemark text, --���µ�����
aAmountOfAccess int,--���·�����
aCommentNum int,--�������۵�����
--aContent text,--��������
adId int--��������
)
go


----------===============================================================--------------����ר���Ƽ�Album-----------------------------------------------------------------
if exists(select * from sys.tables where name='Album')
begin
	drop table Album
end
go
create table Album
(
alId int primary key identity,
alName varchar(200),--ר������
alUrl varchar(100),--ר��ͼƬ·��
alDetailId int
)
go





















--============================================================================================�����������ͱ�
if exists( select 1 from sys.objects where name='Problems_Type')
begin
	drop table Problems_Type
end
create table Problems_Type
(
	Problems_Type_Id int primary key identity,--�������ͱ��
	Problems_Type_Name varchar(64) ,--������������
)
go

--===========================================================================================�������ʱ�
if exists( select 1 from sys.objects where name='Problems')
begin
	drop table Problems
end
create table Problems
(
	Problems_Id int identity primary key,--������
	Problems_Type_Id int ,--�������ͱ��
	Problems_UserId int ,--�����û�
	Problems_Time datetime ,--����ʱ��
	Problems_Title text ,--�������
	Problems_Content text ,--�����������
	Problems_SeeCount int ,--�������
	Problems_CollectCount int,--�ղ�����
	Problems_IsSolve int ,--�Ƿ���
	Problems_Money int ,--���ͻ���
	Problems_BestAnswerId int--��ѻش���
)
go
--============================================================================================�����ش������
if exists (select 1 from sys.objects where name = 'Answer')
begin
	drop table Answer
end
create table Answer 
(
	Answer_Id int primary key identity,--�ش���
	Problems_Id int ,--������
	Answer_UserId int,--�ش��û�
	Answer_time datetime,--�ش�ʱ��
	Answer_Content text ,--�ش��������
	Answer_agreeCount int ,--�ش��������
	Answer_disagreeCount int ,--�ش𱻲�����
)
go

















--========================================================================================Integral : ���ֱ�
if exists (select 1 from sys.objects where name='Integral')
begin
    drop table Integral
end
create table Integral (
Iid int primary key identity,
[Uid] int,                  --�û�id
oldTotal int default(0),    --��ʷ�ۼ��ܻ��� 
newTotal int default(0),    --��ǰ�ܻ���
Consumption int default(0), --��ǰ�����ܻ���
) 
go


--===============================================================================ConsumptionType:�����������ͱ�
if exists (select 1 from sys.objects where name='ConsumptionType')
begin
    drop table ConsumptionType
end
create table ConsumptionType(
 CTid int primary key identity,
 CTnamr varchar(20),   --��������
)
go


--================================================================================IntegralRecord :�������Ѽ�¼��
if exists (select 1 from sys.objects where name='IntegralRecord')
begin
    drop table IntegralRecord
end
create table IntegralRecord (
 IRid int primary key identity, 
 CTid int,                --��������id   
 Expenditure_id int,      --֧������id
 Income_id int ,           --�������id 
 Transac int ,             --���׻������� 
 IRtime  datetime default(GETDATE())   --����ʱ�� 
)
go

