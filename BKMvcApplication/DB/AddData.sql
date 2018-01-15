--开始添加十条测试用户信息表数据
insert into UserInfo values('15282144522','Admin','123456')
insert into UserInfo values('15282144523','Admin2','123456')
insert into UserInfo values('15282144524','Admin3','123456')
insert into UserInfo values('15282144525','Admin4','123456')
insert into UserInfo values('15282144526','Admin5','123456')
insert into UserInfo values('15282144527','Admin6','123456')
insert into UserInfo values('15282144528','Admin7','123456')
insert into UserInfo values('15282144529','Admin8','123456')
insert into UserInfo values('15282144532','Admin9','123456')
insert into UserInfo values('15282144533','Admin10','123456')
go

select * from UserInfo


--====================================AddData  For Problems_Type
insert into Problems_Type values('.Net')
insert into Problems_Type values('C语言')
insert into Problems_Type values('C++')
insert into Problems_Type values('C#')
insert into Problems_Type values('Java')
insert into Problems_Type values('JavaScript')
insert into Problems_Type values('Ajax')
insert into Problems_Type values('PHP')
insert into Problems_Type values('Jquery')
insert into Problems_Type values('SqlServer')
insert into Problems_Type values('Oracle')
insert into Problems_Type values('MySQL')


--====================================AddData  For Problems
insert into Problems values(1,10000,GETDATE(),'1+1=?','1+1到底等于几?',0,0,0,5,1)

--创建提问表数据
insert into Problems values(1,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(1,10000,GETDATE(),'这个不懂求大神','2+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(2,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(2,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(3,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(3,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(5,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(4,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(5,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,0,100)
insert into Problems values(1,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,1,100)
insert into Problems values(1,10000,GETDATE(),'这个不懂求大神','2+1=？，求大神门帮忙',1000,10,1,100)
insert into Problems values(2,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,1,100)
insert into Problems values(2,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,1,100)
insert into Problems values(3,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,1,100)
insert into Problems values(3,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,1,100)
insert into Problems values(5,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,1,100)
insert into Problems values(4,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,1,100)
insert into Problems values(5,10000,GETDATE(),'这个不懂求大神','1+1=？，求大神门帮忙',1000,10,1,100)


--====================================AddData  For Answer
insert into Answer values(1,10001,GETDATE(),'应该等于2吧',0,0)
insert into Answer values(1,10002,getdate(),'2',0,0)
insert into Answer values(1,10003,getdate(),'3',0,0)
insert into Answer values(1,10004,getdate(),'4',0,0)
insert into Answer values(1,10005,getdate(),'5',0,0)
insert into Answer values(1,10006,getdate(),'55555555555555555555555555555555555555555555555555555555555555555555555555555555555',0,0)

select * from UserInfo
select * from Problems
select * from Answer
