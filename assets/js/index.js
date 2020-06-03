Survey.StylesManager.applyTheme("modern");

var language = 'English';

var surveyEngJSON = {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "question0_1",
     "title": {
      "default": "Game ID(Auto-Generate)"
     },
     "isRequired": true,
     "readOnly": true,
     "validators": [
      {
       "type": "expression"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "question0_2",
     "title": "Gender",
     "isRequired": true,
     "choices": [
      {
       "value": "M",
       "text": "Male"
      },
      {
       "value": "F",
       "text": "Female"
      }
     ]
    },
    {
     "type": "text",
     "name": "question0_3",
     "title": "Birthdate",
     "isRequired": true,
     "inputType": "month"
    },
    {
     "type": "text",
     "name": "question0_4",
     "title": "Email",
     "isRequired": true,
     "inputType": "email"
    }
   ],
   "title": "Before Playing Game",
   "description": {
    "default": "Please fill in the following form and Index of Learning Styles Questionnaire, your response data and learning style profile are not stored or sent to anyone other than you.",
    "zh-cn": "Please fill in the following form and finish the learning style survey, your response data and learning style profile are not stored or sent to anyone other than you."
   }
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1",
     "title": "I understand something better after I",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "try it out."
      },
      {
       "value": "b",
       "text": "think it through."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question2",
     "title": "I would rather be considered",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "realistic."
      },
      {
       "value": "b",
       "text": "innovative."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question3",
     "title": "When I am learning something new, it helps me to",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "talk about it."
      },
      {
       "value": "b",
       "text": "think about it."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question4",
     "title": "If I were a teacher, I would rather teach a course",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "that deals with facts and real life situations."
      },
      {
       "value": "b",
       "text": "that deals with ideas and theories."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question5",
     "title": "In a study group working on difficult material, I am more likely to",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "jump in and contribute ideas."
      },
      {
       "value": "b",
       "text": "sit back and listen."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question6",
     "title": "I find it easier",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "to learn facts."
      },
      {
       "value": "b",
       "text": "to learn concepts."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question7",
     "title": "In classes I have taken",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "I have usually gotten to know many of the students."
      },
      {
       "value": "b",
       "text": "I have rarely gotten to know many of the students."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "title": "In reading nonfiction, I prefer",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "something that teaches me new facts or tells me how to do something."
      },
      {
       "value": "b",
       "text": "something that gives me new ideas to think about."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question9",
     "title": "When I start a homework problem, I am more likely to",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "start working on the solution immediately."
      },
      {
       "value": "b",
       "text": "try to fully understand the problem first."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question10",
     "title": "I prefer the idea of",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "certainty."
      },
      {
       "value": "b",
       "text": "theory."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question11",
     "title": "I prefer to study",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "in a study group."
      },
      {
       "value": "b",
       "text": "alone."
      }
     ]
    }
   ],
   "title": "Index of Learning Styles Questionnaire",
   "description": "Before playing the game, the system needs to estimate your learning style by the questionnaire. You may only choose one answer for each question, and you must answer all questions before you can submit the form. If both answers to a question seem to apply to you, choose the one that applies more frequently throughout all your courses. "
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question12",
     "title": "I am more likely to be considered",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "careful about the details of my work."
      },
      {
       "value": "b",
       "text": "creative about how to do my work."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question13",
     "title": "I would rather first",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "try things out."
      },
      {
       "value": "b",
       "text": "think about how I'm going to do it."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question14",
     "title": "When I am reading for enjoyment, I like writers to",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "clearly say what they mean."
      },
      {
       "value": "b",
       "text": "say things in creative, interesting ways."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question15",
     "title": "I more easily remember",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "something I have done."
      },
      {
       "value": "b",
       "text": "something I have thought a lot about."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question16",
     "title": "When I have to perform a task, I prefer to",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "master one way of doing it."
      },
      {
       "value": "b",
       "text": "come up with new ways of doing it."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question17",
     "title": "When I have to work on a group project, I first want to",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "have \"group brainstorming\" where everyone contributes ideas."
      },
      {
       "value": "b",
       "text": "brainstorm individually and then come together as a group to compare ideas."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question18",
     "title": "I consider it higher praise to call someone",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "sensible."
      },
      {
       "value": "b",
       "text": "imaginative."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question19",
     "title": "I am more likely to be considered",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "outgoing."
      },
      {
       "value": "b",
       "text": "reserved."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question20",
     "title": "I prefer courses that emphasize",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "concrete material (facts, data)."
      },
      {
       "value": "b",
       "text": "abstract material (concepts, theories)."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question21",
     "title": "The idea of doing homework in groups, with one grade for the entire group,",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "appeals to me."
      },
      {
       "value": "b",
       "text": "does not appeal to me."
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question22",
     "title": "When I am doing long calculations,",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "I tend to repeat all my steps and check my work carefully."
      },
      {
       "value": "b",
       "text": " I find checking my work tiresome and have to force myself to do it."
      }
     ]
    }
   ],
   "title": {
    "default": "Index of Learning Styles Questionnaire"
   },
   "description": {
    "default": "Before playing the game, the system needs to estimate your learning style by the questionnaire. You may only choose one answer for each question, and you must answer all questions before you can submit the form. If both answers to a question seem to apply to you, choose the one that applies more frequently throughout all your courses. "
   }
  }
 ],
 "showPrevButton": false,
 "showQuestionNumbers": "off",
 "questionErrorLocation": "bottom",
 "showProgressBar": "bottom",
 "questionTitlePattern": "numRequireTitle"
}

var surveyChnJSON = {
 "locale": "zh-cn",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "question0_1",
     "title": "游戏ID(自动生成)",
     "isRequired": true,
     "readOnly": true,
     "validators": [
      {
       "type": "expression"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "question0_2",
     "title": "性别",
     "isRequired": true,
     "choices": [
      {
       "value": "M",
       "text": "男"
      },
      {
       "value": "F",
       "text": "女"
      }
     ]
    },
    {
     "type": "text",
     "name": "question0_3",
     "title": "出生年月",
     "isRequired": true,
     "inputType": "month"
    },
    {
     "type": "text",
     "name": "question0_4",
     "title": "邮件",
     "isRequired": true,
     "inputType": "email"
    }
   ],
   "title": "游戏之前",
   "description": "请先填写以下信息并完成测试问卷，您的资料将被严格保密"
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question1",
     "title": {
      "zh-cn": "以下哪种方法比较能够使我理解一件事物"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "实际操作"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "思考"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question2",
     "title": {
      "zh-cn": "我比较希望别人认为我是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "讲究实际的"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "创新的"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question3",
     "title": {
      "zh-cn": "以下哪种方法能够帮助我学习一件新的事物？"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "谈论它"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "思考它"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question4",
     "title": {
      "zh-cn": "如果我是一名老师，我比较喜欢教"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "关于事实和实际生活的课程"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "关于思想和理论方面的课程"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question5",
     "title": {
      "zh-cn": "在小组学习中，面对一个比较困难的问题时，我比较有可能"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "积极投入其中并提出自己的想法"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "坐在旁边倾听其他组员的意见"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question6",
     "title": {
      "zh-cn": "我发现比较容易学习的是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "事实性内容"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "概念性内容"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question7",
     "title": {
      "zh-cn": "在我修课的班级中，我通常"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "会去认识大部分同学"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "不太认识其他同学"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "title": {
      "zh-cn": "在阅读“非小说”类作品时，我偏爱"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "那些能告诉我事实和教我怎么做的读物"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "能提供我新的想法和启发我的读物"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question9",
     "title": {
      "zh-cn": "当我面对作业中的问题时，我通常"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "一开始就立即尝试做解答"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "先尝试完全理解问题"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question10",
     "title": {
      "zh-cn": "我比较喜欢的想法是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "确定性的"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "理论性的"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question11",
     "title": {
      "zh-cn": "我喜欢"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "在小组中学习"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "独自学习"
       }
      }
     ]
    }
   ],
   "title": "学习风格测试",
   "description": {
    "default": "在进行游戏之前，我们先通过学习风格测试，来确定你所偏好的学习风格。多年以来，你可能已经无形中培养了一些学习习惯，能够帮助你从某些经历中更好的学习和受益。本问卷没有时间限制，问卷结果准备性取决于你回答的真实性程度。答案没有对错之分，选择你觉得更接近的选项。",
    "zh-cn": "在正式进行游戏之前，我们先通过学习风格测试，来估算你所偏好的学习风格。多年以来，你可能已经无形中培养了一些学习习惯，能够帮助你从某些经历中更好的学习和受益。本问卷没有时间限制，问卷结果的准确性取决于你回答的真实性程度。答案没有对错之分，尽量选择你觉得更接近的选项。"
   }
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question12",
     "title": {
      "zh-cn": "我更喜欢被认为是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "对于工作细节很仔细的人"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "对于工作很有创造力的人"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question13",
     "title": {
      "zh-cn": "我做事情比较喜欢"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "直接尝试付诸行动"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "先仔细思考该怎么做"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question14",
     "title": {
      "zh-cn": "当我纯粹为了娱乐而阅读时，我偏好作者"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "清楚明白地说明要表达的内容"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "用具有创意、有趣的方式表达内容"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question15",
     "title": {
      "zh-cn": "我比较容易记得"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "我曾经做过的事"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "我曾经深入思考过的事"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question16",
     "title": {
      "zh-cn": "当我必须去执行某件工作时，我偏好"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "精通一种执行工作的方法"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "想出更多新的执行工作的方法"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question17",
     "title": {
      "zh-cn": "当我必须参加小组合作课题时，我会希望"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "先让大家一起进行“头脑风暴”，各抒己见"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "先让大家各自思考，然后再集合比较"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question18",
     "title": {
      "zh-cn": "当赞美别人的时候，我认为比较高的评价是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "有判断力"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "富有想象力"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question19",
     "title": {
      "zh-cn": "我通常被他人认为是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "外向的人"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "内向的人"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question20",
     "title": {
      "zh-cn": "我比较喜欢具有下列何种教材内容的课程"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "具体的（事实，数据）"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "抽象的（概念，理论）"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question21",
     "title": {
      "zh-cn": "对于分组做作业并且每个小组成员拿到同一分数的方式"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "十分吸引我"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "并不吸引我"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question22",
     "title": {
      "zh-cn": "当我在做一个冗长的计算时"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "我会一再重复所有步骤并仔细检查"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "我发觉检查工作非常无聊，我必须强迫自己这么做"
       }
      }
     ]
    }
   ],
   "title": {
    "zh-cn": "学习风格测试"
   },
   "description": {
    "zh-cn": "在正式进行游戏之前，我们先通过学习风格测试，来估算你所偏好的学习风格。多年以来，你可能已经无形中培养了一些学习习惯，能够帮助你从某些经历中更好的学习和受益。本问卷没有时间限制，问卷结果的准确性取决于你回答的真实性程度。答案没有对错之分，尽量选择你觉得更接近的选项。"
   }
  }
 ],
 "showPrevButton": false,
 "showQuestionNumbers": "off",
 "questionErrorLocation": "bottom",
 "showProgressBar": "bottom",
 "questionTitlePattern": "numRequireTitle"
}

function sendDataToServer(result) {
	var style1A = 0, style1B = 0;
	var style2A = 0, style2B = 0;
	
	for (var i=0; i<22; i++) {
		var ii = i + 1;
		var key = 'question' + ii.toString();
	    if (ii%2 == 1){
		    if (result.data[key] == 'a'){
				style1A += 1;
			}else{
				style1B += 1;
            }				
		}else if (ii%2 == 0) {
        	if (result.data[key] == 'a'){
				style2A += 1;
			}else{
				style2B += 1;
            }	
		}
	}
	
	var style = '';
	if(style1A > style1B) {
		style = 'A_'; //Active
	}else {
		style = 'R_'; //Reflective
	}
	
	if(style2A > style2B) {
		style += 'S'; //Sensing
	}else {
		style += 'I'; //Intuitive
	}
	
	var gameID = result.data.question0_1;
	
	var data = {'gameID': gameID, 'gender': result.data.question0_2, 'birthdate': result.data.question0_3, 'email': result.data.question0_4,
				'style1A': style1A, 'style1B': style1B,  'style2A': style2A, 'style2B': style2B, 'style': style};
	
	localStorage.setItem('learningStyle', style);
	
	sendToServer(data);
	
	if (language == 'Chinese') {
		document.querySelector('#resTitle').innerHTML = '<b>测试结果</b><hr>';
		document.querySelector('#idName').innerHTML = '<b>游戏账号ID: </b>' + gameID;
		
		var content = '该测试从以下两个维度测量学习风格, 每个维度有两个相对立的类别：<br>';
		//console.log(style1A, style1B, style2A, style2B);
		
		content += "<br><b>*主动型(Active) / 反思型(Reflective)</b><br>"
		if (style1A > style1B){
			content += "你倾向于是<u>主动型学习者</u>。<br>"
		}else{
			content += "你倾向于是<u>反思型学习者</u>。<br>"
		}
		
		content += "主动型的学习者倾向于积极参与某活动来理解所获得的知识，例如：参与讨论、将所学的知识实际运用、或是用自己的话对他人解释该讯息；而反思型的学习者则较偏好单独去思考学习的内容。对主动型的学习者而言，「让我们先试试，看看到底如何运作」是他们的最常用的口头禅；而「彻底的思考所有的内容」则反映了反思型学习者的特性。相较于喜欢独自一人完成工作的思维型的学习者，主动型的学习者较偏好多人一起合作的团队学习。只做笔记或重点整理，而没有任何课堂活动的授课方式对于这两种类型的学习者都是不适当的，其中对主动型的学习者而言更加的困难。<br>";
		
		content += "<br><b>*感受型(Sensing) / 直觉型(Intuitive)</b><br>"
		if (style2A > style2B){
			content += "你倾向于是<u>感受型学习者</u>。<br>"
		}else{
			content += "你倾向于是<u>直觉型学习者</u>。<br>"
		}
		
		content += "感受型的学习者偏好学习具体的事实，感受型的学习者则喜欢发觉事物间的关联或可能性。感受型的学习者通常喜欢用固有的方式去解决问题，不喜欢遇到复杂或是突发的情况；而直觉型的学习者则喜欢创新，不喜欢重复而规律的事物。相较于直觉型的学习者，当课堂测验的内容超出所学的范围时，感受型学习者较无法接受这种情况。感受型学习者对于细节项目会较有耐心去完成，而且擅长具体事实的记忆，以及实际操作(例如：实验室)的演练；直觉型学习者则擅长理解新的概念；相较于感受型的学习者，他们对于抽象概念或数理公式容易适应，没有困扰。与直觉型学习者相比，感受型学习者比较实际且谨慎，而直觉型学习者则喜欢以快速而创新的方式完成工作。感受型学习者较无法接受所学内容和真实世界是没有关联性的；而直觉型学习者则无法忍受需要填鸭式的大量记忆和冗长枯燥的计算。<br>";

		content += "<br><b>现在你可以点击“去玩游戏”按钮，开始正式玩游戏，在接下来的游戏登录页面你需要填入你的游戏账号ID。</b>"

		document.querySelector('#statement').innerHTML = content;	
		document.querySelector('#button').innerHTML = "<input type='button', value='去玩游戏', class='sv-btn sv-footer__next-btn'>";
	}else if(language == 'English') {
		document.querySelector('#resTitle').innerHTML = '<b>Questionnaire Results</b><hr>';
		document.querySelector('#idName').innerHTML = '<b>Game ID: </b>' + gameID;
		
		var content = 'There are two dimensions of learning style, with each dimension having two opposite categories：<br>';
		//console.log(style1A, style1B, style2A, style2B);
		
		content += "<br><b>*Active / Reflective</b><br>"
		if (style1A > style1B){
			content += "You are <u>Active Learner</u>. <br>"
		}else{
			content += "You are <u>Reflective Learner</u>. <br>"
		}
		
		content += "Active learners tend to retain and understand information best by doing something active with it—discussing or applying it or explaining it to others. Reflective learners prefer to thinkabout it quietly first. “Let’s try it out and see how it works” is an active learner’s phrase; “Let’s think it through first” is the reflective learner’s response. Active learners tend to like group work more than reflective learners, who prefer working alone. Sitting through lectures without getting to do anything physical but take notes is hard for both learning types, but particularly hard for active learners.<br>";
		
		content += "<br><b>*Sensing / Intuitive</b><br>"
		if (style2A > style2B){
			content += "You are <u>Sensing Learner</u>. <br>"
		}else{
			content += "You are <u>Intuitive Learner</u>. <br>"
		}
		
		content += "Sensing learners tend to like learning facts, intuitive learners often prefer discovering possibilities and relationships. Sensors often like solving problems by well-established methods and dislike complications and surprises; intuitors like innovation and dislike repetition. Sensors are more likely than intuitors to resent being tested on material that has not been explicitly covered in class. Sensors tend to be patient with details and good at memorizing facts and doing hands-on (laboratory) work; intuitors may be better at grasping new concepts and are often more comfortable than sensors with abstractions and mathematical formulations. Sensors tend to be more practical and careful than intuitors; intuitors tend to work faster and to be more innovative than sensors. Sensors don’t like courses that have no apparent connection to the real world; intuitors don’t like “plug-and-chug” courses that involve a lot of memorization and routine calculations.<br>";

		content += "<br><b>Now you can click “Play Game” button, and you need to fill in the game ID in the following game login page.</b>"

		document.querySelector('#statement').innerHTML = content;	
		document.querySelector('#button').innerHTML = "<input type='button', value='Play Game', class='sv-btn sv-footer__next-btn'>";
	}

    document.getElementById('button').addEventListener('click', function(){
		window.location.href="http://192.168.1.138/game";
	}, true);
}

function sendToServer(data){
		var xhr;
		if (window.XMLHttpRequest) {
			// code for modern browsers
			xhr = new XMLHttpRequest();
		} else {
			// code for old IE browsers
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
        xhr.open("POST", "http://linzichun.com:6688", true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
				if(xhr.status==200){
					console.log(xhr.responseText);
				}else{
					alert("Data Failure E101. Don't play game first, please contact admin for help.");
				}
            }
        }
		
		var toSent = 'gameID=' + data.gameID + '&gender=' + data.gender + '&birthdate=' + data.birthdate + '&email=' + data.email + 
					 '&style1A=' + data.style1A.toString() + '&style1B=' + data.style1B.toString() +
					 '&style2A=' + data.style2A.toString() + '&style2B=' + data.style2B.toString() + '&style=' + data.style;
        xhr.send(toSent);
}

function randomID() {
	var result = '';
	
	var charResult = '';
	var charLength = 3;
	var chars = 'abcdefghijklmnopqrstuvwxyz';
	for (var i = charLength; i > 0; --i) charResult += chars[Math.floor(Math.random() * chars.length)];
	
	var numResult = '';
	var numLength = 3;
	var nums = '0123456789';
	for (var i = numLength; i > 0; --i) numResult += nums[Math.floor(Math.random() * nums.length)];
	
	result = charResult + numResult;
	
	localStorage.setItem('gameID', result);

	return result;
}

document.getElementById('buttonChn').addEventListener('click', function(){
	language = 'Chinese';
	localStorage.clear()
	document.getElementById('language').setAttribute("style","display:none");
	
	var survey = new Survey.Model(surveyChnJSON);
	$("#surveyElement").Survey({
		model: survey,
		onComplete: sendDataToServer
	});
	
	var gameIDQuestion = survey.getQuestionByName("question0_1");
	if (gameIDQuestion) gameIDQuestion.defaultValue = randomID();
}, true);

document.getElementById('buttonEng').addEventListener('click', function(){
	language = 'English';
	localStorage.clear()
	document.getElementById('language').setAttribute("style","display:none");
	
    var survey = new Survey.Model(surveyEngJSON);
	$("#surveyElement").Survey({
		model: survey,
		onComplete: sendDataToServer
	});
	
	var gameIDQuestion = survey.getQuestionByName("question0_1");
	if (gameIDQuestion) gameIDQuestion.defaultValue = randomID();	
}, true);