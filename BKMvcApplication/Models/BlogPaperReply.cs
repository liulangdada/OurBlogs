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
    
    public partial class BlogPaperReply
    {
        public int Id { get; set; }
        public Nullable<int> Comment_Id { get; set; }
        public Nullable<int> Reply_Id { get; set; }
        public Nullable<int> Reply_type { get; set; }
        public string Reply_Content { get; set; }
        public Nullable<int> From_Id { get; set; }
        public Nullable<int> To_Uid { get; set; }
        public Nullable<System.DateTime> Reply_Time { get; set; }
        public Nullable<int> Reply_Agreements { get; set; }
    }
}