import { useState, useEffect } from 'react';
import { Words } from '../pages/word/wordApi';
import { UserModel } from '../models/UserModel';

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<UserModel>();

  useEffect(() => {
    Words.getUserByEmail("user@study.com").then(user => {
        if(!currentUser)
        setCurrentUser(user.data)
  })
  });

  return currentUser;
}