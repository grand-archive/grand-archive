import { getApps, initializeApp } from 'firebase/app'

export const firebase =
  getApps().length === 0
    ? initializeApp({
        apiKey: 'AIzaSyASRWGh4R3nuEphAkuEdOrjtEcmhiWk1FE',
        authDomain: 'grand-archive.firebaseapp.com',
        databaseURL: 'https://grand-archive-default-rtdb.firebaseio.com',
        projectId: 'grand-archive',
        storageBucket: 'grand-archive.appspot.com',
        messagingSenderId: '703520202408',
        appId: '1:703520202408:web:81373546a13c4eacb2ec9d',
        measurementId: 'G-8YNSXL34Q7'
      })
    : getApps()[0]
