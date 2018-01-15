using BKMvcApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BKMvcApplication.Controllers
{
    public class AnswerController : Controller
    {
        //
        // GET: /Answer/

        public ActionResult Index()
        {
            //BKEntities
            //获取提问文章编号
            int BlogsId = Convert.ToInt32(Request["blogsId"]);

            //暂时默认为1
            BlogsId = 1;

            BKEntities BKEntity = new BKEntities();
            //根据提问文章编号 获取提问的所有内容
            Problems Problems = BKEntity.Problems.Where(a => a.Problems_Id == BlogsId).FirstOrDefault();


            //得到用户编号
            int? UserId = Problems.Problems_UserId;
            //根据Problems.Problems_UserId得到用户昵称
            string UserName = BKEntity.UserInfo.Where(a => a.UserId == UserId).FirstOrDefault().UserName;


            //根据问题类型编号得到问题类型名称
            string TypeName = BKEntity.Problems_Type.Where(a => a.Problems_Type_Id == Problems.Problems_Type_Id).FirstOrDefault().Problems_Type_Name;


            //根据问题编号 查询所有回答
            //int AnswerCount = BKEntity.Answer.Where(a => a.Problems_Id == Problems.Problems_Id).Count();
            List<Answer> AnswerList = BKEntity.Answer.Where(a => a.Problems_Id == Problems.Problems_Id).ToList();



            //如果最佳答案编号不为零 说明提问者已采纳某个答案为最佳答案
            if (Problems.Problems_BestAnswerId != 0)
            {
                //根据提问编号查询该问题的最佳答案
                Answer Answer = BKEntity.Answer.Where(a => a.Answer_Id == Problems.Problems_BestAnswerId).FirstOrDefault();

                ViewBag.Answer = Answer;
            }

            ViewBag.Problems = Problems;
            ViewBag.UserName = UserName;
            ViewBag.TypeName = TypeName;
            ViewBag.AnswerList = AnswerList;
            //ViewBag.AnswerCount = AnswerCount;
            return View();
        }

    }
}
