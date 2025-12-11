function getUserData(username, onSuccess, onFailure) {
  if (username == "abc") {
    let data = { name: "ABC", userid: "2121" };
    onSuccess(data);
  } else {
    onFailure("No user found");
  }
}

function getPost(userid, onSuccess, onFailure) {
  if (userid) {
    const postData = {
      caption: "Travelling to New york",
      postId: "21211",
    };

    onSuccess(postData);
  } else {
    onFailure("No post for this user");
  }
}

function getComment(postId, onSuccess, onFailure) {
  if (postId) {
    const comment = {
      comment: "Nice",
      commentid: "212121",
    };
    onSuccess(comment);
  } else {
    onFailure("No comment");
  }
}

getUserData(
  "abc",
  (userData) => {
    console.log("User data recieved", userData);
    getPost(
      userData.userid,
      (postData) => {
        console.log("Post recieved", postData);
        getComment(
          postData.postId,
          (comment) => {
            console.log("Coment recieved", comment);
          },
          (err) => {
            console.log("Comment", err);
          }
        );
      },
      (err) => {
        console.log("Post", err);
      }
    );
  },
  (err) => {
    console.log("User", err);
  }
);
