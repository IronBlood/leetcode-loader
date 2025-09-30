type LangSlug =
	| "cpp"
	| "java"
	| "python3"
	| "python"
	| "javascript"
	| "typescript"
	| "csharp"
	| "c"
	| "golang"
	| "kotlin"
	| "swift"
	| "rust"
	| "ruby"
	| "php"
	| "dart"
	| "scala"
	| "elixir"
	| "erlang"
	| "racket"
;

interface CodeSnippet {
	code: string;
	lang: string;
	langSlug: LangSlug;
}

interface TopicTag {
	name: string;
	slug: string;
	nameTranslated?: any;
}

export interface QuestionDetailResponse {
	data: {
		languageList: Array<{ id: number; name: string; }>;
		submittableLanguageList: Array<{ id: number; name: string; verboseName: string; }>;
		statusList: Array<{ id: number; name: String }>;
		QuestionDiscussionTopic: {
			id: number;
			commentCount: number;
			topLevelCommentCount: number;
		};
		ugcArticleOfficialSolutionArticle: {
			uuid: string;
			chargeType: string;
			canSee: boolean;
			hasVideoArticle: boolean;
		};
		question: {
			title: string;
			titleSlug: string;
			questionId: string;
			questionFrontendId: string;
			questionTitle: string;
			content: string;
			translatedContent: any;
			categoryTitle: string;
			difficulty: string;
			/** JSON string */
			stats: string;
			companyTagStatsV2: any;
			topicTags: TopicTag[];
			similarQuestionList: any[];
			mysqlSchemas: any[];
			dataSchemas: any[];
			frontendPreviews: string;
			likes: number;
			dislikes: number;
			isPaidOnly: boolean;
			status: any;
			canSeeQuestion: boolean;
			enableTestMode: boolean;
			/** JSON string */
			metaData: string;
			enableRunCode: boolean;
			enableSubmit: boolean;
			enableDebugger: boolean;
			/** JSON string with HTML content */
			envInfo: string;
			isLiked: any;
			nextChallenges: any[];
			libraryUrl: any;
			adminUrl: any;
			hints: string[];
			codeSnippets: CodeSnippet[];
			exampleTestcaseList: string[];
			hasFrontendPreview: boolean;
			featuredContests: Array<{ title: string; titleSlug: string }>;
		};
	}
}

export interface QuestionOfTodayResponse {
	data: {
		activeDailyCodingChallengeQuestion: {
			date: string;
			userStatus: string;
			link: string;
			question: {
				/** NOTE: internal? use `questionFrontendId` instead */
				id: string;
				/** NOTE: IMPORTANT used for link and API */
				titleSlug: string;
				title: string;
				translatedTitle: any;
				/** NOTE: IMPORTANT */
				questionFrontendId: number;
				paidOnly: boolean;
				difficulty: string;
				topicTags: TopicTag[],
				status: any;
				isInMyFavorites: boolean;
				acRate: number;
				frequency: null;
			}
		}
	}
}

interface QuestionListEntry {
	difficulty: string;
	id: number;
	paidOnly: boolean;
	questionFrontendId: string;
	status: string;
	title: string;
	titleSlug: string;
	topicTags: Array<{
		name: string;
		slug: string;
		__typename: string;
	}>;
	frequency: any;
	isInMyFavorites: boolean
	acRate: number;
	contestPoint: any;
	__typename: string;
}

export interface QuestionListV2Response {
	data: {
		problemsetQuestionListV2: {
			questions: QuestionListEntry[];
			totalLength: number;
			finishedLength: number;
			hasMore: boolean;
		}
	}
}

export class LeetcodeClient {
	GetQuestionOfToday(): Promise<QuestionOfTodayResponse>;
	GetQuestionDetail(titleSlug: string): Promise<QuestionDetailResponse>;
	GetQuestionList(skip: number, limit?: number): Promise<QuestionListV2Response>;
}
