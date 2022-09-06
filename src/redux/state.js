let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'it\'s my first Post', likeCount: 34},
            {id: 2, message: 'Hi My name is Bob Singer!', likeCount: 4},
        ],
    },
    dialogPage: {
        usersData: [
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Fil'},
            {id: 3, name: 'Patrick'},
            {id: 4, name: 'John'},
        ],
        dialogsData: [
            {id: 1, massage: 'Hey!'},
            {id: 2, massage: 'How are you?'},
            {id: 3, massage: 'Are you here?'},
            {id: 4, massage: 'Man!?'},
        ]
    },
    siteBar: {
        friends :[
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Sven'},
            {id: 3, name: 'Kira'},
        ]
    }
}
export default state