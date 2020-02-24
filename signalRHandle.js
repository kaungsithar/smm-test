// // $.connection.hub.url = "https://smmapiyammo.azurewebsites.net/signalr";
// // $.connection.hub.url = "https://smmtestapi.azurewebsites.net/signalr";
// // $.connection.hub.url = "https://smm111.azurewebsites.net/signalr";
// // $.connection.hub.url = "http://191.255.0.179:2000/signalr";
// // $.connection.hub.url = "http://localhost:2000/signalr";
// $.connection.hub.url = "https://smmbmwapi.azurewebsites.net/signalr";
// var chathub = $.connection.chatHub;
// // let user = JSON.parse(atob(localStorage.token));
// let connectionId = "";
// // $.connection.hub.qs = {
// //   // userId: localStorage.agentId,
// //   // channelId: localStorage.channelId,
// //   agentID: user.id,
// //   agentName: user.username
// // };

// $(function () {
//   $.connection.hub.start()
//     .done(function () {
//       connectionId = $.connection.hub.id;
//     })
//     .fail(function () {
//       // console.log('why')
//     });


//   $.connection.hub.reconnected(function () {

//     connectionId = $.connection.hub.id;
//   });

//   $.connection.hub.reconnecting(function () {

//   });

//   $.connection.hub.disconnected(function () {

//   });
// });

// chathub.client.newCustomerMessage = msg => {
  
//   vm.$store.commit("addMessage",msg);
// };

// chathub.client.pushNewCustomer = customer => {
//   vm.$store.commit("pushNewCustomer",customer);
// };


// chathub.client.reloadPage = () => {
//   location.reload();
// };

// chathub.client.newCustomer = customer => {
  
//   vm.$store.commit("addNewCustomer",customer);
// };

// chathub.client.updateCustomer = customer => {
//   vm.$store.commit("updateCustomer",customer);
  
// };  

// chathub.client.updateSource = (a, name) => {
//   var sourceObj = {
//     status: a,
//     FBName: name
//   }
//   vm.$store.commit("updateSource", sourceObj);
//   //console.log(a);
//   //console.log("signalR="+name);
// };
