exact = tepat > url path tepat seperti yang dideklarasikan,
        jika tanpa exact maka path terdapat pada browser meskipun memiliki sub path lain 

Lihat pendeklarasin Route dengan path '/React-Router/Basic-Router' pada App.js,
pendeklarasian route tersebut tidak menggunakan attribute 'exact', 
dikarenakan route yang dideklarasikan disini membutuhkan komponen yang di return oleh route path '/React-Router/Basic-Router'.

Sehingga pada saat path menuju route yang baru dideklarasikan pada Switch, 
Route '/React-Router/Basic-Router' akan tetap mengembalikan komponen dengan tambahan komponen yang dikembalikan oleh route yang di deklarasikan pada Switch ini sesuai path url browser