let state = {
    profilePage:{
        posts: [
            { id: 1, message: 'Hi, how are you?', like: 20, dislike: 2 },
            { id: 2, message: 'It`s my first post', like: 30, dislike: 3 }
        ]
    },
    messagesPage: {
        dialogs: [
        {id: 1, name: 'Алексей', ava:'http://photar.ru/wp-content/uploads/2017/11/fake4.jpg'},
        {id: 2, name: 'Андрей', ava:'https://amiel.club/uploads/posts/2022-03/1647762836_1-amiel-club-p-kartinki-litsa-cheloveka-1.jpg'}
        ],
        messages: [
        {id: 1, message: 'Yo, Black Yoshi MF!'},
        {id: 2, message: 'Yo, Black Furi MF!'},
        {id: 3, message: 'Yo, Black Nichi-ni MF!'}
    ]
}
}

export default state;