var app = new Vue({
  el: "#app",
  data: {
    messages: ["Hello World!", "Apa khabar?", "Khabar baik"],
    newMessage: ""
  },
  methods: {
    enterNewMessage: function() {
      this.messages.push(this.newMessage);
    }
  }
});
