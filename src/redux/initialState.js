export const adminMessage = {
    authorId: 'Admin',
    text: 'Your message is accepted!'
  };

export const initialChats = {
  user: {id: 23, name: 'John'},
  chats: [
    { idChat: 1, chatName: 'Admin', messages: [{ authorId: 1, name: 'Admin', text: 'Chat not choosed'}]},
    { idChat: 2, chatName: 'Nick', messages: [{ authorId: 22, name: 'Nick', text: 'Hello User'}]},
    { idChat: 3, chatName: 'Jack', messages: [{ authorId: 15, name: 'Jack', text: 'Hello User'}]},
    { idChat: 4, chatName: 'Ben', messages: [{ authorId: 6, name: 'Ben', text: 'Hello User'}]}
  ]
};

export const initialFriends = {
  user: {id: 23, name: 'John'},
  list: [
    {userId: 1, name: 'Admin'},
    {userId: 22, name: 'Nick'},
    {userId: 15, name: 'Jack'},
    {userId: 6, name: 'Ben'},
  ]
}