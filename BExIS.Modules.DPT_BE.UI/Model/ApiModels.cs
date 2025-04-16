using BExIS.IO.Transform.Output;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BExIS.Modules.DPT_BE.UI.Models
{
    /// <summary>
    /// Class to store server information to access data via API
    /// 
    /// </summary>
    /// <returns></returns>
    public class ServerInformation
    {
        public string ServerName { get; set; }
        public string UsernamePassword { get; set; }

    }

    /// <summary>
    /// Class to store dataset information receive via api
    /// 
    /// </summary>
    /// <returns></returns>
    public class DataStructureObject
    {
        public int id { get; set; }
        public string title { get; set; }
        public string desciption { get; set; }
        public bool inUse { get; set; }
        public List<Variable> variables { get; set; }
    }

    public class Constraint
    {
        public int id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string description { get; set; }
    }

    public class Unit
    {
        public int id { get; set; }
        public string name { get; set; }
        public string abbrevation { get; set; }
        public string description { get; set; }
        public Dimension dimension { get; set; }
        public string measurementSystem { get; set; }
    }

    public class Dimension
    {
        public string name { get; set; }
        public string description { get; set; }
        public string specification { get; set; }
    }

    public class Variable
    {
        public int id { get; set; }
        public string label { get; set; }
        public string description { get; set; }
        public bool isOptional { get; set; }
        public string dataType { get; set; }
        public string systemType { get; set; }
        public string displayPattern { get; set; }
        public Unit unit { get; set; }
        public List<object> missingValues { get; set; }
        public Template template { get; set; }
        public List<object> meanings { get; set; }
        public List<Constraint> constraints { get; set; }
    }

    /// <summary>
    /// Class to store dataset information receive via api
    /// 
    /// </summary>
    /// <returns></returns>
    public class DatasetObject
    {
        public long Id { get; set; }
        public long Version { get; set; }
        public long VersionId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public long DataStructureId { get; set; }
        public long MetadataStructureId { get; set; }
        public bool IsPublic { get; set; }
        public string PublicationDate { get; set; }
        public string VersionName { get; set; }
        public bool VersionPublicAccess { get; set; }
        public string VersionPublicAccessDate { get; set; }
        public Dictionary<string, string> AdditionalInformations { get; set; }
        public Dictionary<string, Dictionary<string, string>> Parties { get; set; }
        public string VersionDate { get; set; }
        public object Names { get; internal set; }

        public DatasetObject()
        {
            AdditionalInformations = new Dictionary<string, string>();
            Parties = new Dictionary<string, Dictionary<string, string>>();
        }
    }


    public class PostApiPlotCount
    {
        public string[] plots { get; set; }
    }



}
