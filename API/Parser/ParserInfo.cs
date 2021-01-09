﻿
using API.Entities;

namespace API.Parser
{
    /// <summary>
    /// This represents a single file
    /// </summary>
    public class ParserInfo
    {
        // This can be multiple
        public string Chapters { get; set; }
        public string Series { get; set; }
        // This can be multiple
        public string Volumes { get; set; }
        public string Filename { get; init; }
        public string FullFilePath { get; set; }
        /// <summary>
        /// Raw (image), Archive
        /// </summary>
        public MangaFormat Format { get; set; }
    }
}