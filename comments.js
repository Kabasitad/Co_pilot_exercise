// Create web server
var express = require('express');
var router = express.Router();

// Import database connection
var db = require('../db');

// Import authentication middleware
var auth = require('../auth');

// Import comment model
var Comment = require('../models/comment');

// Import user model
var User = require('../models/user');

// Import post model
var Post = require('../models/post');

// Import comment validation
var validateComment = require('../validation/comment');

// Import comment validation
var validateCommentUpdate = require('../validation/commentUpdate');

// Import comment validation
var validateCommentDelete = require('../validation/commentDelete');

// Import comment validation
var validateCommentLike = require('../validation/commentLike');

// Import comment validation
var validateCommentUnlike = require('../validation/commentUnlike');

// Import comment validation
var validateCommentReport = require('../validation/commentReport');

// Import comment validation
var validateCommentUnreport = require('../validation/commentUnreport');

// Import comment validation
var validateCommentGet = require('../validation/commentGet');

// Import comment validation
var validateCommentGetAll = require('../validation/commentGetAll');

// Import comment validation
var validateCommentGetReported = require('../validation/commentGetReported');

// Import comment validation
var validateCommentGetLiked = require('../validation/commentGetLiked');

// Import comment validation
var validateCommentGetReplied = require('../validation/commentGetReplied');

// Import comment validation
var validateCommentGetLikedBy = require('../validation/commentGetLikedBy');

// Import comment validation
var validateCommentGetReportedBy = require('../validation/commentGetReportedBy');

// Import comment validation
var validateCommentGetRepliedBy = require('../validation/commentGetRepliedBy');

// Import comment validation
var validateCommentGetRepliedTo = require('../validation/commentGetRepliedTo');

// Import comment validation
var validateCommentGetPost = require('../validation/commentGetPost');

// Import comment validation
var validateCommentGetUser = require('../validation/commentGetUser');

// Import comment validation
var validateCommentGetComment = require('../validation/commentGetComment');

// Import comment validation
var validateCommentGetReplies = require('../validation/commentGetReplies');

// Import comment validation
var validateCommentGetReports = require('../validation/commentGetReports');

// Import comment validation
var validateCommentGetLikes = require('../validation/commentGetLikes');

// Import comment validation
var validateCommentGetCommented = require('../validation/commentGetCommented');

// Import comment validation
