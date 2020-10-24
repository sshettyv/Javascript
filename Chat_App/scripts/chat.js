// add new doc
//set up real time listener
// update username and room when changed


class Chatroom {
  constructor(room,username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chat-room')
    this.unsub;
  }

  async addChat(message){
    //format a chat object
    const now = new Date();
    const chat = {
      message, //same as  message : message
      username : this.username,
      room : this.room,
      created_at : firebase.firestore.Timestamp.fromDate(now)
    };
    //save the chat document
    const response = await this.chats.add(chat);
    return response;
  }

  // real time listener
  getChats(callback){
    this.unsub = this.chats
    .where('room','==',this.room)
    .orderBy('created_at')
    .onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type === 'added'){
          //update the ui 
          callback(change.doc.data());
        }
      });
    });
  }
  updateName(username){
    this.username = username;
    localStorage.setItem('username',username);
  }
  // when the user changes the room ,
  // the document should change topo
  updateRoom(room){
    this.room = room; 
    console.log('room updated');
    if(this.unsub){
      this.unsub();
    }
  }
}


