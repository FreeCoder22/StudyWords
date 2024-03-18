import { WordModel } from "../../models/WordModel";
import Request from "../../utils/request";

async function getWordsByUserId(userId: string): Promise<WordModel[]> {
  const response = await Request.get(`/words/user/${userId}`);
  return response.data;
}
function getWords() {
  return Request.get("/words");
}

function getWord(id: string) {
  return Request.get(`/words/${id}`);
}
function postWord(word: WordModel) {
  return Request.post("/words", word);
}

function putWord(word: WordModel) {
  return Request.put(`/words/${word.id}`, word);
}

function deletetWords(ids: string[]) {
  return Request.delete(`/words`, {
    headers: {
      Accept: "application/json; charset=utf-8",
      "Content-Type": "application/json",
    },
    data: ids,
  });
}

export const Words = {
  getWordsByUserId,
  getWords,
  getWord,
  postWord,
  putWord,
  deletetWords,
};
