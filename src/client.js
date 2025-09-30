import {
	BASE_URL,
	QUERY_questionDetail,
	QUERY_questionOfTodayV2,
} from "./constants.js";

/**
 * @typedef {import("./client.d.ts").QuestionOfTodayResponse} QuestionOfTodayResponse
 * @typedef {import("./client.d.ts").QuestionDetailResponse} QuestionDetailResponse
 */

export class LeetcodeClient {
	constructor() {
	}

	/**
	 * @private
	 */
	async graphql(query) {
		const res = await fetch(`${BASE_URL}/graphql/`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"Origin": BASE_URL,
				"Referer": `${BASE_URL}/problemset/`,
			},
			body: JSON.stringify(query),
		});

		const json = await res.json();
		return json;
	}

	/**
	 * @public
	 * @returns {Promise<QuestionOfTodayResponse>}
	 */
	async GetQuestionOfToday() {
		return this.graphql({
			query: QUERY_questionOfTodayV2,
		});
	}

	/**
	 * @public
	 * @param {string} titleSlug
	 * @returns {Promise<QuestionDetailResponse>}
	 */
	async GetQuestionDetail(titleSlug) {
		return this.graphql({
			query: QUERY_questionDetail,
			variables: {
				titleSlug,
			}
		});
	}
}
