import { WordModel } from "../../models/WordModel";
import Request from "../../utils/request";

async function getWordsByUserId(userId: string): Promise<WordModel[]> {
  const response = await Request.get(`/words/user/${userId}`);
  return response.data;
}
async function getWordsRandomByUserId(userId: string): Promise<WordModel[]> {
  const response = await Request.get(`/words/user/random/${userId}`);
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

function deletetWords(id: string) {
  return Request.delete(`/words/${id}`);
}

export const Words = {
  getWordsByUserId,
  getWordsRandomByUserId,
  getWords,
  getWord,
  postWord,
  putWord,
  deletetWords,
};
