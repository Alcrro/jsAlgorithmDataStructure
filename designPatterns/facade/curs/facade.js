/*
! Facade Pattern

?	The facade pattern (also spelled façade) is a software-design pattern commonly used in object-oriented programming. Analogous to a facade in architecture, 
?		a facade is an object that serves as a front-facing interface masking more complex underlying or structural code. A facade can:

?	-	improve the readability and usability of a software library by masking interaction with more complex components behind a single (and often simplified) API
?	-	provide a context-specific interface to more generic functionality (complete with context-specific input validation)
?	-	serve as a launching point for a broader refactor of monolithic or tightly-coupled systems in favor of more loosely-coupled code

*/

// function getUser() {
//   return fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// }

// function getUsersPosts(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
//     method: "Get",
//     headers: { "Content-Type": "applications/json" },
//   }).then((res) => res.json());
// }

// getUser().then((users) => {
//   users.forEach((user) => {
//     getUsersPosts(user.id).then((posts) => {
//       console.log(user.name);
//       console.log(posts.length);
//     });
//   });
// });

//! implementation Facade

function getUserFacade() {
  return getFetchFacade("https://jsonplaceholder.typicode.com/users");
}

function getUsersPostsFacade(userId) {
  return getFetchFacade("https://jsonplaceholder.typicode.com/posts", {
    userId: userId,
  });
}

getUserFacade().then((users) => {
  users.forEach((user) => {
    getUsersPostsFacade(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

function getFetchFacade(url, params = {}) {
  const queryString = Object.entries(params)
    .map((param) => {
      return `${param[0]}=${param[1]}`;
    })
    .join("&");
  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}
