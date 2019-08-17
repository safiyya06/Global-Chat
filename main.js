var app = new Vue({
  el: "#app",
  data: {
    messages: [
      {
        message: "this is an example message",
        date: new Date()
      }
    ],
    newMessage: ""
  },
  methods: {
    enterNewMessage: function() {
      this.messages.push(this.newMessage);
      this.newMessage = "";
    },
    addToFirestore: function(newMessage) {
      db.collection("messages").add();
    }
  }
});
