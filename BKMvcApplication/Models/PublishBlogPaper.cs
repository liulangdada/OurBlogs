//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace BKMvcApplication.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class PublishBlogPaper
    {
        public int BlogPaper_Id { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<int> PaperType_Id { get; set; }
        public string BlogPaper_TitleName { get; set; }
        public Nullable<System.DateTime> BlogPaper_PublishTime { get; set; }
        public string BlogPaper_Contents { get; set; }
        public Nullable<int> BlogPaper_Readings { get; set; }
        public Nullable<int> BlogPaper_Comments { get; set; }
        public Nullable<int> BlogPaper_Agreements { get; set; }
        public string BlogPaper_Opyright { get; set; }
    }
}
