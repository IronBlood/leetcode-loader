import { readFileSync } from "node:fs";

export const BASE_URL = "https://leetcode.com";

const load_query = (filename) => readFileSync(new URL(`./queries/${filename}.graphql`, import.meta.url), "utf8")

export const QUERY_questionOfTodayV2 = load_query("questionOfTodayV2");
export const QUERY_questionDetail = load_query("questionDetail");
