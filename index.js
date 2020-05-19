Survey.StylesManager.applyTheme("modern");

var surveyJSON = {
 "locale": "zh-cn",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "question0_1",
     "title": {
      "default": "生成的游戏ID",
      "zh-cn": "游戏ID(自动生成，无需输入)"
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
     "title": "为了较好地理解某些事物，我首先",
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": "试试看"
      },
      {
       "value": "b",
       "text": "深思熟虑"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question2",
     "title": {
      "default": "为了较好地理解某些事物，我首先",
      "zh-cn": "我做事情喜欢"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "default": "试试看",
        "zh-cn": "讲究实际"
       }
      },
      {
       "value": "b",
       "text": {
        "default": "深思熟虑",
        "zh-cn": "标新立异"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question3",
     "title": {
      "default": "为了较好地理解某些事物，我首先",
      "zh-cn": "当我回想以前做过的事，我的脑海中大多会出现"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "default": "试试看",
        "zh-cn": "一幅画面"
       }
      },
      {
       "value": "b",
       "text": {
        "default": "深思熟虑",
        "zh-cn": "一些话语"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question4",
     "title": {
      "default": "为了较好地理解某些事物，我首先",
      "zh-cn": "我倾向于"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "default": "试试看",
        "zh-cn": "理解事物的某些细节，但对于整体结构却不太清楚"
       }
      },
      {
       "value": "b",
       "text": {
        "default": "深思熟虑",
        "zh-cn": "理解事物整体结构，但对于细节却不太清楚"
       }
      }
     ]
    }
   ],
   "title": "学习风格测试",
   "description": "在进行游戏之前，我们先通过学习风格测试，来确定你所偏好的学习风格。多年以来，你可能已经无形中培养了一些学习习惯，能够帮助你从某些经历中更好的学习和受益。本问卷没有时间限制，问卷结果准备性取决于你回答的真实性程度。答案没有对错之分，选择你觉得更接近的选项。"
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question5",
     "title": {
      "zh-cn": "下列何种方法比较能够帮助我学习一件新事物？"
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
     "name": "question6",
     "title": {
      "zh-cn": "假如我是老师，我会比较倾向教授"
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
     "name": "question7",
     "title": {
      "zh-cn": "我比较偏爱的获取新信息的方式是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "图画，图表，示意图"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "书面指导和言语信息"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question8",
     "title": {
      "zh-cn": "一旦我了解了"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "事物的所有部分，我就能把握其整体"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "事物的整体，我就知道其构成部分"
       }
      }
     ]
    }
   ],
   "title": {
    "zh-cn": "学习风格测试"
   },
   "description": {
    "zh-cn": "在进行游戏之前，我们先通过学习风格测试，来确定你所偏好的学习风格。多年以来，你可能已经无形中培养了一些学习习惯，能够帮助你从某些经历中更好的学习和受益。本问卷没有时间限制，问卷结果准备性取决于你回答的真实性程度。答案没有对错之分，选择你觉得更接近的选项。"
   }
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question9",
     "title": {
      "zh-cn": "在学习小组中遇到难题时，我通常会"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "积极投入其中，并且说出自己的想法"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "坐在旁边先听其他小组成员的意见"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question10",
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
     "name": "question11",
     "title": {
      "zh-cn": "在阅读一本带有许多图表的书时，我一般会"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "仔细观察图表"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "专注文字说明"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question12",
     "title": {
      "zh-cn": "当我解决数学题时，我常常"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "思考如何一步一步求解"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "先看解答，然后设法得出解题步骤"
       }
      }
     ]
    }
   ],
   "title": {
    "zh-cn": "学习风格测试"
   },
   "description": {
    "zh-cn": "在进行游戏之前，我们先通过学习风格测试，来确定你所偏好的学习风格。多年以来，你可能已经无形中培养了一些学习习惯，能够帮助你从某些经历中更好的学习和受益。本问卷没有时间限制，问卷结果准备性取决于你回答的真实性程度。答案没有对错之分，选择你觉得更接近的选项。"
   }
  },
  {
   "name": "page5",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question13",
     "title": {
      "zh-cn": "当我面对作业中的问题时，我通常会"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "立刻开始去解答"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "先尝试理解问题"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question14",
     "title": {
      "zh-cn": "我比较喜欢"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "确定性的想法"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "推论性的想法"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question15",
     "title": {
      "zh-cn": "我最能够记住"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "看到的东西"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "听到的东西"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question16",
     "title": {
      "zh-cn": "我特别喜欢老师"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "向我条理分明的呈现材料"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "先给我一个总体概貌，再将材料与其他主题相联系"
       }
      }
     ]
    }
   ],
   "title": {
    "zh-cn": "学习风格测试"
   },
   "description": {
    "zh-cn": "在进行游戏之前，我们先通过学习风格测试，来确定你所偏好的学习风格。多年以来，你可能已经无形中培养了一些学习习惯，能够帮助你从某些经历中更好的学习和受益。本问卷没有时间限制，问卷结果准备性取决于你回答的真实性程度。答案没有对错之分，选择你觉得更接近的选项。"
   }
  },
  {
   "name": "page6",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question17",
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
    },
    {
     "type": "radiogroup",
     "name": "question18",
     "title": {
      "zh-cn": "我比较有可能被认为是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "对工作细节很仔细的人"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "对工作有创造力的人"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question19",
     "title": {
      "zh-cn": "当我到一个陌生地方，我会希望自己拿到的指南是"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "一本地图"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "一本书面说明书"
       }
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question20",
     "title": {
      "zh-cn": "我通常这样学习"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "a",
       "text": {
        "zh-cn": "以相对规律的节奏，只要努力学习，就可以学会"
       }
      },
      {
       "value": "b",
       "text": {
        "zh-cn": "一开始可能非常困惑，一段时间过后恍然大悟"
       }
      }
     ]
    }
   ],
   "title": {
    "zh-cn": "学习风格测试"
   },
   "description": {
    "zh-cn": "在进行游戏之前，我们先通过学习风格测试，来确定你所偏好的学习风格。多年以来，你可能已经无形中培养了一些学习习惯，能够帮助你从某些经历中更好的学习和受益。本问卷没有时间限制，问卷结果准备性取决于你回答的真实性程度。答案没有对错之分，选择你觉得更接近的选项。"
   }
  }
 ],
 "showPrevButton": false,
 "showQuestionNumbers": "off",
 "questionErrorLocation": "bottom",
 "showProgressBar": "bottom",
 "questionTitlePattern": "numRequireTitle"
}

//Result JSON: { "question0_1": "gdx364", "question0_2": "F", "question0_3": "2020-05", "question0_4": "fsdfs@gmail.com", "question1": "b", "question2": "b", "question3": "a", "question4": "a", "question5": "b", "question6": "a", "question7": "a", "question8": "a", "question9": "b", "question10": "a", "question11": "a", "question12": "a" }
function sendDataToServer(result) {
    //send Ajax request to your web server.
	//document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);

    document.querySelector('#resTitle').innerHTML = '<b>测试结果</b><hr>';
	document.querySelector('#idName').innerHTML = '<b>游戏账号ID: </b>' + result.data.question0_1;
	
	var style1A = 0, style1B = 0;
	var style2A = 0, style2B = 0;
	var style3A = 0, style3B = 0;
	var style4A = 0, style4B = 0;
	
	for (var i=0; i<20; i++) {
		var ii = i + 1;
		var key = 'question' + ii.toString();
	    if (ii%4 == 1){
		    if (result.data[key] == 'a'){
				style1A += 1;
			}else{
				style1B += 1;
            }				
		}else if (ii%4 == 2) {
        	if (result.data[key] == 'a'){
				style2A += 1;
			}else{
				style2B += 1;
            }	
		}else if (ii%4 == 3) {
			if (result.data[key] == 'a'){
				style3A += 1;
			}else{
				style3B += 1;
            }	
		}else if (ii%4 == 0) {
			if (result.data[key] == 'a'){
				style4A += 1;
			}else{
				style4B += 1;
            }	
        }
	}
	
	var content = '该测试从以下四个维度测量学习风格：<br>';
	//console.log(style1A, style1B, style2A, style2B, style3A, style3B, style4A, style4B);
	
	content += "<br><b>*主动型(Active)/反思型(Reflective)</b><br>"
	if (style1A > style1B){
		content += "你是<u>主动型学习者</u>。主动型学习者倾向于积极参与活动来理解学到的新知识，例如参与讨论，将学到的知识实际运用等。<br>"
	}else{
		content += "你是<u>反思型学习者</u>。反思型学习者倾向于单独思考学习的新知识。<br>"
	}
	
	content += "<br><b>*感受型(Sensing)/直觉型(Intuitive)</b><br>"
	if (style2A > style2B){
		content += "你是<u>感受型学习者</u>。感受型学习者偏好学习具体的事实，喜欢用固有的方式解决问题，较有耐心的完成细节， 并且无法接受所学的内容和真实世界是没有关联的。<br>"
	}else{
		content += "你是<u>直觉型学习者</u>。直觉型学习者喜欢创新，不喜欢重复而规律的事物，擅长理解新的概念，无法忍受填鸭式的大量记忆和冗长枯燥的计算。<br>"
	}
	
	content += "<br><b>*视觉型(Visual)/文字型(Verbal)</b><br>"
	if (style3A > style3B){
		content += "你是<u>视觉型学习者</u>。视觉型学习者在使用图片、图表、架构图、视频等具体事物的呈现中会有较好的学习表现。<br>"
	}else{
		content += "你是<u>文字型学习者</u>，文字型学习者更加偏好文字说明或者口述讲解。<br>"
	}
	
	content += "<br><b>*循序型(Sequential)/整体型(Global)</b><br>"
	if (style4A > style4B){
		content += "你是<u>循序型学习者</u>。循序型学习者倾向于按部就班的进行学习，一步一步按照逻辑前进，一个阶段一个阶段的找出答案。<br>"
	}else{
		content += "你是<u>整体型学习者</u>，整体型学习者偏好跳跃式的学习，一旦领悟到整体的大方向后，就能迅速解决复杂的难题，但是却不一定能够解释是如何办到的。<br>"
	}
	
	content += "<br><b>现在你可以点击“去玩游戏”按钮，开始正式玩游戏，在接下来的游戏登录页面你需要填入你的游戏账号ID。</b>"

    document.querySelector('#statement').innerHTML = content;	
	document.querySelector('#button').innerHTML = "<input type='button', value='去玩游戏', class='sv-btn sv-footer__next-btn'>";
    document.getElementById('button').addEventListener('click', function(){
		window.location.href="http://192.168.1.138/game";
	}, true);
}

var survey = new Survey.Model(surveyJSON);

var gameIDQuestion = survey.getQuestionByName("question0_1");
if (gameIDQuestion) gameIDQuestion.defaultValue = randomID();

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

$("#surveyElement").Survey({
    model: survey,
    onComplete: sendDataToServer
});